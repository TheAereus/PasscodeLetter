

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DqwFy7iR.js","_app/immutable/chunks/xYhGxOa7.js","_app/immutable/chunks/BzPUF8M7.js"];
export const stylesheets = ["_app/immutable/assets/0.Ba3shSIJ.css"];
export const fonts = [];
