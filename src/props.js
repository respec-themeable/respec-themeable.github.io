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

  if (meta.bugs || (meta.repository && meta.repository.url)) {
    const links = {
      key: "Links",
      data: [],
    };
    if (meta.repository && meta.repository.url) {
      links.data.push({
        value: "Repository",
        href: meta.repository.url,
      });
    }
    if (meta.bugs) {
      links.data.push({
        value: "Issues",
        href: meta.bugs.url || meta.bugs,
      });
    }
    if (typeof cfg.otherLinks == "undefined") {
      cfg.otherLinks = [];
    }
    cfg.otherLinks.push(links);
  }
}
