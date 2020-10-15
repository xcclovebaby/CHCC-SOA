(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-570b6100"],{"29c8":function(t,e,n){},"6edd":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{staticClass:"searchForm",attrs:{inline:!0,model:t.listQuery}},[n("el-form-item",{attrs:{label:"部门名称"}},[n("el-input",{staticClass:"seach",attrs:{placeholder:"部门名称",maxlength:"10",size:"small",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}})],1),t._v(" "),n("div",{staticClass:"seachBtn"},[n("el-button",{attrs:{icon:"el-icon-search",circle:""},on:{click:t.fetchData}}),t._v(" "),n("el-button",{attrs:{icon:"el-icon-refresh",circle:""},on:{click:t.restSearch}})],1)],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"10px"}},[n("el-button",{staticClass:"form-btn-diy",attrs:{type:"success",size:"small"},on:{click:function(e){t.dialogFormVisible=!0,t.form.type=1}}},[t._v("新增部门")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleSelection",attrs:{data:t.list,"row-key":"id","element-loading-text":"Loading",border:"",fit:"",size:"small",height:"600px","highlight-current-row":"","tree-props":{children:"children",hasChildren:"hasChildren"}},on:{select:t.showSelect}},[n("el-table-column",{attrs:{align:"center",label:"部门名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.name)+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-value":t.activeValue,"active-text":"启用","active-color":"#13ce66","inactive-color":"#ff4949","inactive-text":"禁用","inactive-value":t.inactiveValue},on:{change:function(n){return t.toEnableOrDisable(e.row.id,e.row.status)}},model:{value:e.row.status,callback:function(n){t.$set(e.row,"status",n)},expression:"scope.row.status"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建人",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.createBy))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.createTime))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"上次更新时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.updateTime))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"310"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.addDepartment(e.row.id)}}},[t._v("子部门")]),t._v(" "),n("el-button",{attrs:{type:"success",size:"small"},on:{click:function(n){return t.addUser(e.row.id)}}},[t._v("用户")]),t._v(" "),n("el-button",{attrs:{type:"info",size:"small"},on:{click:function(n){return t.toEdit(e.row.id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return t.toDelete(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"b_pagebox"},[n("el-pagination",{ref:"currentPage",attrs:{total:t.listSize,layout:"prev, pager, next"},on:{"current-change":t.currentChange}})],1),t._v(" "),n("el-dialog",{attrs:{title:"编辑部门",visible:t.dialogFormVisible,width:"40%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"编辑部门"}},[n("el-input",{staticClass:"from_i_12",model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("div",[n("el-radio",{attrs:{label:"1",border:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._v("启用")]),t._v(" "),n("el-radio",{attrs:{label:"2",border:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._v("禁用")])],1)])],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确 定")])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"分配用户",visible:t.dialogTreeVisible,departmentId:t.departmentId,width:"38%"},on:{"update:visible":function(e){t.dialogTreeVisible=e}}},[n("el-transfer",{staticStyle:{"text-align":"left",display:"inline-block"},attrs:{filterable:"","filter-placeholder":"请输入用户昵称",data:t.treeForm,"button-texts":["移除","增加"],titles:["未加入部门用户","已加入部门用户"]},model:{value:t.checkUser,callback:function(e){t.checkUser=e},expression:"checkUser"}}),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogTreeVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.onChange}},[t._v("确 定")])],1)],1)],1)},a=[],l=(n("7f7f"),n("ac6a"),n("b775"));function s(t){return Object(l["a"])({url:"/sys/department/list",method:"post",data:t})}function o(t){return Object(l["a"])({url:"/sys/department/detail/"+t,method:"post"})}function r(t){return Object(l["a"])({url:"/sys/department/findUser/"+t,method:"post"})}function c(t){return Object(l["a"])({url:"/sys/department/commitUser",method:"post",data:t})}function u(t){return Object(l["a"])({url:"/sys/department/commit",method:"post",data:t})}function d(t){return Object(l["a"])({url:"/sys/department/changeStatus",method:"post",data:t})}function f(t){return Object(l["a"])({url:"/sys/department/delete",method:"post",data:t})}var m={data:function(){return{options:[{value:1,label:"启用"},{value:2,label:"禁用"}],departmentId:null,checkUser:[],list:null,list1:null,listSize:0,listLoading:!1,dialogFormVisible:!1,dialogTreeVisible:!1,selection:[],activeValue:1,inactiveValue:2,ids:[],form:{id:null,parentId:null,name:null,type:null,status:null},treeForm:[],formLabelWidth:"120px",listQuery:{offset:1,limmit:10,name:null,createBy:null,status:null}}},watch:{dialogFormVisible:function(t){t||(this.form={id:null,name:null,parentId:null,type:null,status:null})},dialogTreeVisible:function(t){t||(this.treeForm=[])}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,s(this.listQuery).then((function(e){t.list=e.data.records,t.listLoading=!1,t.listSize=e.data.total}))},currentChange:function(){var t=this;this.listQuery.offset=this.$refs.currentPage.internalCurrentPage,this.listLoading=!0,s(this.listQuery).then((function(e){t.list=e.data.records,t.listLoading=!1,t.listSize=e.data.total}))},showSelect:function(t){var e=[];t.forEach((function(t){e.push(t.id)})),this.rows=e},open2:function(t){this.$notify({title:1e4==t.code?"成功":"错误",message:t.message,type:1e4==t.code?"success":"error"})},addDepartment:function(t){this.form.parentId=t,this.form.type=0,this.dialogFormVisible=!0},addUser:function(t){var e=this;this.dialogTreeVisible=!0,this.departmentId=t,r(t).then((function(t){e.checkUser=t.data.ids,e.treeForm=t.data.list}))},toEdit:function(t){var e=this;o(t).then((function(t){e.form={id:t.data.id,name:t.data.name,status:t.data.status+""},e.dialogFormVisible=!0}))},toEnableOrDisable:function(t,e){var n=this;this.$confirm(1==e?"是否启用":"是否禁用","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){d({id:t,status:e}).then((function(t){n.open2(t),n.currentChange()}))})).catch((function(){n.currentChange()}))},toDelete:function(t){var e=this;this.$confirm("是否删除","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){f({id:t}).then((function(t){e.open2(t),e.currentChange()}))}))},restSearch:function(){this.listQuery={offset:1,limmit:10,name:null,createBy:null,status:null},this.fetchData()},onChange:function(){var t=this,e={id:this.departmentId,ids:this.checkUser};c(e).then((function(e){t.open2(e),t.dialogTreeVisible=!1}))},onSubmit:function(){var t=this;u(this.form).then((function(e){t.dialogFormVisible=!1,t.open2(e),t.currentChange()}))}}},h=m,p=(n("a843"),n("2877")),b=Object(p["a"])(h,i,a,!1,null,"19ebc780",null);e["default"]=b.exports},a843:function(t,e,n){"use strict";var i=n("29c8"),a=n.n(i);a.a}}]);