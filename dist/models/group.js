"use strict";var e=this&&this.__decorate||function(e,t,r,o){var s,i=arguments.length,n=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(n=(i<3?s(n):i>3?s(t,r,n):s(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const r=require("typegoose"),o=require("es6-promise");class s extends r.Typegoose{constructor(e){super(),this.mlipia=e,this.model=this.createModel()}createModel(){this.getModelForClass(this)}create(e){return new o.Promise((t,r)=>{new(new s(this.mlipia).getModelForClass(s))({name:e.name}).save().then(e=>{t(e)}).catch(e=>{r(e)})})}find(){}}e([r.prop(),t("design:type",String)],s.prototype,"name",void 0),e([r.prop(),t("design:type",Array)],s.prototype,"rights",void 0),e([r.prop(),t("design:type",Array)],s.prototype,"users",void 0),exports.Group=s;