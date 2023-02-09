import { join } from "path";
import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme, viteBundler } from "vuepress";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { searchPlugin } from "@vuepress/plugin-search";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { gitPlugin } from "@vuepress/plugin-git";
import { containerPlugin } from "@vuepress/plugin-container";
import { imageComparatorPlugin } from "vuepress-plugin-image-comparator";
import { figureWrapperPlugin } from "vuepress-plugin-figure-wrapper";

import MdItListOfFigures from "markdown-it-list-of-figures";
import MdItListOfTables from "markdown-it-list-of-tables";
import MdItCite from "markdown-it-cite";
import MdItAttrs from "markdown-it-attrs";
import MdItMultiMdTable from "markdown-it-multimd-table";
import MdItSub from "markdown-it-sub";
import MdItSup from "markdown-it-sup";
import MdItInclude from "markdown-it-include";

import MdItAbbreviation from "./markdown/abbreviation";
import MdItFootnote from "./markdown/footnote";
import MdItMath from "./markdown/math";

const base = process.env.BASE ? process.env.BASE : "/";
const bundler = process.env.BUNDLER ? process.env.BUNDLER : (process.env.BUNDLER = "@vuepress/bundler-vite");

export default defineUserConfig({
  // site config
  lang: "de-AT",
  base,
  // theme and its config
  theme: defaultTheme({
    logo: "/images/fhtw-logo.svg",
    // repo: "studyathome-internationally/rehabilitationstechnik",
    repo: "https://github.com/studyathome-internationally/rehabilitationstechnik",
    docsDir: "docs",
    editLinkText: "Edit this page on GitHub",
    locales: {
      "/": {
        selectLanguageText: "Sprachen",
        selectLanguageName: "Deutsch",
        sidebar: sidebar(),
      },
      "/en/": {
        selectLanguageText: "Languages",
        selectLanguageName: "English",
        sidebar: sidebarEn(),
      },
    },
  }),
  locales: {
    "/": {
      lang: "de-DE",
      title: "Rehabilitationstechnik",
      description: "FH Technikum Wien",
    },
    "/en/": {
      lang: "en-US",
      title: "Rehabilitation Technology",
      description: "UAS Technikum Vienna",
    },
  },
  extendsMarkdown: (md) => markdown(md),
  plugins: plugins(),
  bundler: bundler === "@vuepress/bundler-vite" ? viteBundler() : webpackBundler(),
  head: [
    // ["script", { src: "https://polyfill.io/v3/polyfill.min.js?features=es6" }],
    // ["script", { id: "MathJax-script", async: true, src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" }],
    // ["script", { id: "MathJax-script", async: true, src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js" }],
  ],
});

function sidebar() {
  return {
    "/": [
      {
        text: "Definition und Wortwahl",
        link: "/chapter1.html",
      },
      {
        text: "Die Ebenen der Behinderung nach WHO",
        link: "/chapter2.html",
      },
      {
        text: "Behinderung als Differenz zwischen Leistung und Anforderung",
        link: "/chapter3.html",
      },
      {
        text: "Rehabilitationstechnik",
        link: "/chapter4.html",
      },
      {
        text: "Einteilung der Hilfsmittel",
        link: "/chapter5.html",
      },
      {
        text: "Medizinische Grundlagen - Teil I",
        link: "/chapter6.html",
      },
      {
        text: "Medizinische Grundlagen - Teil II",
        link: "/chapter7.html",
      },
      // {
      //   text: "Die wichtigsten Arten von Behinderungen",
      //   link: "/chapter8.html"
      // },
      // {
      //   text: "Assistive Technologien - Grundlagen",
      //   link: "/chapter9.html"
      // }
    ],
  };
}

function sidebarEn() {
  return {
    "/en/": [
      {
        text: "Definitions and Wording",
        link: "/en/chapter1.html",
      },
      {
        text: "The Levels of Disability According to WHO",
        link: "/en/chapter2.html",
      },
      {
        text: "Disability as Difference Between Performance and Requirement",
        link: "/en/chapter3.html",
      },
      {
        text: "Rehabilitation Technology",
        link: "/en/chapter4.html",
      },
      {
        text: "Classification of the Tools",
        link: "/en/chapter5.html",
      },
      {
        text: "Medical Basics - Part I",
        link: "/en/chapter6.html",
      },
      {
        text: "Medical Basics - Part II",
        link: "/en/chapter7.html",
      },
      // {
      //   text: "Major Types of Disability",
      //   link: "/en/chapter8.html"
      // },
      // {
      //   text: "Assistive Technology - Basics",
      //   link: "/en/chapter9.html"
      // }
    ],
  };
}

function plugins() {
  return [
    imageComparatorPlugin({
      enable: true,
      include: [
        { path: /^.*/, files: [/^\.\/pics\/0[123456789].*(?<!\d)\.svg$/], from: /\.svg$/, to: ".original.svg" },
      ],
    }),
    figureWrapperPlugin({
      enable: true,
    }),
    mediumZoomPlugin({
      selector: ".theme-default-content figure img",
    }),
    searchPlugin(),
    backToTopPlugin(),
    pwaPlugin({
      skipWaiting: true,
    }),
    gitPlugin({
      contributors: false,
    }),
    containerPlugin({
      type: "post-it",
    }),
  ];
}

function markdown(md) {
  md.use(MdItListOfFigures);
  md.use(MdItListOfTables);
  md.use(MdItCite, { sources: [join(__dirname, "literature.bib")] });
  md.use(MdItAttrs);
  md.use(MdItMultiMdTable, { rowspan: true });
  md.use(MdItSub);
  md.use(MdItSup);
  md.use(MdItInclude);
  //   // md.use(require("markdown-it-mathjax"), { tex: { ags: "ams" }, svg: { scale: 1, mtextInheritFont: true }, display: true });
  //   // md.use(require("markdown-it-mathjax-chtml"));
  //   // md.use(require("markdown-it-mathjax-a11y"));
  md.use(MdItAbbreviation);
  md.use(MdItFootnote);
  md.use(MdItMath);
  //   // md.use(require("vuepress-plugin-figure-wrapper/lib/node/markdown/wrapper.js").default, { enable: true })
}
