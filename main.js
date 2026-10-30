"use strict";

// Language and theme preferences are remembered per visitor. Storage can be unavailable
// (private mode, blocked site data), so every access is wrapped and the page works without it.
const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* ignore */ } },
};

const root = document.documentElement;

function setLang(lang) {
  root.dataset.lang = lang;
  root.lang = lang;
  store.set("lang", lang);
}

function setTheme(theme) {
  root.dataset.theme = theme;
  store.set("theme", theme);
}

// German visitors (and German browsers) see German first; everyone else sees English.
const savedLang = store.get("lang");
setLang(savedLang ?? ((navigator.language || "en").toLowerCase().startsWith("de") ? "de" : "en"));

const savedTheme = store.get("theme");
if (savedTheme) root.dataset.theme = savedTheme;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lang-toggle").addEventListener("click", () => setLang(root.dataset.lang === "de" ? "en" : "de"));

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(current === "dark" ? "light" : "dark");
  });

  document.getElementById("year").textContent = String(new Date().getFullYear());
});
