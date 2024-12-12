

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BNboCO9N.js","_app/immutable/chunks/disclose-version.4KsYXkRJ.js","_app/immutable/chunks/runtime.BUQce5Kf.js"];
export const stylesheets = [];
export const fonts = [];
