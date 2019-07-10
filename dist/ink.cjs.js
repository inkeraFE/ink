"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var name="ink-ui",version="0.0.4",description="A Vue.js 2.0 UI Toolkit for Mobile",main="dist/ink.cjs.js",module$1="dist/ink.es.js",unpkg="dist/ink.umd.js",scripts={test:"jest",lint:"eslint ./packages",start:"rollup -c --watch",build:"rollup -c","uglify:dir":"babel packages --out-dir lib",postcss:"postcss packages/**/*.css --base packages --dir lib",lintcss:"stylelint 'packages/**/*.css' --fix"},browserslist=["last 2 versions","Firefox ESR","> 1%","ie > 8","iOS >= 7","Android >= 4.4"],repository={type:"git",url:"git@github.com:inkeraFE/ink.git"},keywords=["ink","design","vue-ui","vue-component","vue","ui","component"],author="inkera",license="MIT",devDependencies={"@babel/cli":"^7.5.0","@babel/core":"^7.5.0","@babel/preset-env":"^7.5.0",autoprefixer:"^9.6.0","babel-eslint":"^10.0.2","babel-plugin-transform-es2015-modules-commonjs":"^6.26.2","babel-preset-env":"^1.7.0",cssnano:"^4.1.10",eslint:"^6.0.1","eslint-config-prettier":"^6.0.0","eslint-config-standard":"^12.0.0","eslint-plugin-import":"^2.18.0","eslint-plugin-node":"^9.1.0","eslint-plugin-prettier":"^3.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","identity-obj-proxy":"^3.0.0",jest:"^24.8.0",postcss:"^7.0.17","postcss-cli":"^5.0.1","postcss-cssnext":"^3.1.0","postcss-nested":"^4.1.2","postcss-simple-vars":"^5.0.2",precss:"^3.1.2",prettier:"^1.18.2",rollup:"^1.16.6","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.0.1","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-replace":"^2.2.0","rollup-plugin-terser":"^5.1.0",stylelint:"^10.1.0","stylelint-config-standard":"^18.3.0",vue:"^2.6.10"},pkgInfo={name:name,version:version,description:description,main:main,module:module$1,unpkg:unpkg,scripts:scripts,browserslist:browserslist,repository:repository,keywords:keywords,author:author,license:license,devDependencies:devDependencies};function styleInject(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===i&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var css=".ink-btn{border:none;outline:none;display:inline-block;padding:10px 15px;border-radius:6px;font-size:18px}.ink-btn:active{background:#f7f8f9}.is-disabled{opacity:.4}.btn-large{display:block;width:100%}.btn-primary{background:#fff;color:#108ee9;border:1px solid #108ee9}.btn-danger{background:#fff;color:#dd2622;border:1px solid #dd2622}.btn-warning{background:#fff;color:#f90;border:1px solid #f90}.btn-default{background:#fff;color:#333}.btn-active{background:#f7f8f9}";styleInject(css);var Button={name:"ink-btn",computed:{typeClass:function(){return"primary"===this.type?"btn-primary":"danger"===this.type?"btn-danger":"warning"===this.type?"btn-warning":"btn-default"},sizeClass:function(){if("large"===this.size)return"btn-large"}},props:{type:{type:String,default:"default"},size:{type:String,default:"small"},disabled:{type:Boolean,default:!1}},render:function(e){var t=this;return e("button",{attrs:{name:"button",type:"button"},class:["ink-btn",this.typeClass,this.sizeClass,this.disabled?"is-disabled":""],disabled:this.disabled,on:{click:function(e){t.$emit("click",e)}}},this.$slots.default)}};function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var css$1=".flex-flex{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flex-auto{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}.flex-none{-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box}.flex.flex-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.flex.flex-nowrap{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.flex.flex-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.flex.flex-justify-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.flex.flex-justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.flex.flex-justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.flex.flex-justify-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.flex.flex-justify-around{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.flex.flex-align-start{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.flex.flex-align-end{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.flex.flex-align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex.flex-align-baseline{-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline}.flex.flex-align-stretch{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}";styleInject(css$1);var Flex={name:"ink-flex",props:{flex:{type:Number},auto:{type:Boolean,default:!1},none:{type:Boolean,default:!1},width:{type:String},height:{type:String},row:{type:Boolean,default:!1},column:{type:Boolean,default:!1},wrap:{type:Boolean,default:!1},nowrap:{type:Boolean,default:!1},justifyStart:{type:Boolean,default:!1},justifyEnd:{type:Boolean,default:!1},justifyCenter:{type:Boolean,default:!1},justifyBetween:{type:Boolean,default:!1},justifyAround:{type:Boolean,default:!1},alignStart:{type:Boolean,default:!1},alignEnd:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},alignBaseline:{type:Boolean,default:!1},alignStretch:{type:Boolean,default:!1}},computed:{getClassArray:function(){var e={"flex-flex":this.flex,"flex-auto":this.auto,"flex-none":this.none||this.width||this.height,"flex-row":this.row,"flex-column":this.column,"flex-wrap":this.wrap,"flex-nowrap":this.nowrap,"flex-justify-start":this.justifyStart,"flex-justify-end":this.justifyEnd,"flex-justify-center":this.justifyCenter,"flex-justify-between":this.justifyBetween,"flex-justify-around":this.justifyAround,"flex-align-start":this.alignStart,"flex-align-end":this.alignEnd,"flex-align-center":this.alignCenter,"flex-align-baseline":this.alignBaseline,"flex-align-stretch":this.alignStretch},t=[];return Object.keys(e).forEach(function(i){e[i]&&t.push(i)}),t},getStyle:function(){var e={};return this.flex&&(e.flex="boolean"==typeof this.flex?1:this.flex,e.WebkitFlex="boolean"==typeof this.flex?1:this.flex),this.height&&(e.height=this.height),this.width&&(e.width=this.width),e}},render:function(e){return e("div",{class:["flex"].concat(_toConsumableArray(this.getClassArray)),style:this.getStyle},this.$slots.default)}},css$2='.ink-switch{display:inline-block;height:32px}.ink-switch *{pointer-events:none}.ink-switch .switch-input{display:none}.ink-switch .switch-label{position:relative;display:inline-block;width:50px;height:32px;border-radius:15px;background:#ddd}.ink-switch .switch-label:after,.ink-switch .switch-label:before{content:" ";position:absolute;border-radius:13px;-webkit-transition:all .25s;transition:all .25s}.ink-switch .switch-label:before{top:1px;left:1px;width:48px;height:30px;background:#fefefe}.ink-switch .switch-label:after{top:.5px;left:1px;width:30px;height:30px;border-radius:100%;background:#fff;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.3);box-shadow:0 0 2px 0 rgba(0,0,0,.3)}.ink-switch .switch-input[type=checkbox]:checked+.switch-label:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.ink-switch .switch-input[type=checkbox]:checked+.switch-label:after{-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}';styleInject(css$2);var Switch={name:"ink-switch",computed:{inner_value:{get:function(){return this.value},set:function(e){this.$emit("input",e),this.$emit("change",e)}},mainColor:function(){if(this.inner_value)return this.color}},props:{value:{type:Boolean,default:!1},color:{type:String,default:"#108ee9"}},render:function(e){var t=this;return e("label",{staticClass:"ink-switch"},[e("input",{staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{checked:this.inner_value},on:{change:function(e){t.inner_value=e.target.checked}}}),e("label",{staticClass:"switch-label",style:{background:this.mainColor}})])}},css$3='.ink-radio{display:inline-block;width:20px;height:20px;border-radius:100%}.ink-radio *{pointer-events:none}.ink-radio .radio-input{display:none}.ink-radio .radio-label{position:relative;display:inline-block;width:20px;height:20px;border-radius:100%;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff}.ink-radio .radio-input[type=radio]:disabled+.radio-label{border:1px solid #ccc}.ink-radio .radio-input[type=radio]:disabled+.radio-label:before{content:" ";position:absolute;left:50%;top:0;-webkit-transform:translate3d(-50%,0,0) rotate(-45deg);transform:translate3d(-50%,0,0) rotate(-45deg);width:1px;height:100%;background:#ccc}.ink-radio .radio-input[type=radio]:checked+.radio-label{border:none;background:#108ee9}.ink-radio .radio-input[type=radio]:checked+.radio-label:before{content:" ";position:absolute;top:4px;left:4px;width:13px;height:8px;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid #fff;border-top:none;border-right:none;-webkit-transform:rotate(-46deg);-ms-transform:rotate(-46deg);transform:rotate(-46deg)}';styleInject(css$3);var Radio={name:"ink-radio",props:{name:{type:String},val:{type:String},value:{type:String},disabled:{type:Boolean,default:!1},color:{type:String,default:"#108ee9"}},computed:{bgColor:function(){return this.value===this.val?this.color:"white"}},render:function(e){var t=this;return e("label",{staticClass:"ink-radio"},[e("input",{attrs:{type:"radio",name:this.name,value:this.val},domProps:{checked:this.value===this.val,disabled:this.disabled},staticClass:"radio-input",on:{change:function(e){t.checked=e.target.value===t.val,t.$emit("input",e.target.value)}}}),e("label",{staticClass:"radio-label",style:{background:this.bgColor}})])}},version$1=pkgInfo.version,compList=[Button,Flex,Switch,Radio],install=function(e){compList.forEach(function(t,i){e.component(t.name,t)})};window&&void 0!==window.Vue&&install(window.Vue);var index={version:version$1,install:install};exports.Button=Button,exports.Flex=Flex,exports.default=index;
//# sourceMappingURL=ink.cjs.js.map
