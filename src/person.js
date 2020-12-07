import { meta } from "./meta";

function toPerson(p) {
  let person = {
    name: typeof p == "string" ? p : p.name,
  };
  if (p.email) {
    person.mailto = p.email;
  }
  if (p.mailto) {
    person.mailto = p.mailto;
  }
  if (p.company) {
    person.company = p.company;
  }
  if (p.companyURL) {
    person.companyURL = p.companyURL;
  }
  return person;
}

export function prePerson(cfg, doc) {
  if (!cfg.authors && meta.author) {
    cfg.authors = [toPerson(meta.author)];
  }

  if (!cfg.editors) {
    cfg.editors = [];
    if (cfg.authors) {
      cfg.editors.push(...cfg.authors);
    }
    if (meta.contributors) {
      for (const p of meta.contributors) {
        cfg.editors.push(toPerson(p));
      }
    }
  }
}
