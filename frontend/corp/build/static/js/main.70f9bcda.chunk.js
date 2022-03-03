(this["webpackJsonpcorp-frontend"]=this["webpackJsonpcorp-frontend"]||[]).push([[0],{195:function(e,t,r){},275:function(e,t,r){},276:function(e,t,r){},277:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(16),s=r.n(c),i=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,298)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},o=r(46),l=r(289),u=r(294),j=r(19),d=r(40),b=r(20),p=r.n(b),h=r(32),x=r.n(h);function O(){return(O=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/audit/api/corp/structures");case 2:return t=e.sent,console.log("get structures in api 1"),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x.a.defaults.xsrfHeaderName="X-CSRFToken";var f=r(43),m=r(12),g=r(283),v=r(56),y=r(297),w=r(58),S=r(91),C=r(284),N=r(285),F=r(286),L=r(156),P=r(295),_=r(287),k=(r(195),r(96),r(2)),H=function(){return Object(k.jsx)(u.a.Body,{className:"flex-container",children:Object(k.jsxs)("div",{className:"text-center",children:[Object(k.jsx)("div",{className:"error-size bottom-text",children:Object(k.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",fill:"currentColor",class:"bi bi-exclamation-triangle error-anim",viewBox:"0 0 16 16",children:[Object(k.jsx)("path",{d:"M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"}),Object(k.jsx)("path",{d:"M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"})]})}),Object(k.jsx)("h3",{className:"text-margin",children:"Error Loading Component"})]})})};function B(e){var t=e.row,r=e.rowProps,a=e.visibleColumns,c=e.data,s=e.error;return e.isLoading?Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{}),Object(k.jsx)("td",{colSpan:a.length-1,children:"Loading..."})]}):s?Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{}),Object(k.jsx)("td",{colSpan:a.length-1,children:"Unable to Fetch from API!"})]}):0===c.length?Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{}),Object(k.jsx)("td",{colSpan:a.length-1,children:"Empty!"})]}):Object(k.jsx)(k.Fragment,{children:c.map((function(e,a){return Object(n.createElement)("tr",Object(m.a)(Object(m.a)({},r),{},{key:"".concat(r.key,"-expanded-").concat(a)}),t.cells.map((function(r){return Object(k.jsx)("td",Object(m.a)(Object(m.a)({},r.getCellProps()),{},{children:r.render(r.column.SubCell?"SubCell":"Cell",{value:r.column.accessor&&r.column.accessor(e,a),row:Object(m.a)(Object(m.a)({},t),{},{original:e})})}))})))}))})}var z={option:function(e){return Object(m.a)(Object(m.a)({},e),{},{color:"black"})}};function A(e){var t=e.message;return Object(k.jsx)(g.a,{id:"character_tooltip",children:t})}function R(e){var t=e.column;t.filterValue,t.preFilteredRows,t.setFilter;return Object(k.jsx)(k.Fragment,{})}function T(e){var t=e.column,r=t.filterValue,n=t.preFilteredRows,a=t.setFilter,c=n.length;return Object(k.jsx)("input",{className:"form-control",value:r||"",onChange:function(e){a(e.target.value||void 0)},placeholder:"Search ".concat(c," records...")})}function E(e){var t=e.column,r=t.setFilter,n=t.filterValue,c=t.preFilteredRows,s=t.id,i=a.a.useMemo((function(){var e=new Set;return c?(c.forEach((function(t){null!==t.values[s]&&("object"===typeof t.values[s]?e.add(t.values[s].name):e.add(t.values[s]))})),Object(o.a)(e.values())):[]}),[s,c]);return Object(k.jsx)(f.a,{title:n,onChange:function(e){return r(e.value)},value:{label:n||"All"},defaultValue:{label:"All"},styles:z,options:[{id:-1,value:"",label:"All"}].concat(i.map((function(e,t){return{id:t,value:e,label:e}})))},n)}var D=function(){return{}};var M=function(e){var t=e.isLoading,r=e.isFetching,n=e.data,c=e.error,s=e.columns,i=e.asyncExpandFunction,o=e.getRowProps,l=void 0===o?D:o,u=a.a.useMemo((function(){return{Filter:R}}),[]),j=a.a.useMemo((function(){return{text:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t];return"object"===typeof n&&(n=n.name),e.hasOwnProperty("originalSubRows")&&(n+=e.originalSubRows.reduce((function(e,r){return e+" "+(n=r,t.split(".").reduce((function(e,t){return e[t]}),n));var n}),"")),!!n&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))}}}),[]),d=Object(w.useTable)({columns:s,data:n,defaultColumn:u,filterTypes:j,initialState:{pageSize:20}},w.useFilters,w.useSortBy,w.useExpanded,w.usePagination),b=d.getTableProps,p=d.getTableBodyProps,h=d.headerGroups,x=d.page,O=d.prepareRow,f=d.canPreviousPage,g=d.canNextPage,B=d.pageOptions,z=d.pageCount,T=d.gotoPage,E=d.nextPage,M=d.previousPage,Q=d.setPageSize,V=d.visibleColumns,I=d.state,G=I.pageIndex,U=I.pageSize;return t?Object(k.jsx)("div",{className:"col-xs-12 text-center",children:Object(k.jsx)(S.a,{className:"spinner-size"})}):c?Object(k.jsx)(H,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(C.a,{striped:!0,children:[Object(k.jsxs)("thead",Object(m.a)(Object(m.a)({},b()),{},{children:[h.map((function(e){return Object(k.jsx)("tr",Object(m.a)(Object(m.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(k.jsxs)("th",Object(m.a)(Object(m.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(k.jsx)("span",{className:"pull-right",children:e.canSort?e.isSorted?e.isSortedDesc?Object(k.jsx)(N.a,{glyph:"sort-by-attributes-alt"}):Object(k.jsx)(N.a,{glyph:"sort-by-attributes"}):Object(k.jsx)(N.a,{glyph:"sort"}):""})]}))}))}))})),h.map((function(e){return Object(k.jsx)("tr",Object(m.a)(Object(m.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(k.jsx)("th",Object(m.a)(Object(m.a)({},e.getHeaderProps()),{},{children:Object(k.jsx)("div",{children:e.canFilter?e.render("Filter"):null})}))}))}))}))]})),Object(k.jsx)("tbody",Object(m.a)(Object(m.a)({},p()),{},{children:x.map((function(e,t){O(e);var r=l(e);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("tr",Object(m.a)(Object(m.a)({},e.getRowProps(r)),{},{children:e.cells.map((function(e){return Object(k.jsx)("td",Object(m.a)(Object(m.a)({style:{verticalAlign:"middle"}},e.getCellProps()),{},{children:e.render("Cell")}))}))})),e.isExpanded&&i({row:e,rowProps:r,visibleColumns:V})]})}))}))]}),Object(k.jsx)("div",{className:"pagination pull-right",children:Object(k.jsxs)(F.a,{children:[Object(k.jsxs)(L.a,{children:[Object(k.jsx)(v.a,{bsStyle:"success",onClick:function(){return T(0)},disabled:!f,children:Object(k.jsx)(N.a,{glyph:"step-backward"})})," ",Object(k.jsx)(v.a,{bsStyle:"success",onClick:function(){return M()},disabled:!f,children:Object(k.jsx)(N.a,{glyph:"triangle-left"})})," ",Object(k.jsx)(v.a,{bsStyle:"success",onClick:function(){return E()},disabled:!g,children:Object(k.jsx)(N.a,{glyph:"triangle-right"})})," ",Object(k.jsx)(v.a,{bsStyle:"success",onClick:function(){return T(z-1)},disabled:!g,children:Object(k.jsx)(N.a,{glyph:"step-forward"})})]}),Object(k.jsxs)(L.a,{children:[Object(k.jsx)(v.a,{active:!0,bsStyle:"success",children:"Page Size:"})," ",Object(k.jsx)(P.a,{id:"pageSizeDropdown",bsStyle:"success",title:U,onSelect:function(e){Q(Number(e))},children:[20,50,100,1e6].map((function(e){return Object(k.jsxs)(_.a,{id:e,eventKey:e,value:e,children:["Show ",e]},e)}))})]})]})}),Object(k.jsx)("div",{className:"pagination pull-left",children:Object(k.jsxs)(L.a,{children:[Object(k.jsx)(v.a,{active:!0,bsStyle:"info",children:Object(k.jsx)(k.Fragment,{children:B.length>0?Object(k.jsxs)(k.Fragment,{children:["Page"," ",Object(k.jsxs)("strong",{children:[G+1," of ",B.length]})]}):Object(k.jsxs)(k.Fragment,{children:["Page ",Object(k.jsx)("strong",{children:"- of -"})]})})})," ",r?Object(k.jsx)(y.a,{placement:"bottom",overlay:A({message:"Refreshing Data"}),children:Object(k.jsx)(v.a,{bsStyle:"info",children:Object(k.jsx)(N.a,{className:"glyphicon-refresh-animate",glyph:"refresh"})})}):Object(k.jsx)(y.a,{placement:"bottom",overlay:A({message:"Data Loaded: "+(new Date).toLocaleString()}),children:Object(k.jsx)(v.a,{bsStyle:"info",children:Object(k.jsx)(N.a,{glyph:"ok"})})})]})})]})},Q=r(293),V=r(288),I=function(e){var t=e.corporation_id,r=e.size,n=void 0===r?256:r;return Object(k.jsx)(V.a,{src:"https://images.evetech.net/corporations/".concat(t,"/logo?size=").concat(n)})},G=function(e){var t=e.type_id,r=e.size,n=void 0===r?64:r;return Object(k.jsx)(V.a,{className:"img-circle",src:"https://images.evetech.net/types/".concat(t,"/icon?size=").concat(n)})},U=r(292),W=r(160);U.a.addDefaultLocale(W);var X=function(){var e=Object(j.useQuery)(["stuctures"],(function(){return function(){return O.apply(this,arguments)}()}),{initialData:[]}),t=e.isLoading,r=e.isFetching,n=e.error,c=e.data,s=a.a.useMemo((function(){return function(e,t,r){var n=e.values[r],a=t.values[r];return null===n|null===a||n>a?1:-1}}),[]),i=a.a.useMemo((function(){return[{Header:"System",accessor:"location",Filter:E,filter:"text",Cell:function(e){return Object(k.jsx)("a",{href:"https://evemaps.dotlan.net/system/"+e.value.name.replace(" ","_"),children:e.value.name})}},{Header:"Structure",accessor:"name",Filter:T,filter:"text"},{Header:"Type",accessor:"type",disableSortBy:!0,Filter:E,filter:"text",Cell:function(e){return Object(k.jsxs)("div",{className:"flex-image-text",children:[Object(k.jsx)("div",{className:"pull-left",children:Object(k.jsx)(G,{type_id:e.value.id})}),Object(k.jsx)("div",{className:"pull-left",children:e.value.name})]})}},{Header:"Owner",accessor:"owner",disableSortBy:!0,Filter:function(e){var t=e.column,r=t.setFilter,n=t.filterValue,c=t.preFilteredRows,s=t.id,i=a.a.useMemo((function(){var e=new Set;return c?(c.forEach((function(t){null!==t.values[s]&&e.add(t.values[s].corporation_name)})),Object(o.a)(e.values())):[]}),[s,c]);return Object(k.jsx)(f.a,{title:n,onChange:function(e){return r(e.value)},value:{label:n||"All"},defaultValue:{label:"All"},styles:z,options:[{id:-1,value:"",label:"All"}].concat(i.map((function(e,t){return{id:t,value:e,label:e}})))},n)},filter:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t].corporation_name;return!!n&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))},Cell:function(e){return Object(k.jsxs)("div",{className:"flex-image-text",children:[Object(k.jsx)("div",{className:"pull-left",children:Object(k.jsx)(I,{corporation_id:e.value.corporation_id,size:32})}),Object(k.jsx)("div",{className:"pull-left",children:e.value.corporation_name})]})}},{Header:"Fuel Expiry",accessor:"fuel_expiry",sortType:s,Cell:function(e){return Object(k.jsx)("div",{children:e.value?Object(k.jsx)(Q.a,{date:e.value}):""})}},{Header:"State",accessor:"state",Filter:E,disableSortBy:!0,filter:"text"},{Header:"Services",accessor:"services",disableSortBy:!0,Filter:function(e){var t=e.column,r=t.setFilter,n=t.filterValue,c=t.preFilteredRows,s=t.id,i=a.a.useMemo((function(){var e=new Set;return c?(c.forEach((function(t){null!==t.values[s]&&t.values[s].forEach((function(t){e.add(t.name)}))})),Object(o.a)(e.values())):[]}),[s,c]);return Object(k.jsx)(f.a,{title:n,onChange:function(e){return r(e.value)},value:{label:n||"All"},defaultValue:{label:"All"},styles:z,options:[{id:-1,value:"",label:"All"}].concat(i.map((function(e,t){return{id:t,value:e,label:e}})))},n)},filter:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t].reduce((function(e,t){return e+"  "+t.name}),"");return!!n&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))},Cell:function(e){return e.value?Object(k.jsx)("div",{className:"text-center",children:e.value.map((function(e){return Object(k.jsx)(l.a,{className:"padded-label",bsStyle:"online"===e.state?"primary":"danger",children:e.name})}))}):Object(k.jsx)(k.Fragment,{})}}]}),[s]);return Object(k.jsx)(u.a.Body,{children:Object(k.jsx)(M,{isLoading:t,isFetching:r,data:c,columns:i,error:n})})},J=r(111),q=r(17),K=r(291),Y=r(296),Z=r(290),$=r(1),ee=function(e){var t=Object(q.f)();Object(n.useEffect)((function(){}),[t]);var r=window.location.href.endsWith(e.href)?"active":"";return Object(k.jsx)(Z.a,Object(m.a)(Object(m.a)({className:r},e),{},{children:e.children}))};ee.contextTypes={router:r.n($).a.object};var te=ee,re=(r(275),r(162)),ne=r.n(re);function ae(){return ce.apply(this,arguments)}function ce(){return(ce=Object(d.a)(p.a.mark((function e(){var t,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/audit/api/corp/list");case 2:return t=e.sent,console.log("got corp status in api"),(r=Array.from(new Set(t.data.reduce((function(e,t){try{return e.concat(Object.keys(t.last_updates))}catch(r){return e}}),[])))).sort(),n={corps:t.data,headers:r},e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return ie.apply(this,arguments)}function ie(){return(ie=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Sent Corp refresh"),e.next=3,x.a.post("/audit/api/corporation/refresh",{headers:{"X-CSRFToken":ne.a.getItem("csrftoken")}});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return(oe=Object(d.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/audit/api/corporation/".concat(t,"/asset/locations"));case 2:return r=e.sent,console.log("get asset locations in api ".concat(t)),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return(le=Object(d.a)(p.a.mark((function e(t,r){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/audit/api/corporation/".concat(t,"/asset/").concat(r,"/groups"));case 2:return n=e.sent,console.log("get asset groups in api ".concat(t," ").concat(r)),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(){return(ue=Object(d.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/audit/api/corporation/asset/".concat(t,"/contents"));case 2:return r=e.sent,console.log("get asset contents in api ".concat(t)),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(){return(je=Object(d.a)(p.a.mark((function e(t,r){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/audit/api/corporation/".concat(t,"/asset/").concat(r,"/list"));case 2:return n=e.sent,console.log("get asset list in api ".concat(t," ").concat(r)),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=Object(d.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/audit/api/corporation/".concat(t,"/wallet"));case 2:return r=e.sent,console.log("get wallet in api ".concat(t)),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(e){var t=e.message;return Object(k.jsx)(g.a,{id:"character_tooltip",children:t})}x.a.defaults.xsrfHeaderName="X-CSRFToken";var pe=function(){var e=Object(j.useMutation)(se).mutate;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Z.a,{href:"/audit/corp/add",children:Object(k.jsx)(y.a,{placement:"top",overlay:be({message:"Add New Token"}),children:Object(k.jsx)(N.a,{glyph:"plus"})})}),Object(k.jsx)(Z.a,{onClick:function(){return e()},children:Object(k.jsx)(N.a,{glyph:"refresh"})})]})},he=function(){return Object(k.jsxs)(Y.a,{fluid:!0,collapseOnSelect:!0,children:[Object(k.jsxs)(Y.a.Header,{children:[Object(k.jsx)(Y.a.Brand,{children:"Corporation Audit"}),Object(k.jsx)(Y.a.Toggle,{})]}),Object(k.jsxs)(Y.a.Collapse,{children:[Object(k.jsxs)(K.a,{children:[Object(k.jsx)(te,{href:"#/structures",children:"Structures"},"Structures"),Object(k.jsx)(te,{href:"#/wallets",children:"Wallets"},"Wallets"),Object(k.jsx)(te,{href:"#/assetgroup",children:"Asset Overview"},"Assetgroups"),Object(k.jsx)(te,{href:"#/assetlist",children:"Asset List"},"assetlists")]}),Object(k.jsxs)(K.a,{className:"pull-right",children:[Object(k.jsx)(pe,{}),Object(k.jsx)(te,{href:"#/status",children:"Corporations"},"Status")]})]})]})},xe=function(){return Object(k.jsx)(u.a.Body,{className:"flex-container",children:Object(k.jsx)(S.a,{className:"spinner-size"})})},Oe=function(){var e=Object(j.useQuery)(["corp-status"],(function(){return ae()})),t=e.isLoading,r=e.error,n=e.data;return t?Object(k.jsx)(xe,{}):r?Object(k.jsx)(H,{}):Object(k.jsx)(u.a.Body,{className:"flex-container",children:n.corps.map((function(e){return Object(k.jsxs)(u.a,{className:"flex-child",children:[Object(k.jsx)(u.a.Heading,{children:Object(k.jsx)("h4",{className:"text-center",children:e.corporation.corporation_name})}),Object(k.jsxs)(u.a.Body,{className:"flex-body",children:[Object(k.jsx)("div",{className:"text-center",children:Object(k.jsx)(I,{corporation_id:e.corporation.corporation_id,size:256})}),Object(k.jsx)("h4",{className:"text-center",children:"Update Status"}),Object(k.jsx)(C.a,{striped:!0,style:{marginBottom:0},children:Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Update"}),Object(k.jsx)("th",{className:"text-right",children:"Last Run"})]})})}),Object(k.jsx)("div",{className:"table-div",children:Object(k.jsx)(C.a,{striped:!0,children:Object(k.jsx)("tbody",{children:n.headers.map((function(t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:t}),Object(k.jsx)("td",{className:"text-right",children:e.last_updates[t]?Object(k.jsx)(Q.a,{date:Date.parse(e.last_updates[t])}):Object(k.jsx)(k.Fragment,{children:"Never"})})]})}))})})})]})]})}))})},fe=(r(276),r(47)),me={option:function(e){return Object(m.a)(Object(m.a)({},e),{},{color:"black"})}},ge=function(e){var t=e.corporation_id,r=e.setLocation,n=Object(j.useQuery)(["asset_loc",t],(function(){return function(e){return oe.apply(this,arguments)}(t)})),a=n.isLoading,c=n.data;return Object(k.jsxs)("div",{className:"flex-label-container",children:[Object(k.jsx)("div",{className:"flex-label",children:Object(k.jsx)("h5",{children:"Location Select:"})}),Object(k.jsx)(f.a,{className:"flex-select",isLoading:a,styles:me,options:c,isDisabled:!t,onChange:function(e){return r(e.value)}})]})},ve=r(35),ye=r(36),we=r(37),Se=r(163),Ce=function(e){Object(we.a)(r,e);var t=Object(Se.a)(r);function r(e){var n;return Object(ve.a)(this,r),(n=t.call(this,e)).state={error:null,errorInfo:null},n}return Object(ye.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?Object(k.jsx)(H,{}):this.props.children}}]),r}(a.a.Component),Ne=function(){return Object(k.jsx)(u.a.Body,{className:"flex-container",children:Object(k.jsxs)("div",{className:"text-center",children:[Object(k.jsx)("div",{className:"error-size bottom-text",children:Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",fill:"currentColor",class:"bi bi-arrow-up-short arrow-anim",viewBox:"0 0 16 16",children:Object(k.jsx)("path",{"fill-rule":"evenodd",d:"M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"})})}),Object(k.jsx)("h3",{className:"text-margin",children:"Please Select Corporation"})]})})},Fe=function(e){var t=e.corporation_id,r=void 0===t?0:t,n=e.location_id,a=void 0===n?0:n,c=Object(j.useQuery)(["assetGroups",r,a],(function(){return function(e,t){return le.apply(this,arguments)}(r,a)})),s=c.isLoading,i=c.isFetching,o=c.error,l=c.data;return 0===r?Object(k.jsx)(Ne,{}):s?Object(k.jsx)(xe,{}):o?Object(k.jsx)(H,{}):Object(k.jsx)(Ce,{children:Object(k.jsx)("div",{className:"flex-container",children:l.map((function(e){return Object(k.jsxs)(u.a,{className:"flex-child",children:[Object(k.jsx)(u.a.Heading,{children:Object(k.jsxs)("h4",{className:"text-center",children:[e.name,i?Object(k.jsx)(N.a,{className:"glyphicon-refresh-animate pull-right",glyph:"refresh"}):Object(k.jsx)(k.Fragment,{})]})}),Object(k.jsxs)(u.a.Body,{className:"flex-body",children:[Object(k.jsx)(C.a,{striped:!0,style:{marginBottom:0},children:Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Group"}),Object(k.jsx)("th",{className:"text-right",children:"Count"})]},"head "+e.name)})}),Object(k.jsx)("div",{className:"table-div",children:Object(k.jsx)(C.a,{striped:!0,children:Object(k.jsx)("tbody",{children:e.items.map((function(t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:t.label}),Object(k.jsx)("td",{className:"text-right no-wrap",children:t.value.toLocaleString()})]},e.name+" "+t.label+" "+t.value)}))})})})]})]},e.name)}))})})},Le={option:function(e){return Object(m.a)(Object(m.a)({},e),{},{color:"black"})}},Pe=function(e){var t=e.setCorporation,r=Object(j.useQuery)(["corp-status"],(function(){return ae()})),n=r.isLoading,a=r.data,c=[];return n||(c=a.corps.map((function(e){return{value:e.corporation.corporation_id,label:e.corporation.corporation_name}}))),Object(k.jsxs)("div",{className:"flex-label-container",children:[Object(k.jsx)("div",{className:"flex-label",children:Object(k.jsx)("h5",{children:"Corporation Select:"})}),Object(k.jsx)(f.a,{className:"flex-select",isLoading:n,styles:Le,options:c,onChange:function(e){return t(e.value)}})]})},_e=function(){var e=Object(n.useState)(0),t=Object(fe.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(0),s=Object(fe.a)(c,2),i=s[0],o=s[1];return Object(k.jsx)(Ce,{children:Object(k.jsxs)(u.a.Body,{className:"flex-container-vert-fill",children:[Object(k.jsx)(Pe,{setCorporation:o}),Object(k.jsx)(ge,{corporation_id:i,setLocation:a}),Object(k.jsx)(Fe,{corporation_id:i,location_id:r})]})})};function ke(e){var t=e.row,r=e.rowProps,n=e.visibleColumns,a=Object(j.useQuery)(["lazy-load",t.original.id],(function(){return function(e){return ue.apply(this,arguments)}(t.original.id)})),c=a.isLoading,s=a.error,i=a.data;return c||(t.originalSubRows=i),Object(k.jsx)(B,{row:t,rowProps:r,visibleColumns:n,data:i,error:s,isLoading:c})}var He=function(e){var t=e.corporation_id,r=e.location_id,n=void 0===r?0:r,c=Object(j.useQuery)(["assetList",t,n],(function(){return function(e,t){return je.apply(this,arguments)}(t,n)}),{initialData:[]}),s=c.isLoading,i=c.isFetching,o=c.error,l=c.data,d=a.a.useCallback((function(e){var t=e.row,r=e.rowProps,n=e.visibleColumns;return Object(k.jsx)(ke,{row:t,rowProps:r,visibleColumns:n})}),[]),b=a.a.useMemo((function(){return[{Header:function(){return null},id:"expander",Cell:function(e){var t=e.row;return t.original.expand?Object(k.jsx)("span",Object(m.a)(Object(m.a)({},t.getToggleRowExpandedProps()),{},{children:t.isExpanded?Object(k.jsx)(N.a,{glyph:"minus-sign"}):Object(k.jsx)(N.a,{glyph:"plus-sign"})})):Object(k.jsx)(k.Fragment,{})},SubCell:function(e){return Object(k.jsx)("div",{className:"text-center",children:"|"})}},{Header:"Type",accessor:"item.name",Filter:T,filter:"text"},{Header:"Category",accessor:"item.cat",Filter:E,filter:"includes"},{Header:"Quantity",accessor:"quantity"},{Header:"Location",accessor:"location.name",Filter:E,filter:"includes"}]}),[]);return 0===t?Object(k.jsx)(Ne,{}):Object(k.jsx)(Ce,{children:Object(k.jsx)(u.a.Body,{children:Object(k.jsx)(M,{asyncExpandFunction:d,isLoading:s,isFetching:i,data:l,columns:b,error:o})})})},Be=function(){var e=Object(n.useState)(0),t=Object(fe.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(0),s=Object(fe.a)(c,2),i=s[0],o=s[1];return Object(k.jsx)(Ce,{children:Object(k.jsxs)(u.a.Body,{className:"flex-container-vert-fill",children:[Object(k.jsx)(Pe,{setCorporation:o}),Object(k.jsx)(ge,{corporation_id:i,setLocation:a}),Object(k.jsx)(He,{corporation_id:i,location_id:r})]})})},ze=function(e){var t=e.corporation_id,r=Object(j.useQuery)(["wallet",t],(function(){return function(e){return de.apply(this,arguments)}(t)}),{initialData:[]}),n=r.isLoading,c=r.isFetching,s=r.error,i=r.data,o=a.a.useMemo((function(){return[{Header:"Date",accessor:"date",Cell:function(e){return Object(k.jsxs)("div",{children:[" ",new Date(e.value).toLocaleString()," "]})}},{Header:"Type",accessor:"ref_type",Filter:E,filter:"includes"},{Header:"First Party",accessor:"first_party.name",Filter:E,filter:"includes"},{Header:"Second Party",accessor:"second_party.name",Filter:E,filter:"includes"},{Header:"Amount",accessor:"amount",Cell:function(e){return Object(k.jsxs)("div",{children:[" ",e.value.toLocaleString()," "]})}},{Header:"Ballance",accessor:"balance",Cell:function(e){return Object(k.jsxs)("div",{children:[" ",e.value.toLocaleString()," "]})}},{Header:"Reason",accessor:"reason",Filter:T,filter:"text"}]}),[]);return 0===t?Object(k.jsx)(Ne,{}):Object(k.jsx)(Ce,{children:Object(k.jsx)(u.a.Body,{children:Object(k.jsx)(M,{isLoading:n,isFetching:c,data:i,columns:o,error:s})})})},Ae=function(){var e=Object(n.useState)(0),t=Object(fe.a)(e,2),r=t[0],a=t[1];return Object(k.jsx)(Ce,{children:Object(k.jsxs)(u.a.Body,{className:"flex-container-vert-fill",children:[Object(k.jsx)(Pe,{setCorporation:a}),Object(k.jsx)(ze,{corporation_id:r})]})})},Re=new j.QueryClient;s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(J.a,{children:Object(k.jsxs)(j.QueryClientProvider,{client:Re,children:[Object(k.jsx)("br",{}),Object(k.jsx)(he,{}),Object(k.jsx)(u.a,{bsStyle:"default",children:Object(k.jsxs)(q.c,{children:[Object(k.jsx)(q.a,{exact:!0,path:["","/structures"],component:function(){return X()}}),Object(k.jsx)(q.a,{path:"/wallets",component:function(){return Ae()}}),Object(k.jsx)(q.a,{path:"/status",component:function(){return Oe()}}),Object(k.jsx)(q.a,{path:"/assetgroup",component:function(){return _e()}}),Object(k.jsx)(q.a,{path:"/assetlist",component:function(){return Be()}})]})})]})})}),document.getElementById("root")),i(console.log)},96:function(e,t,r){}},[[277,1,2]]]);
//# sourceMappingURL=main.70f9bcda.chunk.js.map