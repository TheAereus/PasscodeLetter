export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["eyes.png","favicon.ico","lightbulb.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.oogW6HiY.js",app:"_app/immutable/entry/app.BqjEscri.js",imports:["_app/immutable/entry/start.oogW6HiY.js","_app/immutable/chunks/DhS1Af2X.js","_app/immutable/chunks/BlGXlDfy.js","_app/immutable/chunks/DVcrnVkz.js","_app/immutable/entry/app.BqjEscri.js","_app/immutable/chunks/BlGXlDfy.js","_app/immutable/chunks/DowX1q4I.js","_app/immutable/chunks/DyN0iA91.js","_app/immutable/chunks/DVcrnVkz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
