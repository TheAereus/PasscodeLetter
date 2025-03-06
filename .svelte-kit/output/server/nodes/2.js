import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Bb1bbCmD.js","_app/immutable/chunks/DyN0iA91.js","_app/immutable/chunks/BlGXlDfy.js","_app/immutable/chunks/BdkmD00z.js","_app/immutable/chunks/DowX1q4I.js"];
export const stylesheets = ["_app/immutable/assets/2.B27KXfU5.css"];
export const fonts = [];
