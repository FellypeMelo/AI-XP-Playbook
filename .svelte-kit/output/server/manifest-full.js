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
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
