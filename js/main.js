(()=>{"use strict";function t(){window.addEventListener("scroll",(function(){document.querySelector("#header").classList.toggle("fixar",window.scrollY>0)}))}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function i(t){var i=function(t,i){if("object"!=e(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var s=a.call(t,"string");if("object"!=e(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(i)?i:i+""}function a(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,i(s.key),s)}}var s,n,o,r,l,m,c,d,p,u;t(),function(){function t(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-menu="suave"] a[href^="#"]').forEach((function(e){e.addEventListener("click",t)}))}(),t(),function(){var t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function i(){t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(i(),window.addEventListener("scroll",i))}(),s=document.getElementById("pbutton"),n=document.querySelectorAll(".pcard"),s.addEventListener("click",(function(){s.classList.toggle("certificate-ativo"),n.forEach((function(t){t.classList.contains("ativo")?(t.classList.remove("ativo"),t.addEventListener("transitionend",(function e(){t.classList.contains("ativo")||(t.style.display="none"),t.removeEventListener("transitionend",e)}))):(t.style.display="block",t.offsetWidth,t.classList.add("ativo"))}))})),function(){var t=document.getElementById("cbutton"),e=document.querySelectorAll(".ccard");t.addEventListener("click",(function(){t.classList.toggle("certificate-ativo"),e.forEach((function(t){t.classList.contains("ativo")?(t.classList.remove("ativo"),t.addEventListener("transitionend",(function e(){t.classList.contains("ativo")||(t.style.display="none"),t.removeEventListener("transitionend",e)}))):(t.style.display="block",t.offsetWidth,t.classList.add("ativo"))}))}))}(),function(){var t=document.getElementById("hbutton"),e=document.querySelectorAll(".hcard");t.addEventListener("click",(function(){t.classList.toggle("certificate-ativo"),e.forEach((function(t){t.classList.contains("ativo")?(t.classList.remove("ativo"),t.addEventListener("transitionend",(function e(){t.classList.contains("ativo")||(t.style.display="none"),t.removeEventListener("transitionend",e)}))):(t.style.display="block",t.offsetWidth,t.classList.add("ativo"))}))}))}(),o=document.querySelector("header"),window.addEventListener("scroll",(function(){o.classList.toggle("ativo-menu",scrollY>0)})),function t(e){var i=e.innerHTML.split("");e.innerHTML="",setTimeout((function(){for(var t=function(t){setTimeout((function(){return e.innerHTML+=i[t]}),170*t)},a=0;a<i.length;a++)t(a)}),1500),setTimeout((function(){return t(r)}),14e3)}(r=document.querySelector(".nome")),l=document.querySelectorAll(".box-habilidades"),m=document.querySelector(".texto-descricao"),c=['<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">HTML</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de marcação utilizada para estruturar e apresentar conteúdo na web.</p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">CSS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de estilo utilizada para definir a apresentação e o layout de páginas web.</p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Sass</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de pré-processamento. Basicamente o Sass potencializa o CSS.</p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">JavaScript</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">JavaScript é uma linguagem de programação utilizada para o desenvolvimento web.</p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Redux</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma biblioteca de gerenciamento de estado para aplicativos JavaScript. </p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">React.JS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">React.js é uma biblioteca de código aberto mantida pelo Facebook que é utilizada para construir interfaces.</p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Vue.JS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3(0, 0, 0);}}">É um framework progressivo de JavaScript utilizado para construir interfaces de usuário. </p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">TypeScript</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">TypeScript é uma linguagem de programação que estende o JavaScript, oferecendo tipagem estática opcional.</p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Bootstrap</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É um dos frameworks mais populares para desenvolvimento de interfaces web responsivas e amigáveis.</p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Node.JS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É um ambiente de tempo de execução que permite que você execute código JavaScript do lado do servidor. </p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Tailwind</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma estrutura de CSS que adota uma metodologia de "utility-first", oferecendo um conjunto de classes CSS. </p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Mysql</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É um dos sistemas de gerenciamento de banco de dados relacionais (SGBDR) mais populares e amplamente utilizados no mundo.</p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">jQuery</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}"> jQuery é uma biblioteca de JavaScript que simplifica a manipulação de documentos HTML.</p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Git</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Sistema de controle de versão distribuído amplamente utilizado para o rastreamento de alterações em arquivos. </p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Github</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>','<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Figma</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">O Figma é uma poderosa ferramenta de design, que permite criar interfaces, designs de aplicativos e sites. </p> <br>'],d=[new Date(2021,10,1).getTime(),new Date(2021,10,1).getTime(),new Date(2022,0,1).getTime(),new Date(2022,3,1).getTime(),new Date(2022,3,1).getTime(),new Date(2022,1,1).getTime(),new Date(2021,11,1).getTime(),new Date(2023,11,1).getTime(),new Date(2023,11,1).getTime(),new Date(2023,11,1).getTime(),new Date(2023,11,1).getTime()],p=(new Date).getTime(),l.forEach((function(t,e){var i=e;t.addEventListener("mouseover",(function(t){Math.round((p-d[i])/2592e6),m.innerHTML="<p>".concat(c[i],"</p>")})),t.addEventListener("mouseout",(function(t,e){m.innerHTML='<p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">/* Passe o mouse por cima de alguma habilidade para ler a descrição */</p>'}))})),function(){var t=document.querySelector("form");function e(e){e.ok?t.innerHTML="<p class='font-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: juberlandio.santana.js@gmail.com</p>":t.innerHTML="<p class='font-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem enviada</span>, em breve entro em contato. Geralmente respondo em 24 horas.</p>"}t.addEventListener("submit",(function(i){i.preventDefault();var a=document.querySelector("form button");a.disabled=!0,a.innerText="Enviando...";var s=new FormData(t);fetch("./enviar.php",{method:"POST",body:s}).then(e)}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),i=["click"];function a(){e.classList.add("active"),t.classList.add("active"),function(i,a,s){var n=document.documentElement,o="data-outside";function r(s){i.contains(s.target)||(i.removeAttribute(o),a.forEach((function(t){n.removeEventListener(t,r)})),e.classList.remove("active"),t.classList.remove("active"))}i.hasAttribute(o)||(a.forEach((function(t){setTimeout((function(){return n.addEventListener(t,r)}))})),i.setAttribute(o,""))}(e,i)}t&&i.forEach((function(e){return t.addEventListener(e,a)}))}(),u=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.updateInitialPosition()}return e=t,s=[{key:"isSettingTrue",value:function(t){return""===t||!0===t||1===t}},{key:"init",value:function(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach((function(e){"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))}))}}],(i=[{key:"getElementListener",value:function(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){var t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}},{key:"addEventListeners",value:function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}},{key:"removeEventListeners",value:function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}},{key:"destroy",value:function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}},{key:"onDeviceOrientation",value:function(t){if(null!==t.gamma&&null!==t.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,a=e/this.width,s=i/this.height,n=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/a,o=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/s;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:n+this.left,clientY:o+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}}},{key:"onMouseEnter",value:function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}},{key:"onMouseMove",value:function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}},{key:"onMouseLeave",value:function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}},{key:"reset",value:function(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform="perspective(".concat(this.settings.perspective,"px) ")+"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()}},{key:"resetGlare",value:function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}},{key:"updateInitialPosition",value:function(){if(0!==this.settings.startX||0!==this.settings.startY){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}}},{key:"getValues",value:function(){var t,e;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}},{key:"updateElementPosition",value:function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}},{key:"update",value:function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate(".concat(t.angle,"deg) translate(-50%, -50%)"),this.glareElement.style.opacity="".concat(t.percentageY*this.settings["max-glare"]/100)),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}},{key:"prepareGlare",value:function(){if(!this.glarePrerender){var t=document.createElement("div");t.classList.add("js-tilt-glare");var e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}},{key:"updateGlareSize",value:function(){if(this.glare){var t=2*(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight);Object.assign(this.glareElement.style,{width:"".concat(t,"px"),height:"".concat(t,"px")})}}},{key:"updateClientSize",value:function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},{key:"onWindowResize",value:function(){this.updateGlareSize(),this.updateClientSize()}},{key:"setTransition",value:function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity ".concat(this.settings.speed,"ms ").concat(this.settings.easing)),this.transitionTimeout=setTimeout((function(){t.element.style.transition="",t.glare&&(t.glareElement.style.transition="")}),this.settings.speed)}},{key:"extendSettings",value:function(t){var e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var a in e)if(a in t)i[a]=t[a];else if(this.element.hasAttribute("data-tilt-"+a)){var s=this.element.getAttribute("data-tilt-"+a);try{i[a]=JSON.parse(s)}catch(e){i[a]=s}}else i[a]=e[a];return i}}])&&a(e.prototype,i),s&&a(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,i,s}(),"undefined"!=typeof document&&(window.VanillaTilt=u,u.init(document.querySelectorAll("[data-tilt]")))})();