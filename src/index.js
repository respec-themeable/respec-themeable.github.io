import { postBackground } from "./background";
import { preTheme } from "./theme";
import { preMeta } from "./meta";
import { prePerson } from "./person";
import { preLogo } from "./logo";
import { postHead } from "./head";
import { preProps } from "./props";
import { initTemplate } from "./template";

function init(cfg) {
  if (!cfg.preProcess) {
    cfg.preProcess = [];
  }
  cfg.preProcess.push(preProcess);
  if (!cfg.postProcess) {
    cfg.postProcess = [];
  }
  cfg.postProcess.push(postProcess);

  initTemplate(cfg);
}

async function preProcess(cfg, doc) {
  await preMeta(cfg, doc);

  preProps(cfg, doc);
  preLogo(cfg, doc);
  prePerson(cfg, doc);
  preTheme(cfg, doc);
}

function postProcess(cfg, doc) {
  postBackground(cfg, doc);
  postHead(cfg, doc);
}

init(window.respecConfig);
