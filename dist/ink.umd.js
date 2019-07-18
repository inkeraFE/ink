!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],e):e((t=t||self).inkUi={},t.Vue)}(this,function(t,e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var i="0.0.8";function n(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===i&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}n(".ink-btn{border:none;outline:none;display:inline-block;padding:10px 15px;border-radius:6px;font-size:18px}.ink-btn:active{background:#f7f8f9}.is-disabled{opacity:.4}.btn-large{display:block;width:100%}.btn-primary{background:#fff;color:#108ee9;border:1px solid #108ee9}.btn-danger{background:#fff;color:#dd2622;border:1px solid #dd2622}.btn-warning{background:#fff;color:#f90;border:1px solid #f90}.btn-default{background:#fff;color:#333}.btn-active{background:#f7f8f9}");var o={name:"ink-btn",computed:{typeClass:function(){return"primary"===this.type?"btn-primary":"danger"===this.type?"btn-danger":"warning"===this.type?"btn-warning":"btn-default"},sizeClass:function(){if("large"===this.size)return"btn-large"}},props:{type:{type:String,default:"default"},size:{type:String,default:"small"},disabled:{type:Boolean,default:!1}},render:function(t){var e=this;return t("button",{attrs:{name:"button",type:"button"},class:["ink-btn",this.typeClass,this.sizeClass,this.disabled?"is-disabled":""],disabled:this.disabled,on:{click:function(t){e.$emit("click",t)}}},this.$slots.default)}};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(".flex-flex{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flex-auto{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}.flex-none{-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box}.flex.flex-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.flex.flex-nowrap{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.flex.flex-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.flex.flex-justify-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.flex.flex-justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.flex.flex-justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.flex.flex-justify-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.flex.flex-justify-around{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.flex.flex-align-start{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.flex.flex-align-end{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.flex.flex-align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex.flex-align-baseline{-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline}.flex.flex-align-stretch{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}");var r={name:"ink-flex",props:{flex:{type:Number},auto:{type:Boolean,default:!1},none:{type:Boolean,default:!1},width:{type:String},height:{type:String},row:{type:Boolean,default:!1},column:{type:Boolean,default:!1},wrap:{type:Boolean,default:!1},nowrap:{type:Boolean,default:!1},justifyStart:{type:Boolean,default:!1},justifyEnd:{type:Boolean,default:!1},justifyCenter:{type:Boolean,default:!1},justifyBetween:{type:Boolean,default:!1},justifyAround:{type:Boolean,default:!1},alignStart:{type:Boolean,default:!1},alignEnd:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},alignBaseline:{type:Boolean,default:!1},alignStretch:{type:Boolean,default:!1}},computed:{getClassArray:function(){var t={"flex-flex":this.flex,"flex-auto":this.auto,"flex-none":this.none||this.width||this.height,"flex-row":this.row,"flex-column":this.column,"flex-wrap":this.wrap,"flex-nowrap":this.nowrap,"flex-justify-start":this.justifyStart,"flex-justify-end":this.justifyEnd,"flex-justify-center":this.justifyCenter,"flex-justify-between":this.justifyBetween,"flex-justify-around":this.justifyAround,"flex-align-start":this.alignStart,"flex-align-end":this.alignEnd,"flex-align-center":this.alignCenter,"flex-align-baseline":this.alignBaseline,"flex-align-stretch":this.alignStretch},e=[];return Object.keys(t).forEach(function(i){t[i]&&e.push(i)}),e},getStyle:function(){var t={};return this.flex&&(t.flex="boolean"==typeof this.flex?1:this.flex,t.WebkitFlex="boolean"==typeof this.flex?1:this.flex),this.height&&(t.height=this.height),this.width&&(t.width=this.width),t}},render:function(t){return t("div",{class:["flex"].concat(s(this.getClassArray)),style:this.getStyle},this.$slots.default)}};n('.ink-switch{display:inline-block;height:32px}.ink-switch *{pointer-events:none}.ink-switch .switch-input{display:none}.ink-switch .switch-label{position:relative;display:inline-block;width:50px;height:32px;border-radius:15px;background:#ddd}.ink-switch .switch-label:after,.ink-switch .switch-label:before{content:" ";position:absolute;border-radius:13px;-webkit-transition:all .25s;transition:all .25s}.ink-switch .switch-label:before{top:1px;left:1px;width:48px;height:30px;background:#fefefe}.ink-switch .switch-label:after{top:.5px;left:1px;width:30px;height:30px;border-radius:100%;background:#fff;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.3);box-shadow:0 0 2px 0 rgba(0,0,0,.3)}.ink-switch .switch-input[type=checkbox]:checked+.switch-label:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.ink-switch .switch-input[type=checkbox]:checked+.switch-label:after{-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}');var l={name:"ink-switch",computed:{inner_value:{get:function(){return this.value},set:function(t){this.$emit("input",t),this.$emit("change",t)}},mainColor:function(){if(this.inner_value)return this.color}},props:{value:{type:Boolean,default:!1},color:{type:String,default:"#108ee9"}},render:function(t){var e=this;return t("label",{staticClass:"ink-switch"},[t("input",{staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{checked:this.inner_value},on:{change:function(t){e.inner_value=t.target.checked}}}),t("label",{staticClass:"switch-label",style:{background:this.mainColor}})])}};n('.ink-radio{display:inline-block;width:20px;height:20px;border-radius:100%}.ink-radio *{pointer-events:none}.ink-radio .radio-input{display:none}.ink-radio .radio-label{position:relative;display:inline-block;width:20px;height:20px;border-radius:100%;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff}.ink-radio .radio-input[type=radio]:disabled+.radio-label{border:1px solid #ccc}.ink-radio .radio-input[type=radio]:disabled+.radio-label:before{content:" ";position:absolute;left:50%;top:0;-webkit-transform:translate3d(-50%,0,0) rotate(-45deg);transform:translate3d(-50%,0,0) rotate(-45deg);width:1px;height:100%;background:#ccc}.ink-radio .radio-input[type=radio]:checked+.radio-label{border:none;background:#108ee9}.ink-radio .radio-input[type=radio]:checked+.radio-label:before{content:" ";position:absolute;top:4px;left:4px;width:13px;height:8px;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid #fff;border-top:none;border-right:none;-webkit-transform:rotate(-46deg);-ms-transform:rotate(-46deg);transform:rotate(-46deg)}');var c={name:"ink-radio",props:{name:{type:String},val:{type:String},value:{type:String},disabled:{type:Boolean,default:!1},color:{type:String,default:"#108ee9"}},computed:{bgColor:function(){return this.value===this.val?this.color:"white"}},render:function(t){var e=this;return t("label",{staticClass:"ink-radio"},[t("input",{attrs:{type:"radio",name:this.name,value:this.val},domProps:{checked:this.value===this.val,disabled:this.disabled},staticClass:"radio-input",on:{change:function(t){e.checked=t.target.value===e.val,e.$emit("input",t.target.value)}}}),t("label",{staticClass:"radio-label",style:{background:this.bgColor}})])}};n(".ink-loading{position:relative;border-radius:100%;border:2px solid #ddd}.ink-loading,.ink-loading .loading-item{-webkit-box-sizing:border-box;box-sizing:border-box;width:23px;height:23px}.ink-loading .loading-item{position:absolute;top:-2px;left:-2px;border:3px solid rgba(0,0,0,0);border-bottom-color:#108ee9;border-radius:100%;-webkit-animation:rotateAnim 1s linear infinite;animation:rotateAnim 1s linear infinite}@-webkit-keyframes rotateAnim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateAnim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}");var d={name:"ink-loading",props:{color:{type:String,default:"#108ee9"}},computed:{bgColor:function(){return"white"},borderColor:function(){return this.color}},render:function(t){return t("div",{staticClass:"ink-loading",style:{background:this.bgColor}},[t("div",{staticClass:"loading-item",style:{"border-bottom-color":this.borderColor,"border-top-color":this.borderColor}})])}};n(".ink-progress{position:relative;height:20px;line-height:20px}.ink-progress .progress-default-line{width:100%;border-top:1px solid #ccc}.ink-progress .progress-active-line,.ink-progress .progress-default-line{position:absolute;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.ink-progress .progress-active-line{left:0;width:50%;height:2px;background:#108ee9;-webkit-transition:width .15s linear;transition:width .15s linear}");var p={name:"ink-progress",props:{value:{type:Number},color:{type:String},lineHeight:{type:String,defualt:"2px"}},computed:{animWidth:function(){return this.value<0?0:this.value%100}},render:function(t){return t("div",{staticClass:"ink-progress"},[t("div",{staticClass:"progress-default-line",style:{"border-width":this.lineHeight}}),t("div",{staticClass:"progress-active-line",style:{width:"".concat(this.animWidth,"%"),background:this.color,height:this.lineHeight}})])}};function f(){return window._popupHash}function u(t){return null!==t&&"object"===a(t)}n('.ink-dialog{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1010;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.ink-dialog .ink-dialog-content{padding:15px 0 0;max-width:375px;width:75%;background:#fff;border-radius:5px}.ink-dialog .ink-dialog-content .ink-dialog-title{text-align:center;font-size:20px}.ink-dialog .ink-dialog-content .ink-dialog-input{display:block;width:80%;margin:15px auto;padding:5px 10px;font-size:17px;line-height:25px;color:#666;text-align:left;outline:none;border:1px solid #999;border-radius:3px}.ink-dialog .ink-dialog-content .ink-dialog-btn{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid #f0f1f2}.ink-dialog .ink-dialog-content .ink-dialog-btn button:nth-of-type(2):after{content:" ";position:absolute;top:0;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);height:100%;width:1px;background:#f0f1f2}');var h={lockScroll:function(){document.body.style.overflow="hidden"},openScroll:function(){document.body.removeAttribute("style")},createPopup:function(t){var e=this;window.addEventListener("popstate",function t(i){e.removePopup(),window.removeEventListener("popstate",t)}),window.history.pushState({type:"_popup"},null),window._popupHash=Date.now();var i=document.createElementNS("ink-popup-wrapper".concat(f()),"div");i.appendChild(t),document.body.appendChild(i)},removePopup:function(){var t=document.getElementsByTagNameNS("ink-popup-wrapper".concat(f()),"div")[0];t&&(t.parentNode.removeChild(t),window.history.go(-1))}};n(".ink-mask{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1000;background:#000;opacity:0;-webkit-transition:opacity .15s;transition:opacity .15s}.ink-mask.mask-anim{opacity:.3}");var b=e.extend({name:"ink-mask",data:function(){return{isShow:!1}},computed:{animClass:function(){if(this.isShow)return"mask-anim"}},render:function(t){return t("div",{class:["ink-mask",this.animClass]})}});b.prototype.show=function(){this.isShow=!0},b.prototype.close=function(){this.isShow=!1,this.$el.addEventListener("transitionend",function(){h.removePopup()},{capture:!1,once:!0})};var k={show:function(t){var e=this;(function(){this.maskInstance=new b({el:document.createElement("div")})}).call(this),document.getElementsByTagNameNS("ink-popup-wrapper".concat(f()),"div")[0].appendChild(this.maskInstance.$el),setTimeout(function(){e.maskInstance.show()},0)},close:function(){this.maskInstance.close()}},x={name:"ink-popup",data:function(){return{isShow:!1}},props:{value:{type:Boolean,default:!1}},watch:{isShow:function(t){t?(h.createPopup(this.$el),h.lockScroll(),k.show()):(k.close(),h.openScroll())}}};function m(t){return{name:t,functional:!0,render:function(e,i){return i.data.props={name:t},e("transition",i.data,i.children)}}}n(".fade-enter-active,.fade-leave-active{-webkit-transition:opacity .15s;transition:opacity .15s}.fade-enter,.fade-leave-to{opacity:0}.slide-top-enter-active,.slide-top-leave-active{-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}.slide-top-enter,.slide-top-leave-to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}");var g=m("fade"),w=m("slide-top"),y={name:"ink-dialog",mixins:[x],data:function(){return{isInput:!1,isCancel:!1,isSubmit:!0,title:null,children:null,options:null,clickMaskClose:!1,promptValue:null}},components:{inkBtn:o},render:function(t){var e=this,i=t("div",{},"function"==typeof this.children?[this.children(t)]:this.children),n=t("input",{staticClass:"ink-dialog-input",attrs:{placeholder:"string"==typeof this.children?this.children:" "},on:{input:function(t){e.promptValue=t.target.value}}}),o={"line-height":"28px"},a={"line-height":"28px",color:"#108ee9"},s=t("ink-btn",{attrs:{size:"large"},style:this._cancel&&u(this._cancel.style)?Object.assign({},o,this._cancel.style):o,nativeOn:{click:function(){e.close(),e._cancel&&e._cancel.event&&(e.isInput?e._cancel.event(e.promptValue):e._cancel.event())}}},this._cancel&&this._cancel.text),r=t("ink-btn",{attrs:{size:"large"},style:this._submit&&u(this._submit.style)?Object.assign({},a,this._submit.style):a,nativeOn:{click:function(){e.close(),e._submit&&e._submit.event&&(e.isInput?e._submit.event(e.promptValue):e._submit.event())}}},this._submit&&this._submit.text),l=[],c=t("div",{staticClass:"ink-dialog-title"},this.title);this.isCancel&&l.push(s),this.isSubmit&&l.push(r);var d=this.isInput?n:i;return t(g,{},[t("div",{staticClass:"ink-dialog",directives:[{name:"show",value:this.isShow}],on:{click:function(){e.clickMaskClose&&(e.isShow=!1)}}},[t("div",{staticClass:"ink-dialog-content"},[c,d,t("div",{staticClass:"ink-dialog-btn"},l)])])])}},v=e.extend(y);function C(t){var e=new v({el:document.createElement("div")});e.config(t),e.show()}v.prototype.config=function(t){t.cancel&&(this._cancel=t.cancel),t.submit&&(this._submit=t.submit),t.clickMaskClose&&(this.clickMaskClose=t.clickMaskClose),this.isInput=t.isInput,this.isCancel=t.isCancel,this.title=t.title,this.children=t.children},v.prototype.close=function(){this.isShow=!1},v.prototype.show=function(){this.isShow=!0},C.alert=function(t){return u(t)||(t={}),t.isCancel=!1,t.isInput=!1,C(t)},C.confirm=function(t){return u(t)||(t={}),t.isCancel=!0,t.isInput=!1,C(t)},C.prompt=function(t){return u(t)||(t={}),t.isCancel=!0,t.isInput=!0,C(t)};n(".ink-popup{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1010}.ink-popup .ink-popup-content{position:absolute;left:0;right:0;z-index:1011;background:#fff}");var S={name:"ink-popup",mixins:[x],data:function(){return{children:null,top:!1,left:!1,right:!1,bottom:!1,width:"100%",height:"100%",clickMaskClose:!1}},render:function(t){var e=this;return t(g,{},[t("div",{staticClass:"ink-popup",directives:[{name:"show",value:this.isShow}],on:{click:function(t){e.clickMaskClose&&(e.isShow=!1)}}},[t("div",{staticClass:"ink-popup-content",style:{width:this.width,height:this.height,bottom:this.bottom?0:"auto",top:this.top?0:"auto"},on:{click:function(t){t.preventDefault(),t.stopPropagation()}}},["function"==typeof this.children?this.children(t):this.children])])])}},j=e.extend(S);function B(t){var e=new j({el:document.createElement("div")});e.config(t),e.show()}j.prototype.config=function(t){var e=this;Object.keys(t).forEach(function(i){e[i]=t[i]})},j.prototype.close=function(){this.isShow=!1},j.prototype.show=function(){this.isShow=!0},B.render=function(t){return u(t)||(t={bottom:!0}),B(t)};n(".ink-action-sheet{position:absolute;top:0;width:100%;height:100%;z-index:1020}.ink-action-sheet .action-sheet-content{position:absolute;bottom:0;left:0;width:100%;background:#fff;z-index:1021;list-style:none;margin:0;padding:0}.ink-action-sheet .action-sheet-content .action-sheet-item{padding:12px 0;text-align:center;font-size:18px;border-top:1px solid #f0f1f2}.ink-action-sheet .action-sheet-content .action-sheet-item:active{background:#f7f8f9}.ink-action-sheet .action-sheet-content .action-sheet-cancel{padding:12px 0;border-top:5px solid #f0f1f2;font-size:18px;text-align:center}");var z={name:"ink-action-sheet",mixins:[x],render:function(t){var e=this;return t("div",{staticClass:"ink-action-sheet",on:{click:function(){e.isShow=!1}}},[t(w,{},[t("ul",{staticClass:"action-sheet-content",directives:[{name:"show",value:this.isShow}],on:{click:function(t){t.stopPropagation()}}},[this.actionList&&this.actionList.map(function(i,n){return t("li",{staticClass:"action-sheet-item",style:u(i.style)&&i.style,on:{click:function(){e.onSelect&&e.onSelect(i,n)}}},i.text)})].concat([this.cancelBtn&&t("div",{staticClass:"action-sheet-cancel",style:u(this.cancelBtn.style)&&this.cancelBtn.style,on:{click:function(){e.onCancel&&e.onCancel(),e.isShow=!1}}},this.cancelBtn.text)]))])])}},_=e.extend(z);function E(t){var e=new _({el:document.createElement("div")});e.config(t),e.show()}_.prototype.config=function(t){this.cancelBtn=t.cancelBtn,this.actionList=t.list,this.onSelect=t.onSelect,this.onCancel=t.onCancel},_.prototype.close=function(){this.isShow=!1},_.prototype.show=function(){this.isShow=!0},E.render=function(t){return u(t)||(t={}),E(t)};n(".ink-toast{position:absolute;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);max-width:60%;line-height:20px;padding:6px 10px;text-align:center;background:rgba(0,0,0,.8);word-break:break-word;border-radius:5px;color:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:16px;z-index:2021}.ink-toast.top-active{opacity:1;-webkit-transform:translate3d(-50%,100%,0);transform:translate3d(-50%,100%,0)}.ink-toast.middle-active{opacity:1}.ink-toast.bottom-active{opacity:1;-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0)}.ink-toast.remove{opacity:0}.ink-toast.top-position{top:10%;-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0)}.ink-toast.middle-position{top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.ink-toast.bottom-position{bottom:10%;-webkit-transform:translate3d(-50%,100%,0);transform:translate3d(-50%,100%,0)}");var A=e.extend({name:"ink-toast",data:function(){return{position:null,isActive:!1}},computed:{animClass:function(){return this.isActive?"".concat(this.position,"-active"):"remove"}},render:function(t){return t("div",{class:["ink-toast","".concat(this.position,"-position"),this.animClass]},[this.message])}});function $(t){var e=new A({el:document.createElement("div")});e.config(t),document.body.appendChild(e.$el);var i=setTimeout(function(){e.show(),clearTimeout(i)},0),n=setTimeout(function(){e.close(),clearTimeout(n)},e.duration)}A.prototype.config=function(t){u(t)?(this.message=t.message,this.duration=t.duration||1e3,this.position=t.position||"bottom"):(this.message=t,this.duration=1e3,this.position="bottom")},A.prototype.removeToast=function(t){t.target.parentNode.removeChild(t.target)},A.prototype.close=function(){this.isActive=!1,this.$el.addEventListener("transitionend",this.removeToast,{capture:!1,once:!0})},A.prototype.show=function(){this.isActive=!0};var I=i,T=[o,r,l,c,d,p],P=function(t){t.$dialog=t.prototype.$dialog=C,t.$popup=t.prototype.$popup=B,t.$actionSheet=t.prototype.$actionSheet=E,t.$toast=t.prototype.$toast=$,T.forEach(function(e,i){t.component(e.name,e)})};window&&void 0!==window.Vue&&P(window.Vue);var N={version:I,install:P};t.ActionSheet=E,t.Button=o,t.Dialog=C,t.Flex=r,t.Loading=d,t.Popup=B,t.Progress=p,t.Radio=c,t.Switch=l,t.Toast=$,t.default=N,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ink.umd.js.map
