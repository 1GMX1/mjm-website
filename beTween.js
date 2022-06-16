/* Between.js v0.1.2-fix.1 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.Between=n()}(this,function(){"use strict";function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}function M(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function I(t){return(I=Object.getPrototypeOf||function(t){return t.__proto__})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,e){return(u="undefined"!=typeof Reflect&&Reflect.construct?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var u=new(t.bind.apply(t,r));return e&&o(u,e.prototype),u}).apply(null,arguments)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var t=function(o){var a={},i=[];(o=o||this).on=function(t,n,e){return(a[t]=a[t]||[]).push([n,e]),o},o.off=function(t,n){t||(a={});for(var e=a[t]||i,r=e.length=n?e.length:0;r--;)n==e[r][0]&&e.splice(r,1);return o},o.emit=function(t){for(var n,e=a[t]||i,r=0<e.length?e.slice(0,e.length):e,u=0;n=r[u++];)n[0].apply(n[1],i.slice.call(arguments,1));return o}};var V=function(t,n,e){return t*(1-e)+n*e},e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t,n){return t(n={exports:{}},n.exports),n.exports}for(var i=a(function(t){var n=t.exports={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){var n,e=.1;return 0===t?0:1===t?1:(!e||e<1?(e=1,n=.1):n=.4*Math.asin(1/e)/(2*Math.PI),-e*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/.4))},Out:function(t){var n,e=.1;return 0===t?0:1===t?1:(!e||e<1?(e=1,n=.1):n=.4*Math.asin(1/e)/(2*Math.PI),e*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/.4)+1)},InOut:function(t){var n,e=.1;return 0===t?0:1===t?1:(!e||e<1?(e=1,n=.1):n=.4*Math.asin(1/e)/(2*Math.PI),(t*=2)<1?e*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/.4)*-.5:e*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/.4)*.5+1)}},Back:{In:function(t){return t*t*(2.70158*t-1.70158)},Out:function(t){return--t*t*(2.70158*t+1.70158)+1},InOut:function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},Bounce:{In:function(t){return 1-n.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*n.Bounce.In(2*t):.5*n.Bounce.Out(2*t-1)+.5}}}}),c=(i.Linear,i.Quadratic,i.Cubic,i.Quartic,i.Quintic,i.Sinusoidal,i.Exponential,i.Circular,i.Elastic,i.Back,i.Bounce,a(function(a){(function(){var t,n,e,r,u,o;"undefined"!=typeof performance&&null!==performance&&performance.now?a.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(a.exports=function(){return(t()-u)/1e6},n=process.hrtime,r=(t=function(){var t;return 1e9*(t=n())[0]+t[1]})(),o=1e9*process.uptime(),u=r-o):Date.now?(a.exports=function(){return Date.now()-e},e=Date.now()):(a.exports=function(){return(new Date).getTime()-e},e=(new Date).getTime())}).call(e)})),l="undefined"==typeof window?e:window,f=["moz","webkit"],s="AnimationFrame",p=l["request"+s],h=l["cancel"+s]||l["cancelRequest"+s],m=0;!p&&m<f.length;m++)p=l[f[m]+"Request"+s],h=l[f[m]+"Cancel"+s]||l[f[m]+"CancelRequest"+s];if(!p||!h){var d=0,y=0,v=[];p=function(t){if(0===v.length){var n=c(),e=Math.max(0,1e3/60-(n-d));d=e+n,setTimeout(function(){for(var t=v.slice(0),n=v.length=0;n<t.length;n++)if(!t[n].cancelled)try{t[n].callback(d)}catch(t){setTimeout(function(){throw t},0)}},Math.round(e))}return v.push({handle:++y,callback:t,cancelled:!1}),y},h=function(t){for(var n=0;n<v.length;n++)v[n].handle===t&&(v[n].cancelled=!0)}}var b=function(t){return p.call(l,t)};b.cancel=function(){h.apply(l,arguments)},b.polyfill=function(t){t||(t=l),t.requestAnimationFrame=p,t.cancelAnimationFrame=h};var w,k,P=[],T=Symbol("type"),j=Symbol("start_time"),x=Symbol("completed"),D=Symbol("paused"),g=requestAnimationFrame||b,A=Date.now();!function t(){g(t),w=Date.now(),k=w-A;for(var n=0;n<P.length;n++)P[n][x]||P[n](k,Date.now()-P[n][j]);A=w}();var E=function(t){function g(e,t){var n,r,u,o;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,g),u=this,o=I(g).call(this),M(_(_(r=!o||"object"!=typeof o&&"function"!=typeof o?_(u):o)),"update",function(){var e=_(_(r))._updateValue;return function(t,n){r[x]||r[D]||(0===r.localTime&&r.emit("start",r.value,_(_(r))),e(r.ease(r.loopFunction.progress(Math.min(1,(n||r.localTime)/r.duration)))),r.emit("update",r.value,_(_(r)),t),r.localTime>=r.duration&&r.loopFunction.complete(function(){r[x]=!0,r.emit("complete",r.value,_(_(r)))}),r.localTime+=t)}});var a=r.plugin=Object.values(g._plugins).reduce(function(t,n){return t||n&&n.test&&n.test(e)&&n},!1),i=a&&a.name||("object"===O(e)?Array.isArray(e)?"array":"object":"number");if(a){var c=a.initialize(e,t);e=c.startValue,t=c.destValue,r.data=c.data}switch(Object.assign(_(_(r)),(M(n={duration:1e3,localTime:0,startValue:e,destValue:t,loopMode:"once",loopFunction:g.DEFAULT_LOOP,ease:function(t){return t},value:"array"===i?[].concat(e):"object"===i?Object.assign({},e):e},x,!1),M(n,T,i),M(n,j,Date.now()),M(n,D,!1),n)),r[T]){case"number":r._updateValue=function(t){r.value=V(r.startValue,r.destValue,t)};break;case"array":var l=r.value.length,f=_(_(r)),s=f.startValue,p=f.destValue,h=f.value;r._updateValue=function(t){for(var n=0;n<l;n++)h[n]=V(s[n],p[n],t)};break;case"object":var m=Object.keys(r.startValue),d=m.length,y=_(_(r)),v=y.startValue,b=y.destValue,w=y.value;r._updateValue=function(t){for(var n=0;n<d;n++){var e=m[n];w[e]=V(v[e],b[e],t)}};break;default:r.plugin?r._updateValue=function(t){r.value=r.plugin.interpolate(r.startValue,r.destValue,t,r.data)}:(console.warn("Between: startValue type was unrecognized."),r._updateValue=function(){return null})}return P.push(r.update()),r}return n(g,null,[{key:"between",value:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return u(g,n)}}]),n(g,[{key:"pause",value:function(){return this[D]=!0,this.emit("pause",this.value,this,k),this}},{key:"play",value:function(){return this[D]=!1,this.emit("play",this.value,this,k),this}},{key:"easing",value:function(t){return this.ease=t,this}},{key:"time",value:function(t){return this.duration=t,this}},{key:"loop",value:function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"once",n="__loop_".concat(t),e=arguments.length,r=new Array(1<e?e-1:0),u=1;u<e;u++)r[u-1]=arguments[u];return this.loopFunction=n in this?Object.assign({},g.DEFAULT_LOOP,this[n].apply(this,r)):g.DEFAULT_LOOP,this}},{key:"__loop_repeat",value:function(t){var n=this,e=t;return this.times=0,{complete:function(t){n.localTime=0,Number.isInteger(e)&&++n.times===e?t():Number.isInteger(e)||++n.times}}}},{key:"__loop_bounce",value:function(t){var n=this,e=t,r=1;return this.times=0,{complete:function(t){n.localTime=0,r=-r,Number.isInteger(e)&&++n.times===e?t():Number.isInteger(e)||++n.times},progress:function(t){return 0<r?t:1-t}}}},{key:"isPaused",get:function(){return this[D]}}]),function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");o(t.prototype,n&&n.prototype),n&&o(t,n)}(g,t),g}(t);return M(E,"DEFAULT_LOOP",{complete:function(t){return t()},progress:function(t){return t}}),E.Easing=i,E._plugins={},E});
