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
      title: "Open Educational Resource",
      description: "FH Technikum Wien"
    },
    "/en/": {
      lang: "en-US",
      title: "Open Educational Resource",
      description: "UAS Technikum Vienna"
    }
  },
  themeConfig: {
    logo: "/images/fhtw-logo.svg",
    locales: {
      "/": {
        selectLanguageText: "Sprachen",
        selectLanguageName: "Deutsch",
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
              text: "Definition and Words",
              link: "/en/chapter1.html"
            },
            {
              text: "Die Ebenen der Behinderung nach WHO",
              link: "/en/chapter2.html"
            },
            {
              text: "Behinderung als Differenz zwischen Leistung und Anforderung",
              link: "/en/chapter3.html"
            },
            {
              text: "Rehabilitationstechnik",
              link: "/en/chapter4.html"
            },
            {
              text: "Einteilung der Hilfsmittel",
              link: "/en/chapter5.html"
            },
            {
              text: "Medizinische Grundlagen - Teil I",
              link: "/en/chapter6.html"
            },
            {
              text: "Medizinische Grundlagen - Teil II",
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
    md.use(require("markdown-it-mathjax-a11y"));
    md.use(require("./markdown/abbreviation"));
    md.use(require("./markdown/footnote"));
    // md.use(require("./markdown/math"));
  },
  plugins: [
    ["image-comparator", {
      enable: true,
      include: [{ path: /^.*/, files: [/^\.\/pics\/0[1234567].*(?<!\d)\.svg$/], from: /\.svg$/, to: ".original.svg" }]
    }],
    ["@vuepress/medium-zoom", {
      selector: ".theme-default-content figure img"
    }]
  ],
  bundler,
})