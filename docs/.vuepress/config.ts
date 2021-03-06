import { join } from "path";
import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import type { ViteBundlerOptions } from "@vuepress/bundler-vite";

const bundler = process.env.BUNDLER ? process.env.BUNDLER : process.env.BUNDLER = '@vuepress/bundler-vite';

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  // site config
  lang: "de-AT",
  // base: "/next/",
  // theme and its config
  theme: "@vuepress/theme-default",
  locales: {
    "/": {
      lang: "de-DE",
      title: "Rehabilitationstechnik",
      description: "FH Technikum Wien"
    },
    "/en/": {
      lang: "en-US",
      title: "Rehabilitation Technology",
      description: "UAS Technikum Vienna"
    }
  },
  themeConfig: {
    logo: "/images/fhtw-logo.svg",
    locales: {
      "/": {
        selectLanguageText: "Sprachen",
        selectLanguageName: "Deutsch",
        navbar: [
          {
            text: "Anleitung",
            link: "/guide/review.md"
          }
        ],
        sidebar: {
          "/": [
            {
              text: "Definition und Wortwahl",
              link: "/chapter1.html",
            },
            {
              text: "Die Ebenen der Behinderung nach WHO",
              link: "/chapter2.html"
            },
            {
              text: "Behinderung als Differenz zwischen Leistung und Anforderung",
              link: "/chapter3.html"
            },
            {
              text: "Rehabilitationstechnik",
              link: "/chapter4.html"
            },
            {
              text: "Einteilung der Hilfsmittel",
              link: "/chapter5.html"
            },
            {
              text: "Medizinische Grundlagen - Teil I",
              link: "/chapter6.html"
            },
            {
              text: "Medizinische Grundlagen - Teil II",
              link: "/chapter7.html"
            }
          ]
        },
      },
      "/en/": {
        selectLanguageText: "Languages",
        selectLanguageName: "English",
        sidebar: {
          "/en/": [
            {
              text: "Definitions and Wording",
              link: "/en/chapter1.html"
            },
            {
              text: "The Levels of Disability According to WHO",
              link: "/en/chapter2.html"
            },
            {
              text: "Disability as Difference Between Performance and Requirement",
              link: "/en/chapter3.html"
            },
            {
              text: "Rehabilitation Technology",
              link: "/en/chapter4.html"
            },
            {
              text: "Classification of the Tools",
              link: "/en/chapter5.html"
            },
            {
              text: "Medical Basics - Part I",
              link: "/en/chapter6.html"
            },
            {
              text: "Medical Basics - Part II",
              link: "/en/chapter7.html"
            }
          ]
        },
      }
    }
  },
  extendsMarkdown: (md) => {
    md.use(require("markdown-it-list-of-figures"));
    md.use(require("markdown-it-list-of-tables"));
    md.use(require("markdown-it-cite"), { sources: [join(__dirname, "literature.bib")] });
    md.use(require("markdown-it-attrs"))
    md.use(require("markdown-it-multimd-table"), { rowspan: true });
    md.use(require("markdown-it-sub"));
    md.use(require("markdown-it-sup"));
    md.use(require("markdown-it-include"));
    // md.use(require("markdown-it-mathjax"), { tex: { ags: "ams" }, svg: { scale: 1, mtextInheritFont: true }, display: true });
    // md.use(require("markdown-it-mathjax-chtml"));
    // md.use(require("markdown-it-mathjax-a11y"));
    md.use(require("./markdown/abbreviation"));
    md.use(require("./markdown/footnote"));
    md.use(require("./markdown/math"));
  },
  plugins: [
    ["image-comparator", {
      enable: true,
      include: [{ path: /^.*/, files: [/^\.\/pics\/0[1234567].*(?<!\d)\.svg$/], from: /\.svg$/, to: ".original.svg" }]
    }],
    ["@vuepress/medium-zoom", {
      selector: ".theme-default-content figure img"
    }],
    "@vuepress/search",
    ["@vuepress/container", {
      type: 'post-it',
    }]
  ],
  bundler,
  head: [
    ["script", { src: "https://polyfill.io/v3/polyfill.min.js?features=es6" }],
    // ["script", { id: "MathJax-script", async: true, src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" }],
    ["script", { id: "MathJax-script", async: true, src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js" }],
  ]
})