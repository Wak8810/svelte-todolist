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
		client: {"start":"_app/immutable/entry/start.BUeUTs-f.js","app":"_app/immutable/entry/app.CrAHAw1Q.js","imports":["_app/immutable/entry/start.BUeUTs-f.js","_app/immutable/chunks/entry.38u5yRFU.js","_app/immutable/chunks/runtime.BUQce5Kf.js","_app/immutable/entry/app.CrAHAw1Q.js","_app/immutable/chunks/runtime.BUQce5Kf.js","_app/immutable/chunks/store.CFDfvSmv.js","_app/immutable/chunks/disclose-version.4KsYXkRJ.js","_app/immutable/chunks/props.gEh7eR9r.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
