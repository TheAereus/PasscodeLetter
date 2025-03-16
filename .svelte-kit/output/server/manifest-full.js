export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["eyes.png","favicon.ico","kiss.mp3","lightbulb.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".mp3":"audio/mpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BAQsLVXO.js",app:"_app/immutable/entry/app.BVdMpZgl.js",imports:["_app/immutable/entry/start.BAQsLVXO.js","_app/immutable/chunks/qhFFc4RI.js","_app/immutable/chunks/BzPUF8M7.js","_app/immutable/chunks/CAacWL_5.js","_app/immutable/entry/app.BVdMpZgl.js","_app/immutable/chunks/BzPUF8M7.js","_app/immutable/chunks/B7cwONPK.js","_app/immutable/chunks/xYhGxOa7.js","_app/immutable/chunks/CAacWL_5.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
