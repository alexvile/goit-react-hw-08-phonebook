"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[434],{5434:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,i,a,o,s,c,d,l,u,p=t(9434),x=t(885),h=t(2791),g=t(8966),f=t(616),m=t(3661),b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},v=t(168),j=t(4926),w=j.Z.form(r||(r=(0,v.Z)(["\n  padding: 10px;\n  border: 1px dashed #c9c9c9;\n  border-radius: 4px;\n"]))),Z=j.Z.div(i||(i=(0,v.Z)(["\n  margin-bottom: 18px;\n"]))),y=j.Z.label(a||(a=(0,v.Z)(["\n  display: block;\n  font-family: 'Lato', sans-serif;\n  font-weight: 400;\n  color: #000;\n  line-height: 1.2;\n  font-size: 14px;\n  margin-bottom: 4px;\n"]))),C=j.Z.input(o||(o=(0,v.Z)(["\n  width: 100%;\n  font-family: 'Lato', sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  border-radius: 4px;\n  padding: 8px 12px;\n  border: 1px solid grey;\n  &:focus {\n    outline: 1px solid #42a1ec;\n  }\n"]))),k=j.Z.button(s||(s=(0,v.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n\n  background-image: linear-gradient(#42a1ec, #0070c9);\n  border: 1px solid #0077cc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n\n  font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',\n    Helvetica, Arial, sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  letter-spacing: -0.022em;\n  line-height: 1.47059;\n  min-width: 30px;\n  overflow: visible;\n  padding: 4px 15px;\n  text-align: center;\n  vertical-align: baseline;\n  user-select: none;\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.3;\n  }\n  &:hover {\n    background-image: linear-gradient(#51a9ee, #147bcd);\n    border-color: #1482d0;\n    text-decoration: none;\n  }\n  &:active {\n    background-image: linear-gradient(#3d94d9, #0067b9);\n    border-color: #006dbc;\n    outline: none;\n  }\n\n  &:focus {\n    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;\n    outline: none;\n  }\n"]))),z=t(184);function E(){var n=(0,h.useState)(""),e=(0,x.Z)(n,2),t=e[0],r=e[1],i=(0,h.useState)(""),a=(0,x.Z)(i,2),o=a[0],s=a[1],c=b(),d=b(),l=(0,p.I0)(),u=(0,p.v9)(m.K2),v=(0,p.v9)(m.yC),j=function(n){var e,t=n.name.toLowerCase(),r=u.find((function(n){return n.name.toLowerCase()===t}));r?f.Am.warning('Contact "'.concat(r.name,'" is already in contacts')):(e=n,l((0,m.uK)(e)),f.Am.success('Contact "'.concat(e.name,'" has been succesfully added')),F())},E=function(n){switch(n.currentTarget.name){case"name":r(n.currentTarget.value);break;case"number":s(n.currentTarget.value);break;default:return}},F=function(){r(""),s("")};return(0,z.jsxs)(w,{onSubmit:function(n){n.preventDefault(),j({name:t,number:o})},children:[(0,z.jsxs)(Z,{children:[(0,z.jsx)(y,{htmlFor:c,children:"Name"}),(0,z.jsx)(C,{id:c,onChange:E,value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,z.jsxs)(Z,{children:[(0,z.jsx)(y,{htmlFor:d,children:"Phone"}),(0,z.jsx)(C,{id:d,onChange:E,value:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,z.jsxs)(k,{type:"submit",disabled:v,children:[(0,z.jsx)("span",{children:"Add contact"}),v&&(0,z.jsx)(g.gy,{height:"20",width:"20",color:"#e3e4ed",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0})]})]})}var F,S,A,_,L,P=j.Z.form(c||(c=(0,v.Z)(["\n  padding: 10px;\n  border: 1px dashed #c9c9c9;\n  border-radius: 4px;\n"]))),I=j.Z.label(d||(d=(0,v.Z)(["\n  display: block;\n  font-family: 'Lato', sans-serif;\n  font-weight: 400;\n  color: #000;\n  line-height: 1.2;\n  font-size: 18px;\n  margin-bottom: 4px;\n"]))),K=j.Z.input(l||(l=(0,v.Z)(["\n  width: 100%;\n  font-family: 'Lato', sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  border-radius: 4px;\n  padding: 8px 12px;\n  border: 1px solid grey;\n  &:focus {\n    outline: 1px solid #42a1ec;\n  }\n"]))),N=j.Z.span(u||(u=(0,v.Z)(["\n  display: block;\n  margin-bottom: 6px;\n  font-size: 14px;\n"]))),T=function(){var n=(0,p.v9)(m.zK),e=(0,p.I0)();return(0,z.jsx)(P,{children:(0,z.jsxs)(I,{children:[(0,z.jsx)(N,{children:"Find contacts by name"}),(0,z.jsx)(K,{type:"text",value:n,onChange:function(n){e((0,m.Tv)(n.currentTarget.value))}})]})})},B=t(1454),M=t(2134),H=t(9652),U=t(1153),V=j.Z.h1(F||(F=(0,v.Z)(["\n  text-align: center;\n"]))),q=function(n){var e=n.contactName,t=n.contactNumber,r=n.contactId,i=n.onClose,a=(0,p.v9)(m.K2),o=(0,p.I0)(),s=(0,h.useState)(e),c=(0,x.Z)(s,2),d=c[0],l=c[1],u=(0,h.useState)(t),g=(0,x.Z)(u,2),b=g[0],v=g[1],j=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":return l(r);case"number":return v(r);default:return}};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(V,{children:"Edit contact"}),(0,z.jsxs)(w,{onSubmit:function(n){n.preventDefault();var e=d,t=e.toLowerCase(),s=a.find((function(n){return n.name.toLowerCase()===t}));s?f.Am.warning('Contact "'.concat(s.name,'" is already in contacts')):(o((0,m.Tk)({id:r,name:d,number:b})),f.Am.success('Contact "'.concat(e,'" has been succesfully edited')),i())},children:[(0,z.jsxs)(Z,{children:[(0,z.jsx)(y,{children:"Name"}),(0,z.jsx)(C,{type:"text",name:"name",value:d,onChange:j})]}),(0,z.jsxs)(Z,{children:[(0,z.jsx)(y,{children:"Phone"}),(0,z.jsx)(C,{type:"tel",name:"number",value:b,onChange:j})]}),(0,z.jsx)(k,{type:"submit",children:"Edit"})]})]})},D=function(n){var e=n.id,t=n.name,r=n.number,i=(0,h.useState)(!1),a=(0,x.Z)(i,2),o=a[0],s=a[1],c=function(){s(!o)},d=(0,p.I0)(),l=(0,p.v9)(m.RM),u=(0,p.v9)(m.j);return(0,z.jsxs)(H.Zb,{children:[(0,z.jsxs)(H.SK,{children:[(0,z.jsxs)("span",{children:[t,": "]}),(0,z.jsx)("span",{children:r})]}),(0,z.jsxs)(H.EK,{children:[(0,z.jsxs)(H.zf,{type:"button",onClick:c,disabled:u,children:[(0,z.jsx)("span",{children:"Edit\xa0"}),(0,z.jsx)(M.QML,{})]}),(0,z.jsx)(H.zf,{type:"button",disabled:l,onClick:function(){return function(n,e){d((0,m.GK)(n)),f.Am.success('Contact "'.concat(e,'" has been succesfully deleted'))}(e,t)},children:l?(0,z.jsx)(g.gy,{height:"12",width:"12",color:"#e3e4ed",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0}):(0,z.jsx)(M.VPh,{})})]}),o&&(0,z.jsx)(U.Z,{onClose:c,children:(0,z.jsxs)(H._6,{children:[(0,z.jsx)(H.ZB,{onClick:c,children:(0,z.jsx)(M.oHP,{})}),(0,z.jsx)(q,{contactName:t,contactNumber:r,contactId:e,onClose:c})]})})]})},O=j.Z.ul(S||(S=(0,v.Z)(["\n  margin-top: 12px;\n  padding-left: 5px;\n  padding-right: 5px;\n"]))),R=t(4122),G=function(){var n=(0,p.I0)();(0,h.useEffect)((function(){n((0,m.yF)())}),[n]);var e=(0,p.v9)(m.hg),t=(0,p.v9)(m.K2),r=(0,p.v9)(m.zK).toLowerCase(),i=t.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,z.jsxs)(O,{children:[e&&(0,z.jsx)(B.a,{}),i.length>0&&i.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,z.jsx)(D,{id:e,name:t,number:r},e)})),0===t.length&&(0,z.jsxs)("div",{children:[(0,z.jsx)("p",{children:"You haven't any contact yet..."}),(0,z.jsx)("div",{children:(0,z.jsx)("img",{src:R,width:"128",alt:"Panda"})})]})]})},J=j.Z.div(A||(A=(0,v.Z)(["\n  padding: 10px 40px;\n"]))),Q=j.Z.h1(_||(_=(0,v.Z)(["\n  font-size: 22px;\n  margin-top: 6px;\n"]))),Y=j.Z.h2(L||(L=(0,v.Z)(["\n  margin-top: 12px;\n  margin-bottom: 6px;\n  font-size: 20px;\n"]))),$=t(9471),W=function(){var n=(0,p.v9)(m.N3);return(0,z.jsx)(J,{children:n?(0,z.jsx)($.j,{children:n}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Q,{children:"Phonebook"}),(0,z.jsx)(E,{}),(0,z.jsx)(Y,{children:"Contacts"}),(0,z.jsx)(T,{}),(0,z.jsx)(G,{})]})})}},9652:function(n,e,t){t.d(e,{EK:function(){return x},SK:function(){return p},ZB:function(){return f},Zb:function(){return u},_6:function(){return g},zf:function(){return h}});var r,i,a,o,s,c,d=t(168),l=t(4926),u=l.Z.li(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n  &:before {\n    position: absolute;\n    content: '';\n    display: block;\n    width: 20px;\n    height: 20px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='logo_x5F_contacts_x5F_192px_1_' x='0px' y='0px' viewBox='0 0 500 500' enable-background='new 0 0 500 500' xml:space='preserve'%3E%3Cg id='art_layer'%3E%3Ccircle id='bg_circle' fill='%231A73E8' cx='250' cy='250' r='250'/%3E%3Cpath id='body_shadow' fill='%23185ABC' d='M332.4,375H170.5c-19.6,0-36.9-11.8-36.9-31.2V358c0,19.4,17.3,34.1,36.9,34.1h161.9 c19.6,0,36.9-14.7,36.9-34.1v-14.2C369.3,363.2,352,375,332.4,375z'/%3E%3Cpath id='head_shadow' fill='%23185ABC' d='M250,227.3c-29.3-0.1-52.4-20.4-54-48.3v11.4c0,28.9,24.2,54,54,54s54-25.1,54-54V179 C301.7,207.1,279.3,227.4,250,227.3z'/%3E%3Cg id='subject'%3E%3Cpath id='body' fill='%23FFFFFF' d='M250,261.4c-57,0-116.5,27.8-116.5,65.3v17c0,19.4,15.9,34.1,35.5,34.1h164.7 c19.6,0,35.5-14.7,35.5-34.1v-17C369.3,289.1,307,261.4,250,261.4z'/%3E%3Ccircle id='head' fill='%23FFFFFF' cx='250' cy='176.1' r='54'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  }\n"]))),p=l.Z.div(i||(i=(0,d.Z)(["\n  margin-right: 20px;\n  padding-left: 30px;\n"]))),x=l.Z.div(a||(a=(0,d.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),h=l.Z.button(o||(o=(0,d.Z)(["\n  background-image: linear-gradient(#42a1ec, #0070c9);\n  border: 1px solid #0077cc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: block;\n  font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',\n    Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: -0.022em;\n  line-height: 1;\n  min-width: 30px;\n  overflow: visible;\n  padding: 4px 15px;\n  text-align: center;\n  user-select: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  &:disabled {\n    cursor: default;\n    opacity: 0.3;\n  }\n  &:hover {\n    background-image: linear-gradient(#51a9ee, #147bcd);\n    border-color: #1482d0;\n    text-decoration: none;\n  }\n  &:active {\n    background-image: linear-gradient(#3d94d9, #0067b9);\n    border-color: #006dbc;\n    outline: none;\n  }\n\n  &:focus {\n    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;\n    outline: none;\n  }\n"]))),g=l.Z.div(s||(s=(0,d.Z)(["\n  min-width: 400px;\n  padding: 15px;\n  position: relative;\n"]))),f=l.Z.button(c||(c=(0,d.Z)(["\n  margin-left: auto;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  border: none;\n  background-color: transparent;\n  &:hover svg {\n    fill: #ed282d;\n  }\n  svg {\n    width: 18px;\n    height: 18px;\n  }\n"])))},9471:function(n,e,t){t.d(e,{j:function(){return u}});var r,i,a=t(168),o=t(4926),s=o.Z.div(r||(r=(0,a.Z)(["\n  padding: 40px;\n"]))),c=o.Z.p(i||(i=(0,a.Z)(["\n  font-size: 24px;\n  color: #ed282d;\n"]))),d=t(1470),l=t(184),u=function(n){var e=n.children,t=n.addMessage,r=void 0===t?null:t,i=!1;return i=!!e.includes("400"),(0,l.jsxs)(s,{children:[i?(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Ups, something went wrong"}),r&&(0,l.jsx)(c,{children:r}),(0,l.jsx)("p",{children:"Erorr message:"}),(0,l.jsx)("p",{children:e})]}):(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Ups, something went wrong"}),(0,l.jsx)("p",{children:"Please try again later"}),(0,l.jsx)("p",{children:"Erorr message:"}),(0,l.jsx)("p",{children:e})]}),(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:d,width:"200",alt:"Sad panda"})})]})}},1153:function(n,e,t){t.d(e,{Z:function(){return x}});var r,i,a=t(2791),o=t(4164),s=t(168),c=t(4926),d=c.Z.div(r||(r=(0,s.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),l=c.Z.div(i||(i=(0,s.Z)(["\n  background-color: white;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),u=t(184),p=document.getElementById("modal-root");function x(n){var e=n.onClose,t=n.children;(0,a.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,o.createPortal)((0,u.jsx)(d,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,u.jsx)(l,{children:t})}),p)}},4122:function(n,e,t){n.exports=t.p+"static/media/panda-laptop.2933e87454862af418e8.png"},1470:function(n,e,t){n.exports=t.p+"static/media/sad-panda.f01b98ad40657ef5319d.png"}}]);
//# sourceMappingURL=434.4e908e1d.chunk.js.map