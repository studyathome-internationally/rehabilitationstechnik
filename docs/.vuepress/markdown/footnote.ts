import type MdIt from "markdown-it";
import Token from "markdown-it/lib/token";
import Core from "markdown-it/lib/parser_core";
import Renderer from "markdown-it/lib/renderer";
import type StateCore from "markdown-it/lib/rules_core/state_core";

const footnote = (md: MdIt) => {
  md.use(require("markdown-it-footnote"));
  md.core.ruler.after("footnote_tail", "footnotes_heading", footnotes_heading_rule());
  md.renderer.rules.footnote_block_open = footnote_block_open_renderer;
}

function footnotes_heading_rule() {
  const footnotes_heading: Core.RuleCore = (state: StateCore) => {
    const tokens: Token[] = state.tokens;
    let token: Token, tokenChild: Token;
    const index: number = tokens.findIndex(({ type }) => "footnote_block_open" === type);
    if (index < 0) return;
    let heading = [];
    token = new Token("heading_open", "h2", 1);
    heading.push(token);
    token = new Token("inline", "", 0);
    tokenChild = new Token("text", "", 0);
    tokenChild.content = frontmatter(state, "title", "Footnotes");
    token.children = [tokenChild];
    heading.push(token);
    token = new Token("heading_close", "h2", -1);
    heading.push(token);
    tokens.splice(index, 0, ...heading);
  }
  return footnotes_heading;
}

function footnote_block_open_renderer (tokens: Token[], idx: number, options: MdIt.Options, env: any, self: Renderer) : string {
  return '<section class="footnotes">\n' + '<ol class="footnotes-list">\n';
}

function frontmatter(state, key, alternative) {
  const frontmatterKey = "footnotes";
  return state &&
    state.env &&
    state.env.frontmatter &&
    state.env.frontmatter[frontmatterKey] &&
    state.env.frontmatter[frontmatterKey][key]
    ? state.env.frontmatter[frontmatterKey][key]
    : alternative;
}

module.exports = footnote;