"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("es6-promise");class s{constructor(e,s,t){this.mlipia=e,this.purview=s,this.events=[],this.register().then(()=>{1==t&&this.listen()})}listen(){this.events.forEach(e=>{let s=this.purview+":"+e.name;this.mlipia.socket.on(s,e.func)})}register(){return e.Promise.resolve(()=>{this.events.push({func:this.list,name:this.purview+":list"})})}stopListening(){return e.Promise.resolve(()=>{this.events.forEach(e=>{let s=this.purview+":"+e.name;this.mlipia.socket.off(s)})})}list(s){return new e.Promise((e,t)=>{this.mlipia.models.User.find().then(t=>{this.end(e,s,t)}).catch(e=>{this.end(t,s,{message:"Couldn't list users",error:e})})})}end(e,s,t){e(t),s(t)}}exports.UsersEvents=s;