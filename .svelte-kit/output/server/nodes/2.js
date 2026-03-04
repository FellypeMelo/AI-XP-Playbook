import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DaWpF04Y.js","_app/immutable/chunks/BSS8YLhE.js","_app/immutable/chunks/-et2P79v.js","_app/immutable/chunks/CYksirbq.js","_app/immutable/chunks/CxEBcD-D.js","_app/immutable/chunks/Di41qejB.js","_app/immutable/chunks/6QuvGUCF.js","_app/immutable/chunks/EVduNJ5D.js","_app/immutable/chunks/DAa592WT.js","_app/immutable/chunks/oZAUA7IY.js"];
export const stylesheets = [];
export const fonts = [];
