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
		client: {start:"_app/immutable/entry/start.Bf1l8tNj.js",app:"_app/immutable/entry/app.CLcjRsbZ.js",imports:["_app/immutable/entry/start.Bf1l8tNj.js","_app/immutable/chunks/BxetYS-B.js","_app/immutable/chunks/BlGXlDfy.js","_app/immutable/chunks/DVcrnVkz.js","_app/immutable/entry/app.CLcjRsbZ.js","_app/immutable/chunks/BlGXlDfy.js","_app/immutable/chunks/DowX1q4I.js","_app/immutable/chunks/DyN0iA91.js","_app/immutable/chunks/DVcrnVkz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
