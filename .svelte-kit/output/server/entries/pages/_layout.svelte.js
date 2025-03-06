import { h as head, c as pop, p as push } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Password</title>`;
  });
  $$payload.out += `<div class="app svelte-1k8t58x">`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _layout as default
};
