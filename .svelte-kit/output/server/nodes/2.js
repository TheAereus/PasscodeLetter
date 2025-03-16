import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.N35n-L5d.js","_app/immutable/chunks/xYhGxOa7.js","_app/immutable/chunks/BzPUF8M7.js","_app/immutable/chunks/Cq3DuM89.js","_app/immutable/chunks/B7cwONPK.js"];
export const stylesheets = ["_app/immutable/assets/2.B0MyNGZj.css"];
export const fonts = [];
