import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.qsUzbln3.js","_app/immutable/chunks/Fhv3_uvV.js","_app/immutable/chunks/CgXk9Ep7.js","_app/immutable/chunks/B1biidGC.js","_app/immutable/chunks/D-TfodMw.js","_app/immutable/chunks/CqhKnqRG.js","_app/immutable/chunks/D4Y4sy29.js","_app/immutable/chunks/nSrr6K9-.js","_app/immutable/chunks/BvOdbe5E.js","_app/immutable/chunks/rq3N_93f.js","_app/immutable/chunks/C-YP3GaO.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/BEK_2xTn.js"];
export const stylesheets = ["_app/immutable/assets/0.CDhBviWg.css"];
export const fonts = [];
