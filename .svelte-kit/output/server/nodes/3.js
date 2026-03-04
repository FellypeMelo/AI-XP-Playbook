import * as universal from '../entries/pages/blog/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.ts";
export const imports = ["_app/immutable/nodes/3.BfA46lNv.js","_app/immutable/chunks/BjvyDWVh.js","_app/immutable/chunks/Fhv3_uvV.js","_app/immutable/chunks/CgXk9Ep7.js","_app/immutable/chunks/Cip_Xeqt.js","_app/immutable/chunks/CqhKnqRG.js","_app/immutable/chunks/DG4chpb8.js","_app/immutable/chunks/a9Ra9q_i.js","_app/immutable/chunks/BTEVxrpY.js","_app/immutable/chunks/D-TfodMw.js","_app/immutable/chunks/D4Y4sy29.js","_app/immutable/chunks/DS9ILL2T.js","_app/immutable/chunks/BEK_2xTn.js","_app/immutable/chunks/rq3N_93f.js","_app/immutable/chunks/CyIr9DWV.js"];
export const stylesheets = [];
export const fonts = [];
