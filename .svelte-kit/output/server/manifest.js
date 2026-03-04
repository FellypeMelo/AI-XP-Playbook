export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","vite.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DM05aGvO.js",app:"_app/immutable/entry/app.CIszbxSw.js",imports:["_app/immutable/entry/start.DM05aGvO.js","_app/immutable/chunks/D77ZnoIH.js","_app/immutable/chunks/CYksirbq.js","_app/immutable/chunks/RjShGaUv.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/entry/app.CIszbxSw.js","_app/immutable/chunks/CYksirbq.js","_app/immutable/chunks/Di41qejB.js","_app/immutable/chunks/-et2P79v.js","_app/immutable/chunks/RjShGaUv.js","_app/immutable/chunks/6QuvGUCF.js","_app/immutable/chunks/EVduNJ5D.js","_app/immutable/chunks/BmQc9B6M.js","_app/immutable/chunks/DW3M0kAn.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/blog/","/sobre/","/blog/001-introducao-ai-xp/","/blog/template-post/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
