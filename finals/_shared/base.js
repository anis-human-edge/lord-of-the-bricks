/* =========================================================
   FINALS KIT — base.js
   Gate · reveal observer · breadcrumb T-minus · countdown
   Vanilla, no framework. Loaded by every gated page.
   ========================================================= */

/* ---------- GATE ----------
   UI-only passphrase. ACKNOWLEDGED THEATRE: anyone with
   view-source can read this. Real strategy belongs nowhere
   we wouldn't share. The point is to deter casual visitors.
   To change the passphrase, edit PHRASE below.
*/
const PHRASE = "lordofthebricks2026";
const SESSION_KEY = "lotbFinalsGate.v1";

function isUnlocked() {
  try { return sessionStorage.getItem(SESSION_KEY) === "1"; } catch { return false; }
}

function unlock() {
  try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
  removeGate();
  document.body.classList.remove("is-locked");
}

function removeGate() {
  const g = document.getElementById("kitGate");
  if (g) g.remove();
}

function mountGate() {
  document.body.classList.add("is-locked");
  const g = document.createElement("div");
  g.id = "kitGate";
  g.className = "gate";
  g.innerHTML = `
    <div class="gate-card">
      <span class="eyebrow is-red">Lord of the Bricks · Internal kit</span>
      <h1>Mission Control is locked.</h1>
      <p>This is the team's working space for the Korea Open Invitational.
        Enter the team passphrase to continue.</p>
      <form class="gate-form" id="kitGateForm" autocomplete="off">
        <input type="password" id="kitGateInput" placeholder="passphrase" aria-label="Passphrase" autofocus />
        <button type="submit">Enter</button>
      </form>
      <div class="gate-error" id="kitGateError" aria-live="polite"></div>
      <div class="gate-foot">UI gate only — not encrypted. Don't share publicly.</div>
    </div>
  `;
  document.body.appendChild(g);
  const f = document.getElementById("kitGateForm");
  const inp = document.getElementById("kitGateInput");
  const err = document.getElementById("kitGateError");
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = (inp.value || "").trim().toLowerCase();
    if (v === PHRASE.toLowerCase()) {
      unlock();
    } else {
      err.textContent = "Wrong passphrase. Try again.";
      inp.value = "";
      inp.focus();
    }
  });
}

(function gateBoot() {
  if (window.__SKIP_GATE) return;             // pages can opt out
  if (isUnlocked()) return;
  // Mount immediately so content is hidden before paint
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountGate, { once: true });
  } else {
    mountGate();
  }
})();

/* ---------- REVEAL ON SCROLL ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || els.length === 0) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  els.forEach((el) => io.observe(el));
}

/* ---------- T-MINUS COUNTDOWN ----------
   Updates any element with data-tminus to "T-N DAYS"
   counting down to the configured event date.
*/
const EVENT_ISO = "2026-07-03T00:00:00+09:00"; // Jeonju, KST
function updateTminus() {
  const els = document.querySelectorAll("[data-tminus]");
  if (els.length === 0) return;
  const ms = new Date(EVENT_ISO).getTime() - Date.now();
  const days = Math.max(0, Math.ceil(ms / 86400000));
  const label = days > 0 ? `T−${days} DAYS` : `JEONJU`;
  els.forEach((el) => { el.textContent = label; });
}

/* ---------- IN-PAGE NAV SCROLL-SPY ----------
   Deterministic scroll-based detector. Finds the section
   whose top is closest to (but at or above) the active line
   ~120px from the top of the viewport. Sets .is-active on
   the matching nav link and updates any #navPosition counter.
*/
function initNavSpy() {
  const nav = document.getElementById("ipNav");
  if (!nav) return;
  const links = Array.from(nav.querySelectorAll("a[href^='#']"));
  if (links.length === 0) return;
  const sections = links
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);
  if (sections.length === 0) return;

  const positionEl = document.getElementById("navPosition");
  const total = String(sections.length).padStart(2, "0");
  if (positionEl) {
    const totalNode = positionEl.querySelector(".pos-total");
    if (totalNode) totalNode.textContent = total;
  }

  // Active line at ~33% of viewport height (or 200px floor).
  // A section becomes active once its top crosses this line on the way up.
  let lastActive = -1;
  let ticking = false;

  function compute() {
    ticking = false;
    const lineOffset = Math.max(200, window.innerHeight * 0.33);
    const y = window.scrollY + lineOffset;
    let activeIdx = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= y) activeIdx = i;
    }
    if (activeIdx === lastActive) return;
    lastActive = activeIdx;
    links.forEach((l, i) => l.classList.toggle("is-active", i === activeIdx));
    if (positionEl) {
      const cur = positionEl.querySelector(".pos-current");
      if (cur) cur.textContent = String(activeIdx + 1).padStart(2, "0");
    }
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(compute);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  compute();
}

/* ---------- BOOT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  updateTminus();
  initNavSpy();
});
