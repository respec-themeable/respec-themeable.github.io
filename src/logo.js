export function preLogo(cfg, doc) {
  const logo = doc.querySelector("link[rel='icon'][sizes='any']");

  if (!cfg.logos && logo) {
    cfg.logos = [{ alt: "Logo", id: "logo", width: 128, height: 128, src: logo.href }];
  }
}
