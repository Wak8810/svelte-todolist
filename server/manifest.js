export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.j3sg2Eox.js","app":"_app/immutable/entry/app.BURuuSCO.js","imports":["_app/immutable/entry/start.j3sg2Eox.js","_app/immutable/chunks/entry.Dx9SFOhm.js","_app/immutable/chunks/runtime.BUQce5Kf.js","_app/immutable/entry/app.BURuuSCO.js","_app/immutable/chunks/runtime.BUQce5Kf.js","_app/immutable/chunks/store.CFDfvSmv.js","_app/immutable/chunks/disclose-version.4KsYXkRJ.js","_app/immutable/chunks/props.gEh7eR9r.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
