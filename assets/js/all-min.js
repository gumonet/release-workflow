!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).LazyLoad=n()}(this,function(){"use strict";function e(){return(e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var n="undefined"!=typeof window,t=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),o=n&&"IntersectionObserver"in window,i=n&&"classList"in document.createElement("p"),a=n&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:t||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return e({},r,n)},l=function(e,n){var t,o=new e(n);try{t=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(t)},s="src",u="llOriginalAttrs",d=function(e,n){return e.getAttribute("data-"+n)},f=function(e){return d(e,"ll-status")},m=function(e,n){return function(e,n,t){var o="data-"+n;null!==t?e.setAttribute(o,t):e.removeAttribute(o)}(e,"ll-status",n)},g=function(e){return m(e,null)},v=function(e){return null===f(e)},p=function(e){return"native"===f(e)},_=["loading","loaded","applied","error"],h=function(e,n,t,o){e&&(void 0===o?void 0===t?e(n):e(n,t):e(n,t,o))},b=function(e,n){i?e.classList.add(n):e.className+=(e.className?" ":"")+n},E=function(e,n){i?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},I=function(e){return e.llTempImage},y=function(e,n){if(n){var t=n._observer;t&&t.unobserve(e)}},L=function(e,n){e&&(e.loadingCount+=n)},A=function(e,n){e&&(e.toLoadCount=n)},k=function(e){for(var n,t=[],o=0;n=e.children[o];o+=1)"SOURCE"===n.tagName&&t.push(n);return t},w=function(e,n){var t=e.parentNode;t&&"PICTURE"===t.tagName&&k(t).forEach(n)},N=function(e,n){k(e).forEach(n)},x=[s],z=[s,"poster"],M=[s,"srcset","sizes"],O=function(e){return!!e[u]},B=function(e){return e[u]},C=function(e){return delete e[u]},R=function(e,n){if(!O(e)){var t={};n.forEach(function(n){t[n]=e.getAttribute(n)}),e[u]=t}},T=function(e,n){if(O(e)){var t=B(e);n.forEach(function(n){!function(e,n,t){t?e.setAttribute(n,t):e.removeAttribute(n)}(e,n,t[n])})}},G=function(e,n,t){b(e,n.class_loading),m(e,"loading"),t&&(L(t,1),h(n.callback_loading,e,t))},V=function(e,n,t){t&&e.setAttribute(n,t)},D=function(e,n){V(e,"sizes",d(e,n.data_sizes)),V(e,"srcset",d(e,n.data_srcset)),V(e,s,d(e,n.data_src))},H=function(e,n,t){var o=d(e,n.data_bg_multi),i=d(e,n.data_bg_multi_hidpi),r=a&&i?i:o;r&&(e.style.backgroundImage=r,function(e,n,t){b(e,n.class_applied),m(e,"applied"),t&&(n.unobserve_completed&&y(e,n),h(n.callback_applied,e,t))}(e,n,t))},F={IMG:function(e,n){w(e,function(e){R(e,M),D(e,n)}),R(e,M),D(e,n)},IFRAME:function(e,n){R(e,x),V(e,s,d(e,n.data_src))},VIDEO:function(e,n){N(e,function(e){R(e,x),V(e,s,d(e,n.data_src))}),R(e,z),V(e,"poster",d(e,n.data_poster)),V(e,s,d(e,n.data_src)),e.load()}},S=["IMG","IFRAME","VIDEO"],j=function(e,n){!n||function(e){return e.loadingCount>0}(n)||function(e){return e.toLoadCount>0}(n)||h(e.callback_finish,n)},P=function(e,n,t){e.addEventListener(n,t),e.llEvLisnrs[n]=t},q=function(e,n,t){e.removeEventListener(n,t)},U=function(e){return!!e.llEvLisnrs},$=function(e){if(U(e)){var n=e.llEvLisnrs;for(var t in n){var o=n[t];q(e,t,o)}delete e.llEvLisnrs}},J=function(e,n,t){!function(e){delete e.llTempImage}(e),L(t,-1),function(e){e&&(e.toLoadCount-=1)}(t),E(e,n.class_loading),n.unobserve_completed&&y(e,t)},K=function(e,n,t){var o=I(e)||e;if(!U(o)){!function(e,n,t){U(e)||(e.llEvLisnrs={});var o="VIDEO"===e.tagName?"loadeddata":"load";P(e,o,n),P(e,"error",t)}(o,function(i){!function(e,n,t,o){var i=p(n);J(n,t,o),b(n,t.class_loaded),m(n,"loaded"),h(t.callback_loaded,n,o),i||j(t,o)}(0,e,n,t),$(o)},function(i){!function(e,n,t,o){var i=p(n);J(n,t,o),b(n,t.class_error),m(n,"error"),h(t.callback_error,n,o),i||j(t,o)}(0,e,n,t),$(o)})}},Q=function(e,n,t){!function(e){e.llTempImage=document.createElement("IMG")}(e),K(e,n,t),function(e){O(e)||(e[u]={backgroundImage:e.style.backgroundImage})}(e),function(e,n,t){var o=d(e,n.data_bg),i=d(e,n.data_bg_hidpi),r=a&&i?i:o;r&&(e.style.backgroundImage='url("'.concat(r,'")'),I(e).setAttribute(s,r),G(e,n,t))}(e,n,t),H(e,n,t)},W=function(e,n,t){K(e,n,t),function(e,n,t){var o=F[e.tagName];o&&(o(e,n),G(e,n,t))}(e,n,t)},X=function(e,n,t){!function(e){return S.indexOf(e.tagName)>-1}(e)?Q(e,n,t):W(e,n,t)},Y=function(e,n,t){e.setAttribute("loading","lazy"),K(e,n,t),function(e,n){var t=F[e.tagName];t&&t(e,n)}(e,n),m(e,"native")},Z=function(e){e.removeAttribute(s),e.removeAttribute("srcset"),e.removeAttribute("sizes")},ee=function(e){w(e,function(e){T(e,M)}),T(e,M)},ne={IMG:ee,IFRAME:function(e){T(e,x)},VIDEO:function(e){N(e,function(e){T(e,x)}),T(e,z),e.load()}},te=function(e){var n=ne[e.tagName];n?n(e):function(e){if(O(e)){var n=B(e);e.style.backgroundImage=n.backgroundImage}}(e)},oe=function(e,n){te(e),function(e,n){v(e)||p(e)||(E(e,n.class_entered),E(e,n.class_exited),E(e,n.class_applied),E(e,n.class_loading),E(e,n.class_loaded),E(e,n.class_error))}(e,n),g(e),C(e)},ie=function(e,n,t,o){t.cancel_on_exit&&function(e){return"loading"===f(e)}(e)&&"IMG"===e.tagName&&($(e),function(e){w(e,function(e){Z(e)}),Z(e)}(e),ee(e),E(e,t.class_loading),L(o,-1),g(e),h(t.callback_cancel,e,n,o))},ae=function(e,n,t,o){var i=function(e){return _.indexOf(f(e))>=0}(e);m(e,"entered"),b(e,t.class_entered),E(e,t.class_exited),function(e,n,t){n.unobserve_entered&&y(e,t)}(e,t,o),h(t.callback_enter,e,n,o),i||X(e,t,o)},re=["IMG","IFRAME","VIDEO"],ce=function(e){return e.use_native&&"loading"in HTMLImageElement.prototype},le=function(e,n,t){e.forEach(function(e){return function(e){return e.isIntersecting||e.intersectionRatio>0}(e)?ae(e.target,e,n,t):function(e,n,t,o){v(e)||(b(e,t.class_exited),ie(e,n,t,o),h(t.callback_exit,e,n,o))}(e.target,e,n,t)})},se=function(e,n){o&&!ce(e)&&(n._observer=new IntersectionObserver(function(t){le(t,e,n)},function(e){return{root:e.container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}}(e)))},ue=function(e){return Array.prototype.slice.call(e)},de=function(e){return e.container.querySelectorAll(e.elements_selector)},fe=function(e){return function(e){return"error"===f(e)}(e)},me=function(e,n){return function(e){return ue(e).filter(v)}(e||de(n))},ge=function(e,n){var t;(t=de(e),ue(t).filter(fe)).forEach(function(n){E(n,e.class_error),g(n)}),n.update()},ve=function(e,t){var o=c(e);this._settings=o,this.loadingCount=0,se(o,this),function(e,t){n&&window.addEventListener("online",function(){ge(e,t)})}(o,this),this.update(t)};return ve.prototype={update:function(e){var n,i,a=this._settings,r=me(e,a);(A(this,r.length),!t&&o)?ce(a)?function(e,n,t){e.forEach(function(e){-1!==re.indexOf(e.tagName)&&Y(e,n,t)}),A(t,0)}(r,a,this):(n=this._observer,i=r,function(e){e.disconnect()}(n),function(e,n){n.forEach(function(n){e.observe(n)})}(n,i)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),de(this._settings).forEach(function(e){C(e)}),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){var n=this,t=this._settings;me(e,t).forEach(function(e){y(e,n),X(e,t,n)})},restoreAll:function(){var e=this._settings;de(e).forEach(function(n){oe(n,e)})}},ve.load=function(e,n){var t=c(n);X(e,t)},ve.resetStatus=function(e){g(e)},n&&function(e,n){if(n)if(n.length)for(var t,o=0;t=n[o];o+=1)l(e,t);else l(e,n)}(ve,window.lazyLoadOptions),ve});const lazyLoadInstance=new LazyLoad({});function ValidationEvent(){let e=document.getElementById("form-action").getElementsByTagName("span");if([].forEach.call(e,e=>{e.remove()}),document.getElementById("name").value.length<3){let e=document.createElement("span");return e.innerHTML=" Inserte un nombre válido",document.getElementById("name").parentNode.append(e),document.formRegister.name.focus(),!1}if(document.getElementById("email").value.length<8){let e=document.createElement("span");return e.innerHTML=" Inserte un email válido",document.getElementById("email").parentNode.append(e),document.formRegister.name.focus(),!1}if(document.getElementById("phone").value.length<8){let e=document.createElement("span");return e.innerHTML=" Inserte un phone válido",document.getElementById("phone").parentNode.append(e),document.formRegister.name.focus(),!1}if(document.getElementById("message").value.length<8){let e=document.createElement("span");return e.innerHTML=" Inserte un message válido",document.getElementById("message").parentNode.append(e),document.formRegister.name.focus(),!1}return!0}const allButtons=document.querySelectorAll(".icon-service");for(let e=0;e<allButtons.length;e++)allButtons[e].addEventListener("click",function(){let e=this.parentElement,n=e.getElementsByClassName("description")[0];n.classList.contains("active-description")?(n.classList.remove("active-description"),e.classList.remove("active")):(n.classList.add("active-description"),e.classList.add("active"))});