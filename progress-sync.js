(() => {
  const STORAGE_KEY = "marvel-marathon-progress";
  const ID_KEY = "marvel-marathon-browser-id";
  const originalSetItem = Storage.prototype.setItem;
  let syncing = false;
  let connected = false;
  let saveTimer;

  function browserId() {
    let id = localStorage.getItem(ID_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(ID_KEY, id);
    }
    return id;
  }

  function localProgress() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(value) ? value.filter(Number.isInteger) : [];
    } catch {
      return [];
    }
  }

  async function saveToCloud() {
    try {
      const response = await fetch(`/api/progress?id=${encodeURIComponent(browserId())}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ progress: localProgress() })
      });
      if (!response.ok) throw new Error("Cloud save failed");
      connected = true;
    } catch (error) {
      console.warn("Marvel Marathon: cloud save unavailable; local progress is still saved.", error);
    }
  }

  // Keep the existing app's instant local save and mirror changes to Netlify Blobs.
  Storage.prototype.setItem = function (key, value) {
    originalSetItem.call(this, key, value);
    if (key === STORAGE_KEY && !syncing && connected) {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(saveToCloud, 250);
    }
  };

  async function initializeCloudSync() {
    try {
      const response = await fetch(`/api/progress?id=${encodeURIComponent(browserId())}`);
      if (!response.ok) throw new Error("Cloud load failed");
      const data = await response.json();

      if (data.found && Array.isArray(data.progress)) {
        const wanted = new Set(data.progress);
        syncing = true;
        document.querySelectorAll(".title-card").forEach(card => {
          const index = Number(card.dataset.index);
          const isDone = card.classList.contains("done");
          if (isDone !== wanted.has(index)) card.querySelector(".check-button")?.click();
        });
        syncing = false;
      } else {
        // First cloud visit: preserve this browser's existing localStorage progress.
        await saveToCloud();
      }
      connected = true;
    } catch (error) {
      syncing = false;
      console.info("Marvel Marathon is using local-only progress until cloud storage is available.", error);
    }
  }

  initializeCloudSync();
})();
