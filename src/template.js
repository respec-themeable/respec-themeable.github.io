var conf = {};

function getData() {
  return conf.data || window;
}

window.nunjucksRender = function (utils, content, url) {
  return nunjucks.renderString(content, getData());
};

window.handlebarsRender = function (utils, content, url) {
  return Handlebars.compile(content)(getData());
};

window.mustacheRender = function (utils, content, url) {
  return Mustache.render(content, getData());
};

var formats = ["nunjucks", "handlebars", "mustache"];

export function initTemplate(cfg) {
  conf = cfg;
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(`section[data-include][data-format]`).forEach((s) => {
      let format = s.getAttribute("data-format");
      if (formats.includes(format)) {
        s.setAttribute("data-format", "markdown");
        s.setAttribute("data-oninclude", (s.getAttribute("data-oninclude") || "") + ` ${format}Render`);
      }
    });
  });
}
