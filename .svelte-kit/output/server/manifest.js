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
		client: {start:"_app/immutable/entry/start.BX9KknOb.js",app:"_app/immutable/entry/app.C9MTrRBY.js",imports:["_app/immutable/entry/start.BX9KknOb.js","_app/immutable/chunks/By3uNYrS.js","_app/immutable/chunks/Y9k8PTQ_.js","_app/immutable/chunks/DelALVD1.js","_app/immutable/entry/app.C9MTrRBY.js","_app/immutable/chunks/Y9k8PTQ_.js","_app/immutable/chunks/AFy0JKYi.js","_app/immutable/chunks/DzC2rJDB.js","_app/immutable/chunks/D07gAo1N.js","_app/immutable/chunks/DelALVD1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
