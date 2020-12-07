export function postBackground(cfg, doc) {
  let publisher;
  if (cfg.publisher) {
    publisher = cfg.publisher;
  } else {
    publisher = cfg.shortName;
    for (const p of [...cfg.authors, ...cfg.editors]) {
      if (p.company) {
        publisher = p.company;
        break;
      }
    }
  }
  const text = publisher + "  " + cfg.longStatus;

  const root = doc.querySelector(":root");
  const color = getComputedStyle(root).getPropertyValue("--actual-accent-color");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="380"><rect x="0" y="0" width="25" height="380" fill="${color}"/><text x="-190" y="12.5" transform="rotate(270)" dominant-baseline="middle" text-anchor="middle" font-size="22" font-family="sans-serif" fill="#ffffff" xml:space="preserve">${text}</text></svg>`;
  const data = `data:image/svg+xml;base64,${btoa(svg)}`;

  root.style.setProperty("--background-image", `url(${data})`);
}
