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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/AI-XP-Playbook/","/AI-XP-Playbook/blog/","/AI-XP-Playbook/compliance/","/AI-XP-Playbook/sobre/","/AI-XP-Playbook/workbench/","/AI-XP-Playbook/blog/001-introducao-ai-xp/","/AI-XP-Playbook/blog/002-eng-software-3-zero/","/AI-XP-Playbook/blog/002-paradoxo-carga-cognitiva/","/AI-XP-Playbook/blog/003-falacia-janela-contexto/","/AI-XP-Playbook/blog/003-modelo-akita-driven/","/AI-XP-Playbook/blog/004-ia-como-arquiteto/","/AI-XP-Playbook/blog/004-llms-lut-boxes/","/AI-XP-Playbook/blog/005-framework-ai-xp/","/AI-XP-Playbook/blog/005-fundamentos-academicos/","/AI-XP-Playbook/blog/006-camadas-teste-estocastico/","/AI-XP-Playbook/blog/006-limites-arquiteturais/","/AI-XP-Playbook/blog/007-governanca-sandboxing/","/AI-XP-Playbook/blog/008-representacao-intermediria-ir/","/AI-XP-Playbook/blog/009-combate-ao-overengineering/","/AI-XP-Playbook/blog/010-guilhotina-loops-recursivos/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
