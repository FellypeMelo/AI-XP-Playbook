import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BBqb_E7R.js","_app/immutable/chunks/-et2P79v.js","_app/immutable/chunks/CYksirbq.js","_app/immutable/chunks/Di41qejB.js","_app/immutable/chunks/EVduNJ5D.js","_app/immutable/chunks/DAa592WT.js","_app/immutable/chunks/DW3M0kAn.js","_app/immutable/chunks/RjShGaUv.js","_app/immutable/chunks/D77ZnoIH.js","_app/immutable/chunks/BUApaBEI.js"];
export const stylesheets = ["_app/immutable/assets/0.lm2jz7-k.css"];
export const fonts = [];
