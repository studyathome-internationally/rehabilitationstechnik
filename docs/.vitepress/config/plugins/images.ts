import type MdIt from "markdown-it";
import Token from "markdown-it/lib/token";
import type Renderer from "markdown-it/lib/renderer";

let defaultRenderer: Renderer.RenderRule | undefined;
const svgRE = /\.svg$/;

const images = (md: MdIt) => {
  defaultRenderer = md.renderer.rules.image;
  md.renderer.rules.image = images_renderer;
};

function images_renderer(tokens: Token[], idx: number, options: MdIt.Options, env: any, self: Renderer): string {
  const token = tokens[idx];
  const aIndex = token.attrIndex("src");

  const src = token.attrs[aIndex][1];
  if (svgRE.test(src)) {
    return `<object data="${src}" type="image/svg+xml" data-zoom-image>
      <img src="${src}" data-zoom-image/>
    </object>`;
  }

  return defaultRenderer(tokens, idx, options, env, self);
}

export default images;
