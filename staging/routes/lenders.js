"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class s{constructor(s){this.routes=[],this.mlipia=s,this.register(),this.listen()}listen(){this.routes.forEach(s=>{this.mlipia.app[s.method](s.address,s.func)})}register(){this.routes.push({address:"/lenders/list",func:(s,e)=>{this.list(s,e)},method:"get"})}list(s,e){return new Array}}exports.LendersRoutes=s;