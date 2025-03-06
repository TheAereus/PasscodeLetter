

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DEtTWFsw.js","_app/immutable/chunks/DyN0iA91.js","_app/immutable/chunks/BlGXlDfy.js"];
export const stylesheets = ["_app/immutable/assets/0.Ba3shSIJ.css"];
export const fonts = [];
