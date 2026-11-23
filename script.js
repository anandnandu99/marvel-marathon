const titles = [
  { title: "Captain America: The First Avenger", year: "1943", type: "Film", code: "CA", color: "#254b79" },
  { title: "Agent Carter", year: "1946", type: "Series", code: "AC", color: "#6e2d38" },
  { title: "Captain Marvel", year: "1995", type: "Film", code: "CM", color: "#1c6682" },
  { title: "Iron Man", year: "2010", type: "Film", code: "IM", color: "#8e311e" },
  { title: "Iron Man 2", year: "2011", type: "Film", code: "IM2", color: "#6b2d24" },
  { title: "Thor", year: "2011", type: "Film", code: "TH", color: "#3c5e73" },
  { title: "The Avengers", year: "2012", type: "Film", code: "AV", color: "#303e72" },
  { title: "Thor: The Dark World", year: "2013", type: "Film", code: "TDW", color: "#654a7a" },
  { title: "Iron Man 3", year: "2013", type: "Film", code: "IM3", color: "#794c34" },
  { title: "Captain America: The Winter Soldier", year: "2014", type: "Film", code: "WS", color: "#3b4e63" },
  { title: "Guardians of the Galaxy", year: "2014", type: "Film", code: "GOTG", color: "#663753" },
  { title: "Guardians of the Galaxy Vol. 2", year: "2014", type: "Film", code: "GOTG2", color: "#5c2d69" },
  { title: "I Am Groot", year: "2015", type: "Series", code: "GROOT", color: "#486138" },
  { title: "Daredevil", year: "2015", type: "Series", code: "DD", color: "#7a2027" },
  { title: "Avengers: Age of Ultron", year: "2015", type: "Film", code: "AU", color: "#4d303e" },
  { title: "Ant-Man", year: "2015", type: "Film", code: "AM", color: "#7a2628" },
  { title: "Jessica Jones", year: "2015", type: "Series", code: "JJ", color: "#4e315e" },
  { title: "Captain America: Civil War", year: "2016", type: "Film", code: "CW", color: "#3c4d63" },
  { title: "Black Panther", year: "2016", type: "Film", code: "BP", color: "#3e3d73" },
  { title: "Luke Cage", year: "2016", type: "Series", code: "LC", color: "#7d5b25" },
  { title: "Spider-Man: Homecoming", year: "2016", type: "Film", code: "SM", color: "#8a2d32" },
  { title: "Doctor Strange", year: "2016", type: "Film", code: "DS", color: "#9a4b29" },
  { title: "Iron Fist", year: "2017", type: "Series", code: "IF", color: "#476f6a" },
  { title: "Thor: Ragnarok", year: "2017", type: "Film", code: "TR", color: "#39645f" },
  { title: "The Defenders", year: "2017", type: "Series", code: "DEF", color: "#4e4d55" },
  { title: "Punisher", year: "2017", type: "Series", code: "PU", color: "#2f3338" },
  { title: "Black Panther: Wakanda Forever", year: "2018", type: "Film", code: "WF", color: "#5a2d75" },
  { title: "Avengers: Infinity War", year: "2018", type: "Film", code: "IW", color: "#564664" },
  { title: "Ant-Man and the Wasp", year: "2018", type: "Film", code: "AW", color: "#82374e" },
  { title: "Avengers: Endgame", year: "2023", type: "Film", code: "EG", color: "#585970" },
  { title: "WandaVision", year: "2023", type: "Series", code: "WV", color: "#83313d" },
  { title: "The Falcon and the Winter Soldier", year: "2024", type: "Series", code: "FWS", color: "#4b5d71" },
  { title: "Spider-Man: Far From Home", year: "2024", type: "Film", code: "FFH", color: "#8c3c50" },
  { title: "Loki Season 1", year: "2012–2021", type: "Series", code: "L1", color: "#4c7b5c" },
  { title: "What If...? Season 1", year: "Alternate", type: "Series", code: "WI", color: "#80518b" },
  { title: "Shang-Chi", year: "2024", type: "Film", code: "SC", color: "#8a672d" },
  { title: "The Eternals", year: "Past–2024", type: "Film", code: "ET", color: "#5a3d83" },
  { title: "Doctor Strange in the Multiverse of Madness", year: "2024", type: "Film", code: "MOM", color: "#9a512c" },
  { title: "Ms. Marvel", year: "2025", type: "Series", code: "MSM", color: "#8d3b66" },
  { title: "Thor: Love and Thunder", year: "2025", type: "Film", code: "LT", color: "#497899" },
  { title: "Moon Knight", year: "2025", type: "Series", code: "MK", color: "#73766d" },
  { title: "Hawkeye", year: "2024", type: "Series", code: "HK", color: "#6e3e36" },
  { title: "Black Widow", year: "2016", type: "Film", color: "#3d444b", code: "BW" },
  { title: "Echo", year: "2025", type: "Series", code: "EC", color: "#7d4743" },
  { title: "Werewolf by Night", year: "2025", type: "Special", code: "WBN", color: "#4c5550" },
  { title: "Black Panther: Wakanda Forever", year: "2025", type: "Film", code: "WF", color: "#453372" },
  { title: "The Guardians of the Galaxy Holiday Special", year: "2025", type: "Special", code: "GHS", color: "#5d4877" },
  { title: "Guardians of the Galaxy Vol. 3", year: "2026", type: "Film", code: "GOTG3", color: "#52607a" },
  { title: "Secret Invasion", year: "2025", type: "Series", code: "SI", color: "#4d614d" },
  { title: "The Marvels", year: "2026", type: "Film", code: "TM", color: "#3e6577" },
  { title: "Loki Season 2", year: "Timeline-2026", type: "Series", code: "L2", color: "#40664d" },
  { title: "Echo", year: "2025", type: "Series", code: "EC", color: "#763e3e" },
  { title: "Agatha All Along", year: "2026", type: "Series", code: "AAA", color: "#75526d" },
  { title: "What If...? Season 2", year: "Alternate", type: "Series", code: "WI2", color: "#77518a" },
  { title: "Daredevil: Born Again", year: "2027", type: "Series", code: "DBA", color: "#79292f" },
  { title: "Captain America: Brave New World", year: "2027", type: "Film", code: "BNW", color: "#325c7a" },
  { title: "Thunderbolts*", year: "2027", type: "Film", code: "TB", color: "#4d534d" },
  { title: "Ironheart", year: "2025", type: "Series", code: "IH", color: "#7a3b31" }
];

const timeline = document.querySelector("#timeline");
const progressRing = document.querySelector("#progressRing");
const progressPercent = document.querySelector("#progressPercent");
const watchedCount = document.querySelector("#watchedCount");
const totalCount = document.querySelector("#totalCount");
const miniProgress = document.querySelector("#miniProgress");
const toast = document.querySelector("#toast");

let completed = new Set(JSON.parse(localStorage.getItem("marvel-marathon-progress") || "[]"));
let activeFilter = "all";

function save() {
  localStorage.setItem("marvel-marathon-progress", JSON.stringify([...completed]));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function updateProgress() {
  const percent = titles.length ? Math.round(completed.size / titles.length * 100) : 0;
  progressPercent.textContent = `${percent}%`;
  watchedCount.textContent = completed.size;
  totalCount.textContent = titles.length;
  progressRing.style.setProperty("--progress", `${percent * 3.6}deg`);
  miniProgress.style.width = `${percent}%`;
}

function render() {
  const visible = activeFilter === "all"
    ? titles
    : titles.filter(item => item.type === activeFilter);

  timeline.innerHTML = visible.map((item, visibleIndex) => {
    const index = titles.indexOf(item);
    return `
      <article class="title-card ${completed.has(index) ? "done" : ""}" data-index="${index}">
        <button class="check-button" type="button" aria-label="${completed.has(index) ? "Mark" : "Mark"} ${item.title} as watched" aria-pressed="${completed.has(index)}"></button>
        <div class="poster" style="--accent:${item.color}">${item.code}</div>
        <div class="title-info">
          <span class="meta">${String(visibleIndex + 1).padStart(2, "0")} · ${item.type}</span>
          <h3>${item.title}</h3>
          <p>${item.type === "Film" ? "Feature film" : item.type === "Series" ? "Streaming series" : "Marvel special presentation"}</p>
        </div>
        <span class="year">${item.year}</span>
      </article>`;
  }).join("");

  document.querySelectorAll(".check-button").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".title-card");
      const index = Number(card.dataset.index);
      if (completed.has(index)) {
        completed.delete(index);
        card.classList.remove("done");
        button.setAttribute("aria-pressed", "false");
        showToast("Removed from watched list");
      } else {
        completed.add(index);
        card.classList.add("done");
        button.setAttribute("aria-pressed", "true");
        showToast("Title marked as watched");
      }
      save();
      updateProgress();
    });
  });
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    render();
  });
});

document.querySelector("#resetButton").addEventListener("click", () => {
  if (!completed.size) return showToast("Progress is already clear");
  completed.clear();
  save();
  render();
  updateProgress();
  showToast("Marathon progress reset");
});

render();
updateProgress();
