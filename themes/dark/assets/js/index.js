(self.webpackChunkslim=self.webpackChunkslim||[]).push([[826],{3290:(o,n,e)=>{"use strict";var i=e(9755),t=e.n(i),w=(e(7915),e(4724),e(538)),d=e(629),a=e(9010),c=e(9669),l=e.n(c),u=e(3279),s=e.n(u),r=e(1439),g=e.n(r),m=e(9297),h=e(1083),p=e(7707),f=e(1468);window&&(window.globalVueShim=f.ZP,window.$=t(),window.jQuery=t(),window.Vue=w.default,window.Vuex=d.ZP,window.ToggleButton=a.ToggleButton,window.axios=l(),window._={debounce:s()},window.store=m.Z,window.router=h.Z,window.apiRoute=p.fL,window.apiv1=p.ww,window.api=p.hi,window.MEDUSA={common:{},config:{general:{},layout:{}},home:{},addShows:{}},window.webRoot=p.rT,window.apiKey=p.q1,window.components=[],window.components.push(g()));const v={exec(o,n){const e=MEDUSA;n=void 0===n?"init":n,""!==o&&e[o]&&"function"==typeof e[o][n]&&e[o][n]()},init(){t()("[v-cloak]").removeAttr("v-cloak");const{body:o}=document,n=o.getAttribute("data-controller"),e=o.getAttribute("data-action");v.exec("common"),v.exec(n),v.exec(n,e),window.dispatchEvent(new Event("medusa-loaded"))}},{pathname:b}=window.location;if(!b.includes("/login")&&!b.includes("/apibuilder")){const o=o=>{const{general:n,layout:e}=o.detail;MEDUSA.config.general={...MEDUSA.config.general,...n};const i="dark"===e.themeName?"-dark":"";MEDUSA.config.layout={...MEDUSA.config.layout,...e,themeSpinner:i,loading:'<img src="images/loading16'+i+'.gif" height="16" width="16" />'},t()(document).ready(v.init)};window.addEventListener("medusa-config-loaded",o,{once:!0})}}},o=>{"use strict";o.O(0,[886,125],(()=>{return n=3290,o(o.s=n);var n}));o.O()}]);
//# sourceMappingURL=index.js.map