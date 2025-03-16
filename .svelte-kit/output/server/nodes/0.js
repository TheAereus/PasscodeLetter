

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CDu9jQsf.js","_app/immutable/chunks/DzC2rJDB.js","_app/immutable/chunks/Y9k8PTQ_.js"];
export const stylesheets = ["_app/immutable/assets/0.Ba3shSIJ.css"];
export const fonts = [];
