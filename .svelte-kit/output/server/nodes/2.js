import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CC42uhTo.js","_app/immutable/chunks/DzC2rJDB.js","_app/immutable/chunks/Y9k8PTQ_.js","_app/immutable/chunks/pYtEHqfj.js","_app/immutable/chunks/AFy0JKYi.js","_app/immutable/chunks/D07gAo1N.js"];
export const stylesheets = ["_app/immutable/assets/2.BhFDbh5n.css"];
export const fonts = [];
