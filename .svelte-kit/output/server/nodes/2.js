import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DjDFnMXJ.js","_app/immutable/chunks/BjvyDWVh.js","_app/immutable/chunks/Fhv3_uvV.js","_app/immutable/chunks/CgXk9Ep7.js","_app/immutable/chunks/Cip_Xeqt.js","_app/immutable/chunks/BTEVxrpY.js","_app/immutable/chunks/D-TfodMw.js","_app/immutable/chunks/CqhKnqRG.js","_app/immutable/chunks/DG4chpb8.js","_app/immutable/chunks/D4Y4sy29.js","_app/immutable/chunks/nSrr6K9-.js","_app/immutable/chunks/DS9ILL2T.js","_app/immutable/chunks/BEK_2xTn.js","_app/immutable/chunks/rq3N_93f.js","_app/immutable/chunks/CyIr9DWV.js","_app/immutable/chunks/DfgX-lEb.js","_app/immutable/chunks/B1biidGC.js","_app/immutable/chunks/E5f3dtqF.js","_app/immutable/chunks/BvOdbe5E.js","_app/immutable/chunks/a9Ra9q_i.js"];
export const stylesheets = [];
export const fonts = [];
