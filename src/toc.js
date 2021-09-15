export function postToc(cfg, doc) {
  const sotd = doc.querySelector("a.tocxref[href='#sotd']");

  if (sotd) {
    sotd.parentElement.remove();
  }
}
