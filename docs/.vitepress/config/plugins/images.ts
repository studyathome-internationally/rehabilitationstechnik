import type MdIt from "markdown-it";
import Token from "markdown-it/lib/token";
import type Renderer from "markdown-it/lib/renderer";

import fs from "fs";
import path from "path";

let defaultRenderer: Renderer.RenderRule | undefined;
const svgRE = /\.svg$/;

const images = (md: MdIt, opts) => {
  defaultRenderer = md.renderer.rules.image;
  md.renderer.rules.image = __images_renderer(opts);
};

function __images_renderer(opts) {
  return function images_renderer(
    tokens: Token[],
    idx: number,
    options: MdIt.Options,
    env: any,
    self: Renderer
  ): string {
    const token = tokens[idx];
    const aIndex = token.attrIndex("src");

    const src = token.attrs[aIndex][1];
    if (svgRE.test(src)) {
      const filePath = path.resolve(path.join(opts.dir, src));
      const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");
      fileContent.shift();
      return fileContent.join("\n");
      // console.log("DUMMY", fileContent);
      // return fileContent.split("\n").shift().join("\n");

      //   return `<object data="${src}" type="image/svg+xml" data-zoom-image>
      //   <img src="${src}" data-zoom-image/>
      // </object>`;
    }

    return defaultRenderer(tokens, idx, options, env, self);
  };
}

export default images;
