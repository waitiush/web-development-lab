(function () {
  "use strict";
  const root = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  const STORAGE_KEY = "lab6-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      themeBtn.setAttribute("aria-pressed", "true");
    } else {
      root.removeAttribute("data-theme");
      themeBtn.setAttribute("aria-pressed", "false");
    }
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }

  themeBtn.addEventListener("click", function () {
    const isDark = root.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  const flipTriggers = document.querySelectorAll(".flip-trigger");

  flipTriggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const card = btn.closest(".flip-card");
      card.classList.toggle("is-flipped");
    });
  });
})();