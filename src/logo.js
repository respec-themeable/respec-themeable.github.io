export function preLogo(cfg, doc) {
  const logo = doc.querySelector("link[rel='icon'][sizes='any']");

  if (!cfg.logos && logo) {
    let src = new URL(logo.href);
    let href = src.origin == doc.location.origin ? src.pathname : logo.href;

    cfg.logos = [{ alt: "Logo", id: "logo", width: 128, height: 128, src: href }];
  }
}

export function postLogo(cfg, doc) {
  const logo = doc.querySelector("a.logo[href]");

  if (logo) {
    logo.remove();
  }
}
