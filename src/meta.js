export const meta = {};

export function preMeta(cfg, doc) {
  const manifest = document.querySelector("link[rel='manifest']");
  if (!manifest && cfg.noPackage) {
    return Promise.resolve({});
  }

  const href = manifest && manifest.href ? manifest.href : "package.json";
  return fetch(new URL(href, doc.location))
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.resolve({});
    })
    .catch((err) => {})
    .then((json) => {
      Object.assign(meta, json);
      return json;
    });
}
