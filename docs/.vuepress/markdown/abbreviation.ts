import type MdIt from "markdown-it";
import Token from "markdown-it/lib/token.js";
import type Core from "markdown-it/lib/parser_core";
import type StateCore from "markdown-it/lib/rules_core/state_core";

import MdItAbbreviation from "markdown-it-abbr";

const abbreviation = (md: MdIt) => {
  md.use(MdItAbbreviation);
  md.core.ruler.after("abbr_replace", "list_of_abbreviations", list_of_abbreviations_rule());
};

function list_of_abbreviations_rule() {
  const list_of_abbreviations: Core.RuleCore = (state: StateCore) => {
    if (!state || !state.env || !state.env.abbreviations) return false;
    if (!frontmatter(state, "list", true)) return false;

    const tokens: Token[] = state.tokens;
    let token: Token, tokenChild: Token;

    token = new Token("hr", "hr", 0);
    token.attrSet("class", "list-of-abbreviations");
    token.markup = "---";
    token.block = true;
    tokens.push(token);

    token = new Token("heading_open", "h2", 1);
    token.attrSet("id", "list-of-abbreviations");
    token.markup = "##";
    token.block = true;
    tokens.push(token);

    token = new Token("inline", "", 0);
    tokenChild = new Token("text", "", 0);
    const title = frontmatter(state, "title", "List of Abbreviations");
    tokenChild.content = title;
    token.children = [tokenChild];
    token.content = title;
    tokens.push(token);

    token = new Token("heading_close", "h2", -1);
    token.markup = "##";
    token.block = true;
    tokens.push(token);

    token = new Token("list_of_abbreviations_open", "dl", 1);
    token.block = true;
    tokens.push(token);

    for (const key in state.env.abbreviations) {
      token = new Token("abbreviation_term_open", "dt", 1);
      tokens.push(token);

      token = new Token("inline", "", 0);
      tokenChild = new Token("text", "", 0);
      tokenChild.content = key.substring(1);
      token.children = [tokenChild];
      tokens.push(token);

      token = new Token("abbreviation_term_close", "dt", -1);
      tokens.push(token);

      token = new Token("abbreviation_details_open", "dd", 1);
      tokens.push(token);

      token = new Token("inline", "", 0);
      tokenChild = new Token("text", "", 0);
      tokenChild.content = state.env.abbreviations[key];
      token.children = [tokenChild];
      tokens.push(token);

      token = new Token("abbreviation_details_close", "dd", -1);
      token.block = true;
      tokens.push(token);
    }

    token = new Token("list_of_abbreviations_close", "dl", -1);
    token.block = true;
    tokens.push(token);
  };
  return list_of_abbreviations;
}

function frontmatter(state, key, alternative) {
  const frontmatterKey = "abbreviations";
  return state &&
    state.env &&
    state.env.frontmatter &&
    state.env.frontmatter[frontmatterKey] &&
    key in state.env.frontmatter[frontmatterKey]
    ? state.env.frontmatter[frontmatterKey][key]
    : alternative;
}

module.exports = abbreviation;
