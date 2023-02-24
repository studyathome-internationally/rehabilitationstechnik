import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig, type HeadConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";

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

export default withPwa(
  defineConfig({
    base,
    head: head(),
    markdown: markdown(),
    locales: {
      root: {
        label: "English",
        lang: "en-US",
        title: "Rehabilitation Technology",
        description: "UAS Technikum Vienna",
        themeConfig: {
          logo: "/img/studyathome-noir.svg",
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
          logo: "/img/studyathome-noir.svg",
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
    pwa: {
      // https://github.com/vite-pwa/vitepress/blob/main/examples/pwa-prompt/.vitepress/config.ts#L35
      mode: "development",
      base,
      scope: base,
      includeAssets: ["favicon.svg"],
      workbox: {
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
      },
      devOptions: {
        enabled: true,
        navigateFallback: "/",
      },
    },
  })
);

function head(): HeadConfig[] {
  return [
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: base + "favicon/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: base + "favicon/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: base + "favicon/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: base + "favicon/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: base + "favicon/safari-pinned-tab.svg", color: "#5bbad5" }],
    ["link", { rel: "shortcut icon", href: base + "favicon/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#2d89ef" }],
    ["meta", { name: "msapplication-config", content: base + "favicon/browserconfig.xml" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ];
}

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
        { text: "Medizinische Grundlagen", link: "/de/chapter6.md" },
        {
          text: "Neurobiologie",
          collapsed: false,
          items: [{ text: "Das Nervensystem", link: "/de/chapter7.md" }],
        },
        {
          text: "Sehen",
          collapsed: false,
          items: [
            { text: "Auge und visuelle Wahrnehmung", link: "/de/chapter8.md" },
            { text: "Visuelle Behinderungen", link: "/de/chapter9.md" },
          ],
        },
        {
          text: "Hören",
          collapsed: false,
          items: [
            { text: "Ohr und auditive Wahrnehmung", link: "/de/chapter10.md" },
            { text: "Auditive Behinderungen", link: "/de/chapter11.md" },
          ],
        },
        {
          text: "Tasten",
          collapsed: false,
          items: [{ text: "Haut und taktile Wahrnehmung", link: "/de/chapter12.md" }],
        },
        {
          text: "Bewegung",
          collapsed: false,
          items: [
            { text: "Rückenmark, Bewegungsapparat und Muskulatur", link: "/de/chapter13.md" },
            { text: "Motorische Behinderungen", link: "/de/chapter14.md" },
          ],
        },
        {
          text: "Kommunikation",
          collapsed: false,
          items: [
            { text: "Sprache und Sprechen", link: "/de/chapter15.md" },
            { text: "Verbale und vokale Behinderungen", link: "/de/chapter16.md" },
          ],
        },
        {
          text: "Komplexe Behinderungen",
          collapsed: false,
          items: [{ text: "Mehrfachbehinderungen, Syndrome", link: "/de/chapter17.md" }],
        },
        {
          text: "Geriatrische Syndrome",
          collapsed: false,
          items: [{ text: "Altersbedingte Funktionseinschränkungen", link: "/de/chapter18.md" }],
        },
        // { text: "Major Types of Disability", link: "/de/chapter19.md" },
        // { text: "Assistive Technology - Basics", link: "/de/chapter20.md" },
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
        { text: "Medical Basics", link: "/chapter6.md" },
        { text: "Neurobiology", collapsed: false, items: [{ text: "The Nervous System", link: "/chapter7.md" }] },
        {
          text: "Vision",
          collapsed: false,
          items: [
            { text: "Eye and Visual Perception", link: "/chapter8.md" },
            { text: "Visual Disabilities", link: "/chapter9.md" },
          ],
        },
        {
          text: "Hearing",
          collapsed: false,
          items: [
            { text: "Ear and Auditory Perception", link: "/chapter10.md" },
            { text: "Auditory Disabilities", link: "/chapter11.md" },
          ],
        },
        {
          text: "Touch",
          collapsed: false,
          items: [{ text: "Skin and Tactile Perception", link: "/chapter12.md" }],
        },
        {
          text: "Movement",
          collapsed: false,
          items: [
            { text: "Spinal Cord, Musculoskeletal System and Musculature", link: "/chapter13.md" },
            { text: "Motor Disabilities", link: "/chapter14.md" },
          ],
        },
        {
          text: "Communication",
          collapsed: false,
          items: [
            { text: "Language and Speech", link: "/chapter15.md" },
            { text: "Verbal and Vocal Disabilities", link: "/chapter16.md" },
          ],
        },
        {
          text: "Complex Disabilities",
          collapsed: false,
          items: [{ text: "Multiple Disabilities, Syndromes", link: "/chapter17.md" }],
        },
        {
          text: "Geriatric Syndromes",
          collapsed: false,
          items: [{ text: "Age-Related Functional Limitations", link: "/chapter18.md" }],
        },
        // { text: "Major Types of Disability", link: "/chapter19.md" },
        // { text: "Assistive Technology - Basics", link: "/chapter20.md" },
      ],
    },
  }[lang];
}
