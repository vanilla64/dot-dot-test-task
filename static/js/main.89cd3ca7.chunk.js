(this["webpackJsonpdot-dot-test-task"]=this["webpackJsonpdot-dot-test-task"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(4),l=a.n(r),i=(a(9),a(0));var n=function(e){var t=e.title;return Object(i.jsx)("h1",{className:"title",children:t})};var _=function(e){return Object(i.jsx)("textarea",{placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0432\u044a\u0435\u0437\u0434\u0430 \u043d\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044e \u0441\u043a\u043b\u0430\u0434\u0430 \u0438\u043b\u0438 \u043f\u043e\u0434\u044a\u0435\u0437\u0434\u0430 \u043a \u0430\u0434\u0440\u0435\u0441\u0443",className:"form__textarea",cols:"30",rows:"10"})};var o=function(e){var t=e.children,a=e.type,s=e.count,c=e.title;return Object(i.jsxs)("fieldset",{className:"form__fieldset form__fieldset_type_".concat(a),children:[Object(i.jsxs)("div",{className:"form__title",children:[Object(i.jsx)("div",{className:"form__count",children:Object(i.jsx)("span",{children:s})}),Object(i.jsx)("h3",{className:"form__text",children:c})]}),t]})};var m=function(e){return Object(i.jsxs)(o,{type:"direction",count:"1",title:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442",children:[Object(i.jsxs)("label",{className:"form__label form__label_dir_row",children:[Object(i.jsx)("p",{className:"form__input-name",children:"\u041e\u0442\u043a\u0443\u0434\u0430"}),Object(i.jsx)("div",{className:"form__input-wrap form__input-wrap_color_light",children:Object(i.jsx)("input",{className:"form__input form__input_width_full"})})]}),Object(i.jsxs)("label",{className:"form__label form__label_dir_row",children:[Object(i.jsx)("p",{className:"form__input-name",children:"\u041a\u0443\u0434\u0430"}),Object(i.jsx)("div",{className:"form__input-wrap form__input-wrap_color_light",children:Object(i.jsx)("input",{className:"form__input form__input_width_full"})})]})]})};var d=function(e){var t=e.id,a=e.value,s=e.name;return Object(i.jsx)("li",{children:Object(i.jsxs)("label",{htmlFor:t,className:"form__label form__label_type_radio form__label_type_option",children:[Object(i.jsx)("span",{children:a}),Object(i.jsx)("input",{value:a,id:t,className:"form__input",type:"radio",name:s})]})})},j=a(2),b=a.p+"static/media/chevron-down.2172327c.svg";var p=function(e){var t=e.children,a=Object(s.useState)(""),c=Object(j.a)(a,2),r=c[0],l=c[1],n=Object(s.useState)(!1),_=Object(j.a)(n,2),o=_[0],m=_[1],d={optionList:o?"form__list form__list_visible":"form__list",input:"form__input form__input_width_half",optionInput:"form__input",dropdownIcon:o?"form__dropdown-icon form__dropdown-icon_up":"form__dropdown-icon"};return Object(i.jsxs)("div",{className:"form__dropdown-wrap",children:[Object(i.jsx)("img",{className:d.dropdownIcon,src:b,alt:"dropdown-icon"}),Object(i.jsx)("div",{className:"form__input-wrap form__input-wrap_width_half",children:Object(i.jsx)("input",{onClick:function(){if(o)return m(!1);m(!0)},value:r||"",type:"text",readOnly:!0,placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u0430",className:d.input})}),Object(i.jsx)("ul",{onClick:function(e){l(e.target.value),m(!1)},className:d.optionList,children:t})]})};var u=function(e){return Object(i.jsx)(o,{type:"transport",count:"2",title:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",children:Object(i.jsxs)("div",{className:"form__input-container",children:[Object(i.jsxs)("label",{className:"form__label form__label_width_half",children:[Object(i.jsx)("p",{className:"form__input-name",children:"\u0413\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0451\u043c\u043d\u043e\u0441\u0442\u044c"}),Object(i.jsxs)(p,{children:[Object(i.jsx)(d,{id:"1000kg",value:"1 \u0442\u043e\u043d\u043d\u0430",name:"weight"}),Object(i.jsx)(d,{id:"2000kg",value:"2 \u0442\u043e\u043d\u043d\u044b",name:"weight"}),Object(i.jsx)(d,{id:"3000kg",value:"3 \u0442\u043e\u043d\u043d\u044b",name:"weight"})]})]}),Object(i.jsxs)("label",{className:"form__label form__label_width_half",children:[Object(i.jsx)("p",{className:"form__input-name",children:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u0433\u0440\u0443\u0437\u043a\u0438"}),Object(i.jsxs)(p,{children:[Object(i.jsx)(d,{id:"frontLoading",value:"\u0417\u0430\u0434\u043d\u044f\u044f",name:"loadingType"}),Object(i.jsx)(d,{id:"rearLoading",value:"\u041f\u0435\u0440\u0435\u0434\u043d\u044f\u044f",name:"loadingType"})]})]})]})})};var f=function(e){var t=Object(s.useState)(!1),a=Object(j.a)(t,2),c=a[0],r=a[1];return Object(i.jsxs)(o,{type:"cargo",count:"3",title:"\u0413\u0440\u0443\u0437",children:[Object(i.jsx)("div",{className:"form__input-container",children:Object(i.jsxs)("label",{className:"form__label form__label_dir_row",children:[Object(i.jsx)("p",{className:"form__input-name",children:"\u0422\u0438\u043f \u0433\u0440\u0443\u0437\u0430"}),Object(i.jsxs)(p,{children:[Object(i.jsx)(d,{id:"option-1",value:"\u0414\u043b\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u0438\u043d\u043d\u044b\u044b\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",name:"cargoType"}),Object(i.jsx)(d,{id:"option-2",value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 2",name:"cargoType"}),Object(i.jsx)(d,{id:"option-3",value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 3",name:"cargoType"}),Object(i.jsx)(d,{id:"option-4",value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 4",name:"cargoType"}),Object(i.jsx)(d,{id:"option-5",value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 5",name:"cargoType"})]})]})}),Object(i.jsxs)("div",{className:"form__input-container",children:[Object(i.jsxs)("label",{className:"form__label form__label_width_half",children:[Object(i.jsx)("p",{className:"form__input-name",children:"\u041a\u043b\u0430\u0441\u0441 \u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438"}),Object(i.jsxs)(p,{children:[Object(i.jsx)(d,{id:"class-1",value:"\u041a\u043b\u0430\u0441\u0441 1",name:"dangerClass"}),Object(i.jsx)(d,{id:"class-2",value:"\u041a\u043b\u0430\u0441\u0441 2",name:"dangerClass"}),Object(i.jsx)(d,{id:"class-3",value:"\u041a\u043b\u0430\u0441\u0441 3",name:"dangerClass"})]})]}),Object(i.jsxs)("label",{className:"form__label form__label_width_half",children:[Object(i.jsx)("p",{className:"form__input-name",children:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u0430\u044f \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u044c, \u20bd"}),Object(i.jsx)("input",{className:"form__input form__input_width_half",placeholder:"\u2265 1"})]})]}),Object(i.jsxs)("label",{onClick:function(e){if(!e.target.checked)return r(!1);r(!0)},className:"form__label form__label_type_checkbox",children:[Object(i.jsx)("input",{className:"form__input form__input_type_checkbox",type:"checkbox",name:"",id:""}),Object(i.jsx)("div",{className:"form__visible-checkbox"}),Object(i.jsx)("p",{className:"form__input-name",children:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c"})]}),c&&Object(i.jsxs)("div",{className:"form__input-container form__input-container_type_temp",children:[Object(i.jsxs)("label",{className:"form__label form__label_width_half",children:[Object(i.jsx)("p",{className:"form__input-name",children:"\u041e\u0442, \xb0C"}),Object(i.jsx)("input",{value:"-20",className:"form__input form__input_width_half"})]}),Object(i.jsxs)("label",{className:"form__label form__label_width_half",children:[Object(i.jsx)("p",{className:"form__input-name",children:"\u0414\u043e, \xb0C"}),Object(i.jsx)("input",{value:"+23",className:"form__input form__input_width_half"})]})]})]})};var x=function(e){var t=Object(s.useState)([]),a=Object(j.a)(t,2),c=a[0],r=a[1],l=Object(s.useState)([]),n=Object(j.a)(l,2),_=n[0],m=n[1],d=Object(s.useState)([]),b=Object(j.a)(d,2),p=b[0],u=b[1];Object(s.useEffect)((function(){r(document.querySelectorAll(".form__input_type_radio")),m(document.querySelectorAll(".form__btn")),u(document.querySelectorAll(".form__input_type_address"))}),[]);var f=function(e){var t=e.target,a=e.currentTarget,s=a.closest(".form__label").querySelector(".form__btn"),r=a.closest(".form__label").querySelector(".form__input"),l=a.closest(".form__label").querySelector(".form__input_type_address");t.classList.contains("form__input_type_address")||(_.forEach((function(e){e.setAttribute("disabled","disabled")})),p.forEach((function(e){e.setAttribute("disabled","disabled")})),c.forEach((function(e){e===r&&(s.removeAttribute("disabled"),l.removeAttribute("disabled"))})))};return Object(i.jsxs)(o,{type:"time",count:"4",title:"\u0412\u0440\u0435\u043c\u044f",children:[Object(i.jsxs)("div",{className:"form__text-wrap",children:[Object(i.jsx)("p",{className:"form__where-text",children:"\u041a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u0431\u044b\u0442\u044c \u043d\u0430 \u0442\u043e\u0447\u043a\u0443"}),Object(i.jsx)("p",{className:"form__distance-text",children:"700 \u043a\u043c \u0432 \u0434\u0435\u043d\u044c"})]}),Object(i.jsxs)("label",{onClick:f,htmlFor:"address-1",className:"form__label form__label_type_radio",children:[Object(i.jsx)("input",{className:"form__input form__input_type_radio",type:"radio",name:"address",id:"address-1"}),Object(i.jsx)("div",{className:"form__visible-radio"}),Object(i.jsx)("div",{className:"form__input-wrap form__input-wrap_color_dark",children:Object(i.jsx)("input",{disabled:!0,className:"form__input form__input_type_address",type:"text",placeholder:"\u0410\u0434\u0440\u0435\u0441 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})}),Object(i.jsx)("button",{disabled:!0,className:"form__btn",children:Object(i.jsx)("span",{className:"form__btn-text",children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"})})]}),Object(i.jsxs)("label",{onClick:f,htmlFor:"address-2",className:"form__label form__label_type_radio",children:[Object(i.jsx)("input",{className:"form__input form__input_type_radio",type:"radio",name:"address",id:"address-2"}),Object(i.jsx)("div",{className:"form__visible-radio"}),Object(i.jsx)("div",{className:"form__input-wrap form__input-wrap_color_dark",children:Object(i.jsx)("input",{disabled:!0,className:"form__input form__input_type_address",type:"text",placeholder:"\u0410\u0434\u0440\u0435\u0441 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})}),Object(i.jsx)("button",{disabled:!0,className:"form__btn",children:Object(i.jsx)("span",{className:"form__btn-text",children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"})})]})]})};var h=function(e){return Object(i.jsxs)("form",{className:"form",children:[Object(i.jsx)(m,{}),Object(i.jsx)(u,{}),Object(i.jsx)(f,{}),Object(i.jsx)(x,{}),Object(i.jsx)(_,{})]})};var O=function(e){return Object(i.jsx)("div",{className:"tooltip",children:Object(i.jsx)("p",{className:"tooltip__text",children:"\u0414\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0433\u0440\u0443\u0437\u0430, \u043f\u0443\u043d\u043a\u0442\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438 \u043f\u0440\u0438\u0431\u044b\u0442\u0438\u044f."})})};var N=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("section",{className:"content",children:[Object(i.jsx)(n,{title:"FTL: \u041f\u0440\u044f\u043c\u0430\u044f \u043c\u0430\u0448\u0438\u043d\u0430"}),Object(i.jsx)(h,{}),Object(i.jsx)(O,{})]})})};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.89cd3ca7.chunk.js.map