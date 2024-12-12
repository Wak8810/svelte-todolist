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
		client: {"start":"_app/immutable/entry/start.C5zNjAez.js","app":"_app/immutable/entry/app.DOmbDC_f.js","imports":["_app/immutable/entry/start.C5zNjAez.js","_app/immutable/chunks/entry.dZJFkEM0.js","_app/immutable/chunks/runtime.BUQce5Kf.js","_app/immutable/entry/app.DOmbDC_f.js","_app/immutable/chunks/runtime.BUQce5Kf.js","_app/immutable/chunks/store.CFDfvSmv.js","_app/immutable/chunks/disclose-version.4KsYXkRJ.js","_app/immutable/chunks/props.gEh7eR9r.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
