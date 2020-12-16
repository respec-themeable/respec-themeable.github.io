export function preLogo(cfg, doc) {
  const logo = doc.querySelector("link[rel='icon'][sizes='any']");

  if (!cfg.logos && logo) {
    let src = new URL(logo.href);
    let href = src.origin == doc.location.origin ? src.pathname.substring(1) : logo.href;

    cfg.logos = [{ alt: "Logo", id: "logo", width: 128, height: 128, src: href }];
  }
}
