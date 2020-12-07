import { meta } from "./meta";

export function preProps(cfg, doc) {
  if (!doc.title && meta.name) {
    doc.title = meta.name;
  }

  if (!cfg.subtitle && meta.description) {
    cfg.subtitle = meta.description;
  }

  if (!cfg.shortName) {
    cfg.shortName = meta.short_name || meta.name;
  }

  if (meta.homepage && !cfg.canonicalURI) {
    cfg.canonicalURI = meta.homepage;
  }
}
