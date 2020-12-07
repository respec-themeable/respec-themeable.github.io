import css from "./theme.css";

export function preTheme(cfg, doc) {
  const style = doc.createElement("style");
  style.textContent = css;
  doc.body.appendChild(style);
}
