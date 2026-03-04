export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "AI-XP-Playbook/_app",
	assets: new Set(["docs/pdfs/Análise Profunda de Site para IA.pdf","docs/pdfs/IA como Arquiteto de Software Sênior.pdf","docs/pdfs/XP com Agentes de IA_ Tratado Técnico.pdf","favicon.png","vite.svg"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.XJJgTyPg.js",app:"_app/immutable/entry/app.9QpBxqbV.js",imports:["_app/immutable/entry/start.XJJgTyPg.js","_app/immutable/chunks/DylU5n9N.js","_app/immutable/chunks/CgXk9Ep7.js","_app/immutable/chunks/rq3N_93f.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DS9ILL2T.js","_app/immutable/chunks/BEK_2xTn.js","_app/immutable/entry/app.9QpBxqbV.js","_app/immutable/chunks/CgXk9Ep7.js","_app/immutable/chunks/Fhv3_uvV.js","_app/immutable/chunks/BEK_2xTn.js","_app/immutable/chunks/BTEVxrpY.js","_app/immutable/chunks/D-TfodMw.js","_app/immutable/chunks/CV6tAz64.js","_app/immutable/chunks/E5f3dtqF.js","_app/immutable/chunks/BvOdbe5E.js","_app/immutable/chunks/rq3N_93f.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
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
				id: "/compliance",
				pattern: /^\/compliance\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/workbench",
				pattern: /^\/workbench\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
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
