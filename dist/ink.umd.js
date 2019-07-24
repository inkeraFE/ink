!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],e):e((t=t||self).inkUi={},t.Vue)}(this,function(t,e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var i="0.2.1";function n(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===i&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}n(".ink-btn{border:none;outline:none;display:inline-block;padding:10px 15px;border-radius:6px;font-size:18px}.ink-btn:active{background:#f7f8f9}.is-disabled{opacity:.4}.btn-large{display:block;width:100%}.btn-primary{background:#fff;color:#108ee9;border:1px solid #108ee9}.btn-danger{background:#fff;color:#dd2622;border:1px solid #dd2622}.btn-warning{background:#fff;color:#f90;border:1px solid #f90}.btn-default{background:#fff;color:#333}.btn-active{background:#f7f8f9}");var o={name:"ink-btn",computed:{typeClass:function(){return"primary"===this.type?"btn-primary":"danger"===this.type?"btn-danger":"warning"===this.type?"btn-warning":"btn-default"},sizeClass:function(){if("large"===this.size)return"btn-large"}},props:{type:{type:String,default:"default"},size:{type:String,default:"small"},disabled:{type:Boolean,default:!1}},render:function(t){var e=this;return t("button",{attrs:{name:"button",type:"button"},class:["ink-btn",this.typeClass,this.sizeClass,this.disabled?"is-disabled":""],disabled:this.disabled,on:{click:function(t){e.$emit("click",t)}}},this.$slots.default)}};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(".flex-flex{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flex-auto{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}.flex-none{-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box}.flex.flex-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.flex.flex-nowrap{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.flex.flex-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.flex.flex-justify-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.flex.flex-justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.flex.flex-justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.flex.flex-justify-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.flex.flex-justify-around{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.flex.flex-align-start{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.flex.flex-align-end{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.flex.flex-align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex.flex-align-baseline{-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline}.flex.flex-align-stretch{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}");var r={name:"ink-flex",props:{flex:{type:Number},auto:{type:Boolean,default:!1},none:{type:Boolean,default:!1},width:{type:String},height:{type:String},row:{type:Boolean,default:!1},column:{type:Boolean,default:!1},wrap:{type:Boolean,default:!1},nowrap:{type:Boolean,default:!1},justifyStart:{type:Boolean,default:!1},justifyEnd:{type:Boolean,default:!1},justifyCenter:{type:Boolean,default:!1},justifyBetween:{type:Boolean,default:!1},justifyAround:{type:Boolean,default:!1},alignStart:{type:Boolean,default:!1},alignEnd:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},alignBaseline:{type:Boolean,default:!1},alignStretch:{type:Boolean,default:!1}},computed:{getClassArray:function(){var t={"flex-flex":this.flex,"flex-auto":this.auto,"flex-none":this.none||this.width||this.height,"flex-row":this.row,"flex-column":this.column,"flex-wrap":this.wrap,"flex-nowrap":this.nowrap,"flex-justify-start":this.justifyStart,"flex-justify-end":this.justifyEnd,"flex-justify-center":this.justifyCenter,"flex-justify-between":this.justifyBetween,"flex-justify-around":this.justifyAround,"flex-align-start":this.alignStart,"flex-align-end":this.alignEnd,"flex-align-center":this.alignCenter,"flex-align-baseline":this.alignBaseline,"flex-align-stretch":this.alignStretch},e=[];return Object.keys(t).forEach(function(i){t[i]&&e.push(i)}),e},getStyle:function(){var t={};return this.flex&&(t.flex="boolean"==typeof this.flex?1:this.flex,t.WebkitFlex="boolean"==typeof this.flex?1:this.flex),this.height&&(t.height=this.height),this.width&&(t.width=this.width),t}},render:function(t){return t("div",{class:["flex"].concat(s(this.getClassArray)),style:this.getStyle},this.$slots.default)}};n('.ink-switch{display:inline-block;height:32px}.ink-switch *{pointer-events:none}.ink-switch .switch-input{display:none}.ink-switch .switch-label{position:relative;display:inline-block;width:50px;height:32px;border-radius:15px;background:#ddd}.ink-switch .switch-label:after,.ink-switch .switch-label:before{content:" ";position:absolute;border-radius:13px;-webkit-transition:all .25s;transition:all .25s}.ink-switch .switch-label:before{top:1px;left:1px;width:48px;height:30px;background:#fefefe}.ink-switch .switch-label:after{top:.5px;left:1px;width:30px;height:30px;border-radius:100%;background:#fff;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.3);box-shadow:0 0 2px 0 rgba(0,0,0,.3)}.ink-switch .switch-input[type=checkbox]:checked+.switch-label:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.ink-switch .switch-input[type=checkbox]:checked+.switch-label:after{-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}');var l={name:"ink-switch",computed:{inner_value:{get:function(){return this.value},set:function(t){this.$emit("input",t),this.$emit("change",t)}},mainColor:function(){if(this.inner_value)return this.color}},props:{value:{type:Boolean,default:!1},color:{type:String,default:"#108ee9"}},render:function(t){var e=this;return t("label",{staticClass:"ink-switch"},[t("input",{staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{checked:this.inner_value},on:{change:function(t){e.inner_value=t.target.checked}}}),t("label",{staticClass:"switch-label",style:{background:this.mainColor}})])}};n('.ink-radio{display:inline-block;width:20px;height:20px;border-radius:100%}.ink-radio *{pointer-events:none}.ink-radio .radio-input{display:none}.ink-radio .radio-label{position:relative;display:inline-block;width:20px;height:20px;border-radius:100%;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff}.ink-radio .radio-input[type=radio]:disabled+.radio-label{border:1px solid #ccc}.ink-radio .radio-input[type=radio]:disabled+.radio-label:before{content:" ";position:absolute;left:50%;top:0;-webkit-transform:translate3d(-50%,0,0) rotate(-45deg);transform:translate3d(-50%,0,0) rotate(-45deg);width:1px;height:100%;background:#ccc}.ink-radio .radio-input[type=radio]:checked+.radio-label{border:none;background:#108ee9}.ink-radio .radio-input[type=radio]:checked+.radio-label:before{content:" ";position:absolute;top:4px;left:4px;width:13px;height:8px;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid #fff;border-top:none;border-right:none;-webkit-transform:rotate(-46deg);-ms-transform:rotate(-46deg);transform:rotate(-46deg)}');var c={name:"ink-radio",props:{name:{type:String},val:{type:String},value:{type:String},disabled:{type:Boolean,default:!1},color:{type:String,default:"#108ee9"}},computed:{bgColor:function(){return this.value===this.val?this.color:"white"}},render:function(t){var e=this;return t("label",{staticClass:"ink-radio"},[t("input",{attrs:{type:"radio",name:this.name,value:this.val},domProps:{checked:this.value===this.val,disabled:this.disabled},staticClass:"radio-input",on:{change:function(t){e.checked=t.target.value===e.val,e.$emit("input",t.target.value)}}}),t("label",{staticClass:"radio-label",style:{background:this.bgColor}})])}};n(".ink-loading{position:relative;border-radius:100%;border:2px solid #ddd}.ink-loading,.ink-loading .loading-item{-webkit-box-sizing:border-box;box-sizing:border-box;width:23px;height:23px}.ink-loading .loading-item{position:absolute;top:-2px;left:-2px;border:3px solid rgba(0,0,0,0);border-bottom-color:#108ee9;border-radius:100%;-webkit-animation:rotateAnim 1s linear infinite;animation:rotateAnim 1s linear infinite}@-webkit-keyframes rotateAnim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateAnim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}");var p={name:"ink-loading",props:{color:{type:String,default:"#108ee9"}},computed:{bgColor:function(){return"white"},borderColor:function(){return this.color}},render:function(t){return t("div",{staticClass:"ink-loading",style:{background:this.bgColor}},[t("div",{staticClass:"loading-item",style:{"border-bottom-color":this.borderColor,"border-top-color":this.borderColor}})])}};n(".ink-progress{position:relative;height:20px;line-height:20px}.ink-progress .progress-default-line{width:100%;border-top:1px solid #ccc}.ink-progress .progress-active-line,.ink-progress .progress-default-line{position:absolute;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.ink-progress .progress-active-line{left:0;width:50%;height:2px;background:#108ee9;-webkit-transition:width .15s linear;transition:width .15s linear}");var d={name:"ink-progress",props:{value:{type:Number},color:{type:String},lineHeight:{type:String,defualt:"2px"}},computed:{animWidth:function(){return this.value<0?0:this.value%100}},render:function(t){return t("div",{staticClass:"ink-progress"},[t("div",{staticClass:"progress-default-line",style:{"border-width":this.lineHeight}}),t("div",{staticClass:"progress-active-line",style:{width:"".concat(this.animWidth,"%"),background:this.color,height:this.lineHeight}})])}};function f(){return window._popupHash}function u(t){return null!==t&&"object"===a(t)}n('.ink-dialog{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1010;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.ink-dialog .ink-dialog-content{padding:15px 0 0;max-width:375px;width:75%;background:#fff;border-radius:5px}.ink-dialog .ink-dialog-content .ink-dialog-title{text-align:center;font-size:20px}.ink-dialog .ink-dialog-content .ink-dialog-input{display:block;width:80%;margin:15px auto;padding:5px 10px;font-size:17px;line-height:25px;color:#666;text-align:left;outline:none;border:1px solid #999;border-radius:3px}.ink-dialog .ink-dialog-content .ink-dialog-btn{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid #f0f1f2}.ink-dialog .ink-dialog-content .ink-dialog-btn button:nth-of-type(2):after{content:" ";position:absolute;top:0;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);height:100%;width:1px;background:#f0f1f2}');var h={lockScroll:function(){document.body.style.overflow="hidden"},openScroll:function(){document.body.removeAttribute("style")},createPopup:function(t){var e=this;window.addEventListener("popstate",function t(i){e.removePopup(),window.removeEventListener("popstate",t)}),window.history.pushState({type:"_popup"},null),window._popupHash=Date.now();var i=document.createElementNS("ink-popup-wrapper".concat(f()),"div");i.appendChild(t),document.body.appendChild(i)},removePopup:function(){var t=document.getElementsByTagNameNS("ink-popup-wrapper".concat(f()),"div")[0];t&&(t.parentNode.removeChild(t),window.history.go(-1))}};n(".ink-mask{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1000;background:#000;opacity:0;-webkit-transition:opacity .15s;transition:opacity .15s}.ink-mask.mask-anim{opacity:.3}");var b=e.extend({name:"ink-mask",data:function(){return{isShow:!1}},computed:{animClass:function(){if(this.isShow)return"mask-anim"}},render:function(t){return t("div",{class:["ink-mask",this.animClass]})}});b.prototype.show=function(){this.isShow=!0},b.prototype.close=function(){this.isShow=!1,this.$el.addEventListener("transitionend",function(){h.removePopup()},{capture:!1,once:!0})};var k={show:function(t){var e=this;(function(){this.maskInstance=new b({el:document.createElement("div")})}).call(this),document.getElementsByTagNameNS("ink-popup-wrapper".concat(f()),"div")[0].appendChild(this.maskInstance.$el),setTimeout(function(){e.maskInstance.show()},0)},close:function(){this.maskInstance.close()}},m={name:"ink-popup",data:function(){return{isShow:!1}},props:{value:{type:Boolean,default:!1}},watch:{isShow:function(t){t?(h.createPopup(this.$el),h.lockScroll(),k.show()):(k.close(),h.openScroll())}}};function x(t){return{name:t,functional:!0,render:function(e,i){return i.data.props={name:t},e("transition",i.data,i.children)}}}n(".fade-enter-active,.fade-leave-active{-webkit-transition:opacity .15s;transition:opacity .15s}.fade-enter,.fade-leave-to{opacity:0}.slide-top-enter-active,.slide-top-leave-active{-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}.slide-top-enter,.slide-top-leave-to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}");var w=x("fade"),g=x("slide-top"),v={name:"ink-dialog",mixins:[m],data:function(){return{isInput:!1,isCancel:!1,isSubmit:!0,title:null,children:null,options:null,clickMaskClose:!1,promptValue:null}},components:{inkBtn:o},render:function(t){var e=this,i=t("div",{},"function"==typeof this.children?[this.children(t)]:this.children),n=t("input",{staticClass:"ink-dialog-input",attrs:{placeholder:"string"==typeof this.children?this.children:" "},on:{input:function(t){e.promptValue=t.target.value}}}),o={"line-height":"28px"},a={"line-height":"28px",color:"#108ee9"},s=t("ink-btn",{attrs:{size:"large"},style:this._cancel&&u(this._cancel.style)?Object.assign({},o,this._cancel.style):o,nativeOn:{click:function(){e.close(),e._cancel&&e._cancel.event&&(e.isInput?e._cancel.event(e.promptValue):e._cancel.event())}}},this._cancel&&this._cancel.text),r=t("ink-btn",{attrs:{size:"large"},style:this._submit&&u(this._submit.style)?Object.assign({},a,this._submit.style):a,nativeOn:{click:function(){e.close(),e._submit&&e._submit.event&&(e.isInput?e._submit.event(e.promptValue):e._submit.event())}}},this._submit&&this._submit.text),l=[],c=t("div",{staticClass:"ink-dialog-title"},this.title);this.isCancel&&l.push(s),this.isSubmit&&l.push(r);var p=this.isInput?n:i;return t(w,{},[t("div",{staticClass:"ink-dialog",directives:[{name:"show",value:this.isShow}],on:{click:function(){e.clickMaskClose&&(e.isShow=!1)}}},[t("div",{staticClass:"ink-dialog-content"},[c,p,t("div",{staticClass:"ink-dialog-btn"},l)])])])}},y=e.extend(v);function C(t){var e=new y({el:document.createElement("div")});e.config(t),e.show()}y.prototype.config=function(t){t.cancel&&(this._cancel=t.cancel),t.submit&&(this._submit=t.submit),t.clickMaskClose&&(this.clickMaskClose=t.clickMaskClose),this.isInput=t.isInput,this.isCancel=t.isCancel,this.title=t.title,this.children=t.children},y.prototype.close=function(){this.isShow=!1},y.prototype.show=function(){this.isShow=!0},C.alert=function(t){return u(t)||(t={}),t.isCancel=!1,t.isInput=!1,C(t)},C.confirm=function(t){return u(t)||(t={}),t.isCancel=!0,t.isInput=!1,C(t)},C.prompt=function(t){return u(t)||(t={}),t.isCancel=!0,t.isInput=!0,C(t)};n(".ink-popup{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1010}.ink-popup .ink-popup-content{position:absolute;left:0;right:0;z-index:1011;background:#fff}");var S={name:"ink-popup",mixins:[m],data:function(){return{children:null,top:!1,left:!1,right:!1,bottom:!1,width:"100%",height:"100%",clickMaskClose:!1}},render:function(t){var e=this;return t(w,{},[t("div",{staticClass:"ink-popup",directives:[{name:"show",value:this.isShow}],on:{click:function(t){e.clickMaskClose&&(e.isShow=!1)}}},[t("div",{staticClass:"ink-popup-content",style:{width:this.width,height:this.height,bottom:this.bottom?0:"auto",top:this.top?0:"auto"},on:{click:function(t){t.preventDefault(),t.stopPropagation()}}},["function"==typeof this.children?this.children(t):this.children])])])}},j=e.extend(S);function M(t){var e=new j({el:document.createElement("div")});e.config(t),e.show()}j.prototype.config=function(t){var e=this;Object.keys(t).forEach(function(i){e[i]=t[i]})},j.prototype.close=function(){this.isShow=!1},j.prototype.show=function(){this.isShow=!0},M.render=function(t){return u(t)||(t={bottom:!0}),M(t)};n(".ink-action-sheet{position:absolute;top:0;width:100%;height:100%;z-index:1020}.ink-action-sheet .action-sheet-content{position:absolute;bottom:0;left:0;width:100%;background:#fff;z-index:1021;list-style:none;margin:0;padding:0}.ink-action-sheet .action-sheet-content .action-sheet-item{padding:12px 0;text-align:center;font-size:18px;border-top:1px solid #f0f1f2}.ink-action-sheet .action-sheet-content .action-sheet-item:active{background:#f7f8f9}.ink-action-sheet .action-sheet-content .action-sheet-cancel{padding:12px 0;border-top:5px solid #f0f1f2;font-size:18px;text-align:center}");var B={name:"ink-action-sheet",mixins:[m],render:function(t){var e=this;return t("div",{staticClass:"ink-action-sheet",on:{click:function(){e.isShow=!1}}},[t(g,{},[t("ul",{staticClass:"action-sheet-content",directives:[{name:"show",value:this.isShow}],on:{click:function(t){t.stopPropagation()}}},[this.actionList&&this.actionList.map(function(i,n){return t("li",{staticClass:"action-sheet-item",style:u(i.style)&&i.style,on:{click:function(){e.onSelect&&e.onSelect(i,n)}}},i.text)})].concat([this.cancelBtn&&t("div",{staticClass:"action-sheet-cancel",style:u(this.cancelBtn.style)&&this.cancelBtn.style,on:{click:function(){e.onCancel&&e.onCancel(),e.isShow=!1}}},this.cancelBtn.text)]))])])}},$=e.extend(B);function z(t){var e=new $({el:document.createElement("div")});e.config(t),e.show()}$.prototype.config=function(t){this.cancelBtn=t.cancelBtn,this.actionList=t.list,this.onSelect=t.onSelect,this.onCancel=t.onCancel},$.prototype.close=function(){this.isShow=!1},$.prototype.show=function(){this.isShow=!0},z.render=function(t){return u(t)||(t={}),z(t)};n(".ink-toast{position:absolute;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);max-width:60%;line-height:20px;padding:6px 10px;text-align:center;background:rgba(0,0,0,.8);word-break:break-word;border-radius:5px;color:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:16px;z-index:2021}.ink-toast.top-active{opacity:1;-webkit-transform:translate3d(-50%,100%,0);transform:translate3d(-50%,100%,0)}.ink-toast.middle-active{opacity:1}.ink-toast.bottom-active{opacity:1;-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0)}.ink-toast.remove{opacity:0}.ink-toast.top-position{top:10%;-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0)}.ink-toast.middle-position{top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.ink-toast.bottom-position{bottom:10%;-webkit-transform:translate3d(-50%,100%,0);transform:translate3d(-50%,100%,0)}");var T=e.extend({name:"ink-toast",data:function(){return{position:null,isActive:!1}},computed:{animClass:function(){return this.isActive?"".concat(this.position,"-active"):"remove"}},render:function(t){return t("div",{class:["ink-toast","".concat(this.position,"-position"),this.animClass]},[this.message])}});function A(t){var e=new T({el:document.createElement("div")});e.config(t),document.body.appendChild(e.$el);var i=setTimeout(function(){e.show(),clearTimeout(i)},0),n=setTimeout(function(){e.close(),clearTimeout(n)},e.duration)}T.prototype.config=function(t){u(t)?(this.message=t.message,this.duration=t.duration||1e3,this.position=t.position||"bottom"):(this.message=t,this.duration=1e3,this.position="bottom")},T.prototype.removeToast=function(t){t.target.parentNode.removeChild(t.target)},T.prototype.close=function(){this.isActive=!1,this.$el.addEventListener("transitionend",this.removeToast,{capture:!1,once:!0})},T.prototype.show=function(){this.isActive=!0};var _={name:"ink-picker",mixins:[m],data:function(){return{pickerArr:[],selectArr:[]}},components:{inkBtn:o,pickerColumn:{name:"ink-picker-column",data:function(){var t=this,e=0;return this.selected&&this.colList.forEach(function(i,n){i.id===t.selected.id&&(e=n)}),{preMoveY:0,startY:0,moveY:0,transform:"translate3d(0, ".concat(40*-e,"px, 0)"),"transition-duration":"0ms"}},props:{colList:{type:Array},selected:{type:Object,default:null}},render:function(t){var e=this;return t("div",{staticClass:"picker-col"},[t("ul",{staticClass:"picker-bar",style:{transform:this.transform,"transition-duration":this["transition-duration"]},on:{touchstart:function(t){e.startY=t.targetTouches[0].pageY},touchmove:function(t){t.preventDefault(),e.moveY=t.changedTouches[0].pageY-e.startY,e.transform="translate3d(0, ".concat((e.moveY+e.preMoveY).toFixed(0),"px, 0)")},touchend:function(t){var i=t.currentTarget,n=Math.abs(e.moveY)>20?(e.moveY>0?e.moveY+(40-e.moveY%40):e.moveY-(40+e.moveY%40))+e.preMoveY:e.preMoveY,o=i.offsetHeight-200;n<-1*o&&(n=-1*o),n>0&&(n=0),e["transition-duration"]="300ms",e.transform="translate3d(0, ".concat(n,"px, 0)"),e.preMoveY=n,e.$emit("selValue",e.colList[Math.abs(n)/40]),i.addEventListener("transitionend",function(){e["transition-duration"]="0ms"},{capture:!1,once:!0})}}},this.colList&&this.colList.map(function(e,i){return t("div",{staticClass:"picker-item"},e.text)}))])}}},methods:{handleData:function(t,e){var i=this,n=this.$createElement("picker-column",{attrs:{colList:e,selected:this.selected[t]||null},on:{selValue:function(e){i.selectArr[t]=e,e.childrens?(i.pickerArr.splice(t+1),i.handleData(t+1,e.childrens)):i.selectArr.splice(t+1)}}}),o=e[0];e.forEach(function(e){i.selected[t].id===e.id&&(o=e)}),this.selectArr[t]=o,this.pickerArr.push(n),e[0]&&e[0].childrens&&this.handleData(t+1,e[0].childrens)}},mounted:function(){var t=this;setTimeout(function(){t.handleData(0,t.pickerList||[])},0)},render:function(t){var e=this;return t("div",{staticClass:"ink-picker",on:{click:function(){e.isShow=!1}}},[t(g,{},[t("div",{staticClass:"picker-wrapper",directives:[{name:"show",value:this.isShow}],on:{click:function(t){t.stopPropagation()}}},[t("div",{staticClass:"picker-header"},[t("ink-btn",{style:{"max-height":"39px","font-size":"16px"},on:{click:function(){e.isShow=!1,e.cancel&&e.cancel.event&&e.cancel.event()}}},this.cancel&&this.cancel.text||""),t("ink-btn",{style:{"max-height":"39px","font-size":"16px",color:"#108ee9"},on:{click:function(){e.isShow=!1,e.submit&&e.submit.event&&e.submit.event(e.selectArr)}}},this.submit&&this.submit.text||"")]),t("div",{staticClass:"picker-content"},[t("div",{staticClass:"picker-col-content"},this.pickerArr),t("div",{staticClass:"picker-indicator"}),t("div",{staticClass:"picker-mask"})])])])])}};n(".ink-picker{position:absolute;top:0;left:0;z-index:1020;width:100%;height:100%}.ink-picker .picker-wrapper{position:absolute;bottom:0;left:0;width:100%;background:#fff}.ink-picker .picker-wrapper .picker-header{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 24px;border-bottom:1px solid #f0f1f2;-webkit-box-sizing:border-box;box-sizing:border-box}.ink-picker .picker-wrapper .picker-content{position:relative;z-index:3;font-size:16px}.ink-picker .picker-wrapper .picker-content .picker-col-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;height:200px}.ink-picker .picker-wrapper .picker-content .picker-col-content .picker-col{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;position:relative}.ink-picker .picker-wrapper .picker-content .picker-col-content .picker-col .picker-bar{position:absolute;top:0;left:0;width:100%;-webkit-transition:-webkit-transform 0;transition:-webkit-transform 0;transition:transform 0;transition:transform 0,-webkit-transform 0;padding:80px 0;z-index:1;list-style:none;margin:0}.ink-picker .picker-wrapper .picker-content .picker-col-content .picker-col .picker-bar .picker-item{height:40px;line-height:40px;text-align:center}.ink-picker .picker-wrapper .picker-content .picker-indicator{pointer-events:none;position:absolute;top:80px;width:100%;height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #f0f1f2;border-right:none;border-left:none}.ink-picker .picker-wrapper .picker-content .picker-mask{pointer-events:none;position:absolute;top:0;left:0;z-index:2;width:100%;height:100%;background-image:-webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,.15)),to(#fff)),-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.15)),to(#fff));background-image:linear-gradient(0deg,hsla(0,0%,100%,.15),#fff),linear-gradient(180deg,hsla(0,0%,100%,.15),#fff);background-position:top,bottom;background-repeat:no-repeat;background-size:100% 80px}");var E=e.extend(_);function L(t){var e=new E({el:document.createElement("div")});e.config(t),e.show()}E.prototype.config=function(t){this.pickerList=t.data,this.selected=t.selected,this.submit={event:t.onSubmit,text:t.submitText||"确定"},this.cancel={event:t.onCancel,text:t.cancelText||"取消"}},E.prototype.close=function(){this.isShow=!1},E.prototype.show=function(){this.isShow=!0},L.render=function(t){return L(t)};n(".ink-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:50px;background:#fff}");var X={name:"ink-header",render:function(t){var e=t("div");return t("header",{staticClass:"ink-header"},[this.$slots.left||e,this.$slots.center||e,this.$slots.right||e])}};n(".ink-page{width:100vw;height:100vh;background:#fafbfc;overflow:hidden}.ink-page .page-content{position:relative;overflow-x:hidden;overflow-y:auto}.ink-page .block{display:block}.ink-page .page-tabbar{height:50px}");var Y={name:"ink-page",components:{inkFlex:r},render:function(t){return t("ink-flex",{staticClass:"ink-page",attrs:{column:!0}},[this.$slots.header&&t("ink-flex",{staticClass:"page-header",attrs:{column:!0,none:!0}},this.$slots.header),t("ink-flex",{staticClass:"page-content block",attrs:{flex:1}},this.$slots.content),this.$slots.bottom&&t("ink-flex",{staticClass:"page-tabbar",attrs:{column:!0,none:!0}},this.$slots.bottom)].filter(function(t){return t}))}};n(".ink-carousel{position:relative;overflow:hidden}.ink-carousel .carousel-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;list-style:none;margin:0;padding:0}.ink-carousel .carousel-wrapper .carousel-item{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.ink-carousel .pagination-point-wrapper{position:absolute;bottom:15px;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);list-style:none;margin:0;padding:0}.ink-carousel .pagination-point-wrapper .point{display:inline-block;width:8px;height:8px;border-radius:100%;margin:0 4px;background:#000;opacity:.6}.ink-carousel .pagination-point-wrapper .point.is-active{background:#f0f1f2}");var I={name:"ink-carousel",data:function(){return{preMoveX:0,tempMoveX:0,touchStartX:0,touchStartY:0,activeIdx:0,timer:null,canMove:!0,carouselStyle:{"transition-duration":"0ms",transform:"translate3d(0, 0, 0)"}}},props:{isTabs:{type:Boolean,default:!1},value:{type:Number,default:0},isLock:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},pagination:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},time:{type:Number,default:2e3}},watch:{value:function(t){this.isTabs&&this.changeIndex()},activeIdx:function(t){this.$emit("input",t)}},mounted:function(){this.changeIndex(!0),this.startAnim()},methods:{changeIndex:function(t){var e=this.$el.children.item(0);this.preMoveX=-1*e.offsetWidth*this.value,this.carouselStyle={"transition-duration":t?"0ms":"300ms",transform:"translate3d(".concat(this.preMoveX,"px, 0, 0)")}},update:function(t,e){this.activeIdx=Math.abs(t)/e,this.loop&&this.activeIdx>=this._carouseLength-1&&(this.activeIdx=0),this.carouselStyle={"transition-duration":"300ms",transform:"translate3d(".concat(t,"px, 0, 0)")},this.listenAnimEnd(t)},animation:function(){var t=this,e=this.$el.children.item(0).offsetWidth;this.timer=setTimeout(function(){var i,n,o=t.preMoveX-e;t.loop?(t.handleLoop(o),i=t.preMoveX-e):Math.abs(o)>e*(t._carouseLength-1)?(t.preMoveX=0,i=0):i=t.preMoveX-e,t.loop?n=setTimeout(function(){t.update(i,e),clearTimeout(n)},16):t.update(i,e)},this.time)},startAnim:function(){this.timer&&clearTimeout(this.timer),this.auto&&this.animation()},handleLoop:function(t){var e=this.$el.children.item(0).offsetWidth;Math.abs(t)>e*(this._carouseLength-1)?(this.preMoveX=0,this.carouselStyle.transform="translate3d(0, 0, 0)"):t>0&&(this.preMoveX=-1*e*(this._carouseLength-1))},listenAnimEnd:function(t){var e=this;document.addEventListener("transitionend",function(){e.preMoveX=t,e.tempMoveX=0,e.carouselStyle["transition-duration"]="0ms",e.startAnim()},{capture:!1,once:!0})},onTouchStart:function(t){this.timer&&clearTimeout(this.timer),!this.isLock&&this.canMove&&(this.touchStartX=t.targetTouches[0].pageX,this.touchStartY=t.targetTouches[0].pageY)},onTouchMove:function(t){if(!this.isLock){var e=t.currentTarget,i=t.changedTouches[0].pageX,n=e.offsetWidth;this.tempMoveX=i-this.touchStartX;var o=t.changedTouches[0].pageY-this.touchStartY,a=Math.abs(this.tempMoveX);if(a<5||a>=5&&o>=1.73*a?this.canMove=!1:t.cancelable&&(this.canMove=!0,t.preventDefault()),this.canMove){var s=this.tempMoveX+this.preMoveX;this.loop||!(s>0||Math.abs(s)>n*(this._carouseLength-1))?(this.loop&&this.handleLoop(s),this.carouselStyle.transform="translate3d(".concat(s,"px, 0, 0)")):this.tempMoveX=0}}},onTouchEnd:function(t){if(!this.isLock&&this.canMove){var e=t.currentTarget.offsetWidth,i=Math.abs(this.tempMoveX)>e/2?this.tempMoveX>0?this.preMoveX+e:this.preMoveX-e:this.preMoveX;this.update(i,e)}}},render:function(t){var e,i=this,n=[],o=this.$slots.default&&this.$slots.default.map(function(e,i){if(void 0!==e.tag)return t("li",{staticClass:"carousel-item"},[e])}).filter(function(t,e){if(void 0!==t)return t});if(o){for(var a=0;a<o.length;a++)n.push(t("li",{class:["point",{"is-active":this.activeIdx===a}]}));e=this.pagination?t("ul",{staticClass:"pagination-point-wrapper"},n):void 0,this.loop&&o.push(o[0])}return this._carouseLength=o.length,t("div",{staticClass:"ink-carousel"},[t("ul",{staticClass:"carousel-wrapper",style:this.carouselStyle,on:{touchstart:function(t){return i.onTouchStart(t)},touchmove:function(t){return i.onTouchMove(t)},touchend:function(t){return i.onTouchEnd(t)}}},o),e])}},P={name:"ink-tabs",props:{value:{type:Number},isGesture:{type:Boolean,default:!0},text:{type:String}},components:{inkCarousel:I},render:function(t){var e=this;return t("div",{staticClass:"ink-tabs"},[this.$slots.navbar,t("ink-carousel",{attrs:{isTabs:!0,value:this.value,isLock:!this.isGesture},on:{input:function(t){e.$emit("input",t)}}},this.$slots.default)])}};n(".ink-drawer{overflow:hidden}.ink-drawer .drawer-wrapper{position:relative;width:100%;height:100%}.ink-drawer .drawer-wrapper .drawer-popup-wrapper{background:#fff;position:absolute;top:0;-webkit-transition:-webkit-transform .3s ease 0s;transition:-webkit-transform .3s ease 0s;transition:transform .3s ease 0s;transition:transform .3s ease 0s,-webkit-transform .3s ease 0s;z-index:999}.ink-drawer .drawer-wrapper .drawer-content{width:100%;height:100%}.ink-drawer .drawer-wrapper .drawer-mask{position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.35)}");var N={name:"ink-drawer",data:function(){return{showMask:!1,transform:"translate3d(0, 0, 0)"}},components:{inkFlex:r},props:{value:{type:Boolean,default:!1},dWidth:{type:String,default:"250px"},dHeight:{type:String,default:"100vh"}},watch:{value:function(t){this.showMask=t,this.transform=t?"translate3d(".concat(this.dWidth,", 0, 0)"):"translate3d(0, 0, 0)"}},render:function(t){var e=this,i=t(w,{},[t("div",{staticClass:"drawer-mask",directives:[{name:"show",value:this.showMask}],on:{click:function(){e.showMask=!1,e.transform="translate3d(0, 0, 0)",e.$emit("input",!1)}}})]);return t("div",{class:"ink-drawer",style:{height:this.dHeight}},[t("div",{staticClass:"drawer-wrapper"},[t("div",{staticClass:"drawer-popup-wrapper",style:{width:"".concat(this.dWidth),height:"100%",left:"-".concat(this.dWidth),transform:this.transform}},this.$slots.navbar),t("div",{staticClass:"drawer-content"},this.$slots.content),i])])}},W=i,O=[o,r,l,c,p,d,X,Y,I,P,N],D=function(t){t.$dialog=t.prototype.$dialog=C,t.$popup=t.prototype.$popup=M,t.$actionSheet=t.prototype.$actionSheet=z,t.$toast=t.prototype.$toast=A,t.$picker=t.prototype.$picker=L,O.forEach(function(e,i){t.component(e.name,e)})};window&&void 0!==window.Vue&&D(window.Vue);var H={version:W,install:D};t.ActionSheet=z,t.Button=o,t.Carousel=I,t.Dialog=C,t.Drawer=N,t.Flex=r,t.Header=X,t.Loading=p,t.Page=Y,t.Picker=L,t.Popup=M,t.Progress=d,t.Radio=c,t.Switch=l,t.Tabs=P,t.Toast=A,t.default=H,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ink.umd.js.map
