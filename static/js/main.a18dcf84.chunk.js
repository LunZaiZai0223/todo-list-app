(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(7),o=n.n(s),a=(n(12),n(2)),u=(n(13),n(4)),d=n(0),l=function(t){var e=t.todos,n=t.setTodos,c=t.inputText,i=t.setInputText;return Object(d.jsx)("form",{className:"todo-input-form",onSubmit:function(t){t.preventDefault(),n([].concat(Object(u.a)(e),[{assignment:c,isCompleted:!1,id:(new Date).getTime()}])),i("")},children:Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("input",{value:c,onChange:function(t){i(t.target.value)},className:"todo-input"}),Object(d.jsx)("button",{type:"submit",className:"todo-input-submit",children:"+"})]})})},r=function(t){var e=t.todos,n=t.setTodos,c=t.filterTodos,i=t.setEditingInput,s=t.editingInput,o=t.isEditing,a=t.setIsEditing;function l(t,c){"complete"===t?function(t){var c=Object(u.a)(e).map((function(e){return e.id===t&&(e.isCompleted=!e.isCompleted),e}));console.log(c),n(c)}(c):"edit"===t?(console.log(t,c),a(c)):"delete"===t&&function(t){n(e.filter((function(e){return e.id!==t})))}(c)}function r(t,c){t.preventDefault(),function(t){var c=Object(u.a)(e).map((function(e){return e.id===t&&(e.assignment=s),e}));n(c),a(null),i("")}(c)}function m(){a(null)}function j(t){return 0===t.todos.length?Object(d.jsx)("p",{className:"nothing-to-do",children:"Nothing To Do"}):null}return Object(d.jsxs)("div",{className:"todo-list-container",children:[Object(d.jsx)(j,{todos:e}),Object(d.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(d.jsx)("li",{className:"todo-item-wrapper",children:o===t.id?Object(d.jsx)("div",{className:"todo-edit-item",children:Object(d.jsxs)("form",{onSubmit:function(e){return r(e,t.id)},children:[Object(d.jsxs)("p",{children:["\u628a ",t.assignment," \u6539\u6210"]}),Object(d.jsx)("input",{onChange:function(t){return i(t.target.value)}}),Object(d.jsxs)("div",{className:"edit-button-group",children:[Object(d.jsx)("button",{type:"button",onClick:m,children:"Cancel"}),Object(d.jsx)("button",{type:"submit",children:"Save"})]})]})}):Object(d.jsxs)("div",{className:"todo-item",children:[Object(d.jsxs)("div",{className:"todo-complete-item",children:[Object(d.jsx)("input",{type:"checkbox",id:t.id,onChange:function(){return l("complete",t.id)},className:t.isCompleted?"todo-is-completed":"todo-is-not-completed-yet"}),Object(d.jsx)("label",{className:t.isCompleted?"todo-is-completed-text":"",htmlFor:t.id,children:t.assignment})]}),Object(d.jsxs)("div",{className:"todo-button-group",children:[Object(d.jsx)("button",{onClick:function(){return l("edit",t.id)},children:Object(d.jsx)("i",{className:"fas fa-edit"})}),Object(d.jsx)("button",{onClick:function(){return l("delete",t.id)},children:Object(d.jsx)("i",{className:"fas fa-trash-alt"})})]})]})},t.id)}))})]})},m=function(t){var e=t.setFilterState,n=t.filterState;function c(t){!function(t){"all"===t&&e(t)}(t),function(t){"active"===t&&e(t)}(t),function(t){"completed"===t&&e(t)}(t)}return Object(d.jsxs)("div",{className:"filter-buttons-container",children:[Object(d.jsx)("button",{className:"all"===n?"filter-button-is-selected":"default-filter-button",onClick:function(){return c("all")},children:"ALL"}),Object(d.jsx)("button",{className:"active"===n?"filter-button-is-selected":"default-filter-button",onClick:function(){return c("active")},children:"ACTIVE"}),Object(d.jsx)("button",{className:"completed"===n?"filter-button-is-selected":"default-filter-button",onClick:function(){return c("completed")},children:"COMPLETED"})]})},j=function(t){var e=t.currentDate,n=t.todos,c=e.month,i=e.date,s=e.day;return Object(d.jsxs)("div",{className:"todo-header",children:[Object(d.jsxs)("div",{className:"date-wrapper",children:[Object(d.jsxs)("div",{className:"date",children:[Object(d.jsxs)("span",{children:[s,","]})," ",i,"th"]}),Object(d.jsx)("div",{className:"month",children:c})]}),Object(d.jsxs)("div",{className:"task-wrapper",children:["Total Tasks: ",Object(d.jsx)("span",{children:n.length})]})]})};var b=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)([]),o=Object(a.a)(s,2),u=o[0],b=o[1],f=Object(c.useState)("all"),h=Object(a.a)(f,2),p=h[0],O=h[1],x=Object(c.useState)([]),v=Object(a.a)(x,2),g=v[0],N=v[1],y=Object(c.useState)(null),C=Object(a.a)(y,2),S=C[0],T=C[1],D=Object(c.useState)(""),E=Object(a.a)(D,2),k=E[0],I=E[1],w=Object(c.useState)({}),F=Object(a.a)(w,2),M=F[0],J=F[1];return Object(c.useEffect)((function(){"all"===p?N(u):"active"===p?N(u.filter((function(t){return!1===t.isCompleted}))):"completed"===p&&N(u.filter((function(t){return!0===t.isCompleted})))}),[p,u]),Object(c.useEffect)((function(){!function(){var t=[{num:0,month:"January"},{num:1,month:"February"},{num:2,month:"March"},{num:3,month:"April"},{num:4,month:"May"},{num:5,month:"June"},{num:6,month:"July"},{num:7,month:"August"},{num:8,month:"September"},{num:9,month:"October"},{num:10,month:"November"},{num:11,month:"December"}],e=[{num:0,day:"Sunday"},{num:1,day:"Monday"},{num:2,day:"Tuesday"},{num:3,day:"Wednesday"},{num:4,day:"Thursday"},{num:5,day:"Friday"},{num:6,day:"Saturday"}],n=(new Date).getMonth(),c=(new Date).getDay(),i=t.filter((function(t){return t.num===n}))[0].month,s=(new Date).getDate(),o=e.filter((function(t){return t.num===c}))[0].day;J({month:i,date:s,day:o})}()}),[]),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"todo-card",children:[Object(d.jsx)(j,{currentDate:M,todos:u}),Object(d.jsx)(l,{inputText:n,setInputText:i,setTodos:b,todos:u}),Object(d.jsx)(r,{todos:u,setTodos:b,filterState:p,filterTodos:g,setEditingInput:I,editingInput:k,isEditing:S,setIsEditing:T}),Object(d.jsx)(m,{setFilterState:O,filterState:p})]})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),s(t),o(t)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.a18dcf84.chunk.js.map