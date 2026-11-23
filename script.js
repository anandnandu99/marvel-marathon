const posterBase = "https://image.tmdb.org/t/p/w342";

const titles = [
  { title: "Captain America: The First Avenger", year: "1943", type: "Film", code: "CA", poster: "/vSNxAJTlD0r02V9sPYpF1KzJmB.jpg", accent: "#254b79" },
  { title: "Captain Marvel", year: "1995", type: "Film", code: "CM", poster: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", accent: "#1c6682" },
  { title: "Iron Man", year: "2010", type: "Film", code: "IM", poster: "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", accent: "#8e311e" },
  { title: "Iron Man 2", year: "2011", type: "Film", code: "IM2", poster: "/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg", accent: "#6b2d24" },
  { title: "The Incredible Hulk", year: "2011", type: "Film", code: "IH", poster: "/gKzYx79y0AQTL4UAk1cBQJ9M.jpg", accent: "#687a35" },
  { title: "Thor", year: "2011", type: "Film", code: "TH", poster: "/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg", accent: "#3c5e73" },
  { title: "The Avengers", year: "2012", type: "Film", code: "AV", poster: "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", accent: "#303e72" },
  { title: "Thor: The Dark World", year: "2013", type: "Film", code: "TDW", poster: "/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg", accent: "#654a7a" },
  { title: "Iron Man 3", year: "2013", type: "Film", code: "IM3", poster: "/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg", accent: "#794c34" },
  { title: "Captain America: The Winter Soldier", year: "2014", type: "Film", code: "WS", poster: "/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg", accent: "#3b4e63" },
  { title: "Guardians of the Galaxy", year: "2014", type: "Film", code: "GOTG", poster: "/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg", accent: "#663753" },
  { title: "Guardians of the Galaxy Vol. 2", year: "2014", type: "Film", code: "GOTG2", poster: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg", accent: "#5c2d69" },
  { title: "Avengers: Age of Ultron", year: "2015", type: "Film", code: "AU", poster: "/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg", accent: "#4d303e" },
  { title: "Ant-Man", year: "2015", type: "Film", code: "AM", poster: "/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg", accent: "#7a2628" },
  { title: "Captain America: Civil War", year: "2016", type: "Film", code: "CW", poster: "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg", accent: "#3c4d63" },
  { title: "Black Widow", year: "2016", type: "Film", code: "BW", poster: "/qAZ0pzat24kLdHElU2qF4x8uV1T.jpg", accent: "#3d444b" },
  { title: "Black Panther", year: "2016", type: "Film", code: "BP", poster: "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", accent: "#3e3d73" },
  { title: "Spider-Man: Homecoming", year: "2016", type: "Film", code: "SM", poster: "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg", accent: "#8a2d32" },
  { title: "Doctor Strange", year: "2016", type: "Film", code: "DS", poster: "/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg", accent: "#9a4b29" },
  { title: "Thor: Ragnarok", year: "2017", type: "Film", code: "TR", poster: "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg", accent: "#39645f" },
  { title: "Ant-Man and the Wasp", year: "2018", type: "Film", code: "AW", poster: "/cFQEO687n1K6umXbInzocxcnAQH.jpg", accent: "#82374e" },
  { title: "Avengers: Infinity War", year: "2018", type: "Film", code: "IW", poster: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", accent: "#564664" },
  { title: "Avengers: Endgame", year: "2019", type: "Film", code: "EG", poster: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg", accent: "#585970" },
  { title: "Shang-Chi and the Legend of the Ten Rings", year: "2024", type: "Film", code: "SC", poster: "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg", accent: "#8a672d" },
  { title: "Spider-Man: Far From Home", year: "2024", type: "Film", code: "FFH", poster: "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg", accent: "#8c3c50" },
  { title: "Eternals", year: "Past–2024", type: "Film", code: "ET", poster: "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg", accent: "#5a3d83" },
  { title: "Spider-Man: No Way Home", year: "2024", type: "Film", code: "NWH", poster: "/5weKu49pzJCt06OPpjvT80efnQj.jpg", accent: "#8a3039" },
  { title: "Doctor Strange in the Multiverse of Madness", year: "2024", type: "Film", code: "MOM", poster: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg", accent: "#9a512c" },
  { title: "Black Panther: Wakanda Forever", year: "2024", type: "Film", code: "WF", poster: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg", accent: "#453372" },
  { title: "Thor: Love and Thunder", year: "2024", type: "Film", code: "LT", poster: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg", accent: "#497899" },
  { title: "Ant-Man and the Wasp: Quantumania", year: "2025", type: "Film", code: "AM3", poster: "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg", accent: "#375769" },
  { title: "Guardians of the Galaxy Vol. 3", year: "2026", type: "Film", code: "GOTG3", poster: "/r2J02Z2OpNTctfOSN1YdgktPqfJ.jpg", accent: "#52607a" },
  { title: "The Marvels", year: "2026", type: "Film", code: "TM", poster: "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg", accent: "#3e6577" },
  { title: "Deadpool & Wolverine", year: "2024", type: "Film", code: "DPW", poster: null, accent: "#8c2028" },
  { title: "Captain America: Brave New World", year: "2027", type: "Film", code: "BNW", poster: "/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg", accent: "#325c7a" },
  { title: "Thunderbolts*", year: "2027", type: "Film", code: "TB", poster: "/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg", accent: "#4d534d" },
  { title: "The Fantastic Four: First Steps", year: "2025", type: "Film", code: "FF", poster: null, accent: "#3f6388" },
  { title: "Spider-Man: Brand New Day", year: "2028", type: "Film", code: "BND", poster: null, accent: "#a42d35" },
  { title: "Avengers: Doomsday", year: "2028", type: "Film", code: "AD", poster: null, accent: "#514b66" }
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

function save() { localStorage.setItem("marvel-marathon-progress", JSON.stringify([...completed])); }
function showToast(message) { toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800); }
function updateProgress() { const percent = titles.length ? Math.round(completed.size / titles.length * 100) : 0; progressPercent.textContent = `${percent}%`; watchedCount.textContent = completed.size; totalCount.textContent = titles.length; progressRing.style.setProperty("--progress", `${percent * 3.6}deg`); miniProgress.style.width = `${percent}%`; }

function showPosterFallback(image) {
  const card = image.closest(".title-card");
  if (!card) return;
  const item = titles[Number(card.dataset.index)];
  const fallback = document.createElement("div");
  fallback.className = "poster poster-fallback";
  fallback.style.setProperty("--accent", item.accent);
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", `${item.title} poster artwork unavailable`);
  fallback.innerHTML = `<span class="fallback-mark">${item.code}</span><span class="fallback-title"></span>`;
  fallback.querySelector(".fallback-title").textContent = item.title;
  image.replaceWith(fallback);
}

function render() {
  const visible = activeFilter === "all" ? titles : titles.filter(item => item.type === activeFilter);
  timeline.innerHTML = visible.map((item, visibleIndex) => {
    const index = titles.indexOf(item);
    return `<article class="title-card ${completed.has(index) ? "done" : ""}" data-index="${index}" style="--accent:${item.accent}">
      <button class="check-button" type="button" aria-label="Mark ${item.title} as watched" aria-pressed="${completed.has(index)}"></button>
      <div class="poster-frame">${item.poster ? `<img src="${posterBase}${item.poster}" alt="${item.title} poster" loading="lazy" />` : `<div class="poster poster-fallback" role="img" aria-label="${item.title} poster artwork unavailable"><span class="fallback-mark">${item.code}</span><span class="fallback-title">${item.title}</span></div>`}</div>
      <div class="title-info"><span class="meta">${String(visibleIndex + 1).padStart(2, "0")} · ${item.type}</span><h3>${item.title}</h3><p>${item.type === "Film" ? "Feature film" : item.type === "Series" ? "Streaming series" : "Marvel special presentation"}</p></div>
      <span class="year">${item.year}</span>
    </article>`;
  }).join("");

  timeline.querySelectorAll(".poster-frame img").forEach(image => {
    image.addEventListener("error", () => showPosterFallback(image), { once: true });
    if (image.complete && image.naturalWidth === 0) showPosterFallback(image);
  });

  document.querySelectorAll(".check-button").forEach(button => button.addEventListener("click", () => {
    const card = button.closest(".title-card"); const index = Number(card.dataset.index);
    if (completed.has(index)) { completed.delete(index); card.classList.remove("done"); button.setAttribute("aria-pressed", "false"); showToast("Removed from watched list"); }
    else { completed.add(index); card.classList.add("done"); button.setAttribute("aria-pressed", "true"); showToast("Title marked as watched"); }
    save(); updateProgress();
  }));
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => { document.querySelector(".filter.active")?.classList.remove("active"); button.classList.add("active"); activeFilter = button.dataset.filter; render(); }));
document.querySelector("#resetButton").addEventListener("click", () => { if (!completed.size) return showToast("Progress is already clear"); completed.clear(); save(); render(); updateProgress(); showToast("Marathon progress reset"); });
render(); updateProgress();
