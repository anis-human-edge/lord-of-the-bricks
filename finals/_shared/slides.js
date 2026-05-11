/* =========================================================
   FINALS KIT — slides.js
   Slide IntersectionObserver · progress bar · keyboard nav.
   Lifted from partners.html with light-theme tweaks.
   ========================================================= */

(function deckBoot() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;
  const cur = document.getElementById("cur");
  const tot = document.getElementById("tot");
  const progress = document.getElementById("deckProgress");

  if (tot) tot.textContent = String(slides.length).padStart(2, "0");

  // Slide intersection — sets .is-active and fires .is-in on reveal primitives
  const slideObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-active");
      e.target.querySelectorAll(".r-up, .r-fade, .r-mask, .r-scale, .kinetic")
        .forEach((el) => el.classList.add("is-in"));
      const n = parseInt(e.target.dataset.slide, 10);
      if (cur && !Number.isNaN(n)) cur.textContent = String(n).padStart(2, "0");
    });
  }, { threshold: 0.45 });
  slides.forEach((s) => slideObs.observe(s));

  // Progress bar
  function updateProgress() {
    if (!progress) return;
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    progress.style.setProperty("--p", p + "%");
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Keyboard nav — arrow / pgup / pgdn / space
  window.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea, select")) return;
    let dir = 0;
    if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " " || e.key === "ArrowRight") dir = 1;
    else if (e.key === "ArrowUp" || e.key === "PageUp" || e.key === "ArrowLeft") dir = -1;
    else if (e.key === "Home") { slides[0].scrollIntoView({ behavior: "smooth", block: "start" }); e.preventDefault(); return; }
    else if (e.key === "End") { slides[slides.length - 1].scrollIntoView({ behavior: "smooth", block: "start" }); e.preventDefault(); return; }
    else if (e.key === "f" || e.key === "F") {
      // F toggles fullscreen
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
      else document.exitFullscreen?.();
      e.preventDefault();
      return;
    } else return;
    e.preventDefault();
    const y = window.scrollY + window.innerHeight * 0.5;
    let idx = 0;
    slides.forEach((s, i) => { if (y >= s.offsetTop) idx = i; });
    const next = Math.max(0, Math.min(slides.length - 1, idx + dir));
    slides[next].scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
