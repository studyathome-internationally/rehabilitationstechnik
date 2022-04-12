import { join } from "path";
import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import type { ViteBundlerOptions } from "@vuepress/bundler-vite";

const bundler = process.env.BUNDLER ? process.env.BUNDLER : '@vuepress/bundler-vite';
process.env.BUNDLER = bundler;

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  // site config
  lang: "de-AT",
  // base: "/next/",
  // theme and its config
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/fhtw-logo.svg",
    // navbar: [
    //   {
    //     text: "Rehabilitationstechnik",
    //     link: "/chapter1.md",
    //     activeMatch: "/chapter1.md"
    //   }
    // ],
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
    locales: {
      "/": {
        selectLanguageText: "Sprachen",
        selectLanguageName: "Deutsch"
      },
      "/en/": {
        selectLanguageText: "Languages",
        selectLanguageName: "English",
        navbar: [
          {
            text: "Resources",
            children: [
              {
                text: "Rehabilitation Technology",
                link: "/en/chapter1.md",
                activeMatch: "/en/chapter1.md"
              }
            ]
          }
        ],
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
  locales: {
    "/": {
      lang: "de-DE",
      // title: "Open Education",
      title: "Open Educational Resource",
      description: "FH Technikum Wien"
    },
    "/en/": {
      lang: "en-US",
      title: "Open Educational Resource",
      description: "UAS Technikum Vienna"
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
    md.use(require("markdown-it-math-jax"));
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
   bundlerConfig: {
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return ["mjx-container"].includes(tag);
          }
        }
      }
    }
  },
  head: [
    // ["script", {}, `
    //   window.MathJax = {
    //     loader: {load: ["input/asciimath"]},
    //     startup: {
    //       pageReady: function () {
    //         //
    //         // Synchronize menu renderer item with on-screen popup menu
    //         //
    //         var select = document.getElementById("Renderer");
    //         if (select) {
    //           var renderer = MathJax.startup.document.menu.settings.renderer;
    //           var menu = MathJax.startup.document.menu.menu;
    //           var item = (menu.getPool ? menu.getPool() : menu.pool).lookup("renderer");
    //           select.value = renderer;
    //           if (renderer !== "CHTML") item.setValue(renderer);
    //           item.registerCallback(function () {
    //             var value = item.getValue();
    //             if (value !== select.value) select.value = value;
    //           });
    //           window.setMode = function (renderer) {
    //             if (item.getValue() !== renderer) item.setValue(renderer);
    //           }
    //           //
    //           //  Set up processing of input content
    //           //
    //           var input = document.getElementById("MathInput");
    //           var output = document.getElementById("MathPreview");
    //           var button = document.getElementById("renderHTML");
    //           output.innerHTML = input.value.trim();
    //           window.typesetInput = function () {
    //             button.disabled = true;
    //             output.innerHTML = input.value.trim();
    //             MathJax.texReset();
    //             MathJax.typesetClear();
    //             MathJax.typesetPromise([output]).catch(function (err) {
    //               output.innerHTML = "";
    //               output.appendChild(document.createTextNode(err.message));
    //               console.error(err);
    //             }).then(function () {
    //               button.disabled = false;
    //             });
    //           }
    //           input.oninput = typesetInput;
    //         }

    //         return MathJax.startup.defaultPageReady();
    //       }
    //     },
    //     tex: {
    //       inlineMath: [["$", "$"], ["\\(", "\\)"]],
    //       processEscapes: true
    //     }
    //   };
    //   `
    // ],
    ["script", { src: "https://polyfill.io/v3/polyfill.min.js?features=es6" }],
    // ["script", { id: "MathJax-script", async: true, src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" }]
    ["script", { id: "MathJax-script", async: true, src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" }],
    // ["script", { id: "MathJax-script", async: true, src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js" }]
    // ["script", { charset: "UTF-8", src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/input/asciimath.js"}],
    // ["script", { charset: "UTF-8", src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/sre/sre_browser.js" }],
    // ["script", { charset: "UTF-8", src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/a11y/semantic-enrich.js" }],
    // ["script", { charset: "UTF-8", src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/a11y/explorer.js"}],
  ]
})