import { join } from "path";
import { defineConfig } from "vitepress";

import base from "./config/base.js";

import MdItListOfFigures from "markdown-it-list-of-figures";
import MdItListOfTables from "markdown-it-list-of-tables";
import MdItCite from "markdown-it-cite";
import MdItAttrs from "markdown-it-attrs";
import MdItMultiMdTable from "markdown-it-multimd-table";
import MdItSub from "markdown-it-sub";
import MdItSup from "markdown-it-sup";
import MdItInclude from "markdown-it-include";
import MdItAbbreviation from "./config/plugins/abbreviation.ts";
import MdItFootnote from "./config/plugins/footnote.ts";
import MdItMath from "./config/plugins/math.ts";

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
        logo: "/images/fhtw-logo.svg",
        nav: nav("en"),
        outlineTitle: "Table of Contents",
      },
    },
    de: {
      label: "Deutsch",
      lang: "de-AT",
      title: "Rehabilitationstechnik",
      description: "FH Technikum Wien",
      themeConfig: {
        logo: "/images/fhtw-logo.svg",
        nav: nav("de"),
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
      md.use(MdItCite, { sources: [join(__dirname, "literature.bib")] });
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
      {
        text: "Contents",
        items: [
          { text: "Chapter 1 - Definitions and Wording", link: "/chapter1" },
          { text: "Chapter 2 - The Levels of Disability According to WHO", link: "/chapter2" },
          { text: "Chapter 3 - Disability as Difference Between Performance and Requirement", link: "/chapter3" },
          { text: "Chapter 4 - Rehabilitation Technology", link: "/chapter4" },
          { text: "Chapter 5 - Classification of the Tools", link: "/chapter5" },
          { text: "Chapter 6 - Medical Basics (Part I)", link: "/chapter6" },
          { text: "Chapter 7 - Medical Basics (Part II)", link: "/chapter7" },
        ],
      },
    ],
    de: [
      {
        text: "Inhalte",
        items: [
          { text: "Kapitel 1 - Definition und Wortwahl", link: "/de/chapter1" },
          { text: "Kapitel 2 - Die Ebenen der Behinderung nach WHO", link: "/de/chapter2" },
          { text: "Kapitel 3 - Behinderung als Differenz zwischen Leistung und Anforderung", link: "/de/chapter3" },
          { text: "Kapitel 4 - Rehabilitationstechnik", link: "/de/chapter4" },
          { text: "Kapitel 5 - Einteilung der Hilfsmittel", link: "/de/chapter5" },
          { text: "Kapitel 6 - Medizinische Grundlagen (Teil I)", link: "/de/chapter6" },
          { text: "Kapitel 7 - Medizinische Grundlagen (Teil II)", link: "/de/chapter7" },
        ],
      },
    ],
  }[lang];
}
