import { meta } from "./meta";

export function postHead(cfg, doc) {
  // hide version entries, pointing to w3c
  const dl = doc.querySelector("div.head dl");
  let to = doc.querySelector("div.head dl dd.vcard");
  if (dl && to) {
    to = to.previousElementSibling;
    const childs = dl.childNodes;
    for (let i = 0; i < childs.length; i++) {
      if (childs[i] == to) {
        break;
      }
      if (childs[i].style) {
        childs[i].style.display = "none";
      }
    }
  }
  if (meta.version) {
    const ver = doc.createElement("h3");
    ver.innerHTML = meta.version;
    doc.querySelector("div.head").insertBefore(ver, dl);
  }
}
