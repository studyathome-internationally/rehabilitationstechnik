import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vitepress";

import MdItListOfFigures from "markdown-it-list-of-figures";
import MdItListOfTables from "markdown-it-list-of-tables";
import MdItCite from "markdown-it-cite";
import MdItAttrs from "markdown-it-attrs";
import MdItMultiMdTable from "markdown-it-multimd-table";
import MdItSub from "markdown-it-sub";
import MdItSup from "markdown-it-sup";
import MdItInclude from "markdown-it-include";

import MdItAbbreviation from "./config/plugins/abbreviation";
import MdItFootnote from "./config/plugins/footnote";
import MdItMath from "./config/plugins/math";

import base from "./config/base.js";

export default defineConfig({
  base,
  markdown: markdown(),
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "Rehabilitation Technology",
      description: "UAS Technikum Vienna",
      themeConfig: {
        logo: "/img/fhtw.svg",
        nav: nav("en"),
        sidebar: sidebar("en"),
        outlineTitle: "Table of Contents",
      },
    },
    de: {
      label: "Deutsch",
      lang: "de-AT",
      title: "Rehabilitationstechnik",
      description: "FH Technikum Wien",
      themeConfig: {
        logo: "/img/fhtw.svg",
        nav: nav("de"),
        sidebar: sidebar("de"),
        outlineTitle: "Inhaltsverzeichnis",
      },
    },
  },
  themeConfig: {
    algolia: {
      appId: "JI7BWPYEMW",
      apiKey: "a5976af2be8c2ccbb60ba75f309ceb58",
      indexName: "rehabilitationstechnik",
    },
  },
});

function markdown() {
  return {
    config: (md) => {
      md.use(MdItListOfFigures);
      md.use(MdItListOfTables);
      md.use(MdItCite, { sources: [resolve(dirname(fileURLToPath(import.meta.url)), "./literature.bib")] });
      md.use(MdItAttrs);
      md.use(MdItMultiMdTable, { rowspan: true });
      md.use(MdItSub);
      md.use(MdItSup);
      md.use(MdItInclude);
      md.use(MdItAbbreviation);
      md.use(MdItFootnote);
      md.use(MdItMath);
    },
  };
}

function nav(lang) {
  return {
    en: [
      { text: "Legal Notice", link: "./legal-notice" },
      { text: "Contact", link: "./contact" },
    ],
    de: [
      { text: "Impressum", link: "./legal-notice" },
      { text: "Kontakt", link: "./contact" },
    ],
  }[lang];
}

function sidebar(lang) {
  return {
    de: {
      "/": [
        { text: "Definitionen und Wortwahl", link: "/de/chapter1.md" },
        { text: "Die Ebenen der Behinderung nach WHO", link: "/de/chapter2.md" },
        { text: "Behinderung als Differenz zwischen Leistung und Anforderung", link: "/de/chapter3.md" },
        { text: "Rehabilitationstechnik", link: "/de/chapter4.md" },
        { text: "Einteilung der Hilfsmittel", link: "/de/chapter5.md" },
        { text: "Medizinische Grundlagen - Teil I", link: "/de/chapter6.md" },
        { text: "Medizinische Grundlagen - Teil II", link: "/de/chapter7.md" },
      ],
      // "/de/index.html": [],
    },
    en: {
      "/": [
        { text: "Definitions and Wording", link: "/chapter1.md" },
        { text: "The Levels of Disability According to WHO", link: "/chapter2.md" },
        { text: "Disability as Difference Between Performance and Requirement", link: "/chapter3.md" },
        { text: "Rehabilitation Technology", link: "/chapter4.md" },
        { text: "Classification of the Tools", link: "/chapter5.md" },
        { text: "Medical Basics - Part I", link: "/chapter6.md" },
        { text: "Medical Basics - Part II", link: "/chapter7.md" },
      ],
    },
  }[lang];
}
