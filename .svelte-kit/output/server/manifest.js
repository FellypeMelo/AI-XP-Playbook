export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["docs/pdfs/Análise Profunda de Site para IA.pdf","docs/pdfs/IA como Arquiteto de Software Sênior.pdf","docs/pdfs/XP com Agentes de IA_ Tratado Técnico.pdf","favicon.png","vite.svg"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Df-4gicn.js",app:"_app/immutable/entry/app.DT3FLt1J.js",imports:["_app/immutable/entry/start.Df-4gicn.js","_app/immutable/chunks/C-YP3GaO.js","_app/immutable/chunks/CgXk9Ep7.js","_app/immutable/chunks/rq3N_93f.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/BEK_2xTn.js","_app/immutable/entry/app.DT3FLt1J.js","_app/immutable/chunks/CgXk9Ep7.js","_app/immutable/chunks/Fhv3_uvV.js","_app/immutable/chunks/BEK_2xTn.js","_app/immutable/chunks/BTEVxrpY.js","_app/immutable/chunks/D-TfodMw.js","_app/immutable/chunks/CV6tAz64.js","_app/immutable/chunks/E5f3dtqF.js","_app/immutable/chunks/BvOdbe5E.js","_app/immutable/chunks/rq3N_93f.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/blog/","/compliance/","/sobre/","/workbench/","/blog/001-introducao-ai-xp/","/blog/002-eng-software-3-zero/","/blog/002-paradoxo-carga-cognitiva/","/blog/003-falacia-janela-contexto/","/blog/003-modelo-akita-driven/","/blog/004-ia-como-arquiteto/","/blog/004-llms-lut-boxes/","/blog/005-framework-ai-xp/","/blog/005-fundamentos-academicos/","/blog/006-camadas-teste-estocastico/","/blog/006-limites-arquiteturais/","/blog/007-governanca-sandboxing/","/blog/008-representacao-intermediria-ir/","/blog/009-combate-ao-overengineering/","/blog/010-guilhotina-loops-recursivos/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
