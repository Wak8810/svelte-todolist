import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DLx_0fKV.js","_app/immutable/chunks/disclose-version.4KsYXkRJ.js","_app/immutable/chunks/runtime.BUQce5Kf.js","_app/immutable/chunks/legacy.CLO1XT5Y.js","_app/immutable/chunks/store.CFDfvSmv.js","_app/immutable/chunks/props.gEh7eR9r.js"];
export const stylesheets = ["_app/immutable/assets/2.I3CBKjKS.css"];
export const fonts = [];
