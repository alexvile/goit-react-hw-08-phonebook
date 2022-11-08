"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[811],{6811:function(n,e,t){t.r(e),t.d(e,{default:function(){return gn}});var r,i,a,o,s,c,d,l,u,p=t(9434),x=t(885),h=t(2791),g=t(8966),f=t(616),m=t(3661),b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},v=t(168),j=t(4926),w=j.Z.form(r||(r=(0,v.Z)(["\n  padding: 10px;\n  border: 1px dashed #c9c9c9;\n  border-radius: 4px;\n"]))),y=j.Z.div(i||(i=(0,v.Z)(["\n  margin-bottom: 18px;\n"]))),Z=j.Z.label(a||(a=(0,v.Z)(["\n  display: block;\n  font-family: 'Lato', sans-serif;\n  font-weight: 400;\n  color: #000;\n  line-height: 1.2;\n  font-size: 14px;\n  margin-bottom: 4px;\n"]))),C=j.Z.input(o||(o=(0,v.Z)(["\n  width: 100%;\n  font-family: 'Lato', sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  border-radius: 4px;\n  padding: 8px 12px;\n  border: 1px solid grey;\n  &:focus {\n    outline: 1px solid #42a1ec;\n  }\n"]))),k=j.Z.button(s||(s=(0,v.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n\n  background-image: linear-gradient(#42a1ec, #0070c9);\n  border: 1px solid #0077cc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n\n  font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',\n    Helvetica, Arial, sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  letter-spacing: -0.022em;\n  line-height: 1.47059;\n  min-width: 30px;\n  overflow: visible;\n  padding: 4px 15px;\n  text-align: center;\n  vertical-align: baseline;\n  user-select: none;\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.3;\n  }\n  &:hover {\n    background-image: linear-gradient(#51a9ee, #147bcd);\n    border-color: #1482d0;\n    text-decoration: none;\n  }\n  &:active {\n    background-image: linear-gradient(#3d94d9, #0067b9);\n    border-color: #006dbc;\n    outline: none;\n  }\n\n  &:focus {\n    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;\n    outline: none;\n  }\n"]))),F=t(184);function E(){var n=(0,h.useState)(""),e=(0,x.Z)(n,2),t=e[0],r=e[1],i=(0,h.useState)(""),a=(0,x.Z)(i,2),o=a[0],s=a[1],c=b(),d=b(),l=(0,p.I0)(),u=(0,p.v9)(m.K2),v=(0,p.v9)(m.yC),j=function(n){var e,t=n.name.toLowerCase(),r=u.find((function(n){return n.name.toLowerCase()===t}));r?f.Am.warning('Contact "'.concat(r.name,'" is already in contacts')):(e=n,l((0,m.uK)(e)),f.Am.success('Contact "'.concat(e.name,'" has been succesfully added')),z())},E=function(n){switch(n.currentTarget.name){case"name":r(n.currentTarget.value);break;case"number":s(n.currentTarget.value);break;default:return}},z=function(){r(""),s("")};return(0,F.jsxs)(w,{onSubmit:function(n){n.preventDefault(),j({name:t,number:o})},children:[(0,F.jsxs)(y,{children:[(0,F.jsx)(Z,{htmlFor:c,children:"Name"}),(0,F.jsx)(C,{id:c,onChange:E,value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,F.jsxs)(y,{children:[(0,F.jsx)(Z,{htmlFor:d,children:"Phone"}),(0,F.jsx)(C,{id:d,onChange:E,value:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,F.jsxs)(k,{type:"submit",disabled:v,children:[(0,F.jsx)("span",{children:"Add contact"}),v&&(0,F.jsx)(g.gy,{height:"20",width:"20",color:"#e3e4ed",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0})]})]})}var z,A,S,L,_,I,P,N,T,K=j.Z.form(c||(c=(0,v.Z)(["\n  padding: 10px;\n  border: 1px dashed #c9c9c9;\n  border-radius: 4px;\n"]))),H=j.Z.label(d||(d=(0,v.Z)(["\n  display: block;\n  font-family: 'Lato', sans-serif;\n  font-weight: 400;\n  color: #000;\n  line-height: 1.2;\n  font-size: 18px;\n  margin-bottom: 4px;\n"]))),M=j.Z.input(l||(l=(0,v.Z)(["\n  width: 100%;\n  font-family: 'Lato', sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  border-radius: 4px;\n  padding: 8px 12px;\n  border: 1px solid grey;\n  &:focus {\n    outline: 1px solid #42a1ec;\n  }\n"]))),B=j.Z.span(u||(u=(0,v.Z)(["\n  display: block;\n  margin-bottom: 6px;\n  font-size: 14px;\n"]))),V=function(){var n=(0,p.v9)(m.zK),e=(0,p.I0)();return(0,F.jsx)(K,{children:(0,F.jsxs)(H,{children:[(0,F.jsx)(B,{children:"Find contacts by name"}),(0,F.jsx)(M,{type:"text",value:n,onChange:function(n){e((0,m.Tv)(n.currentTarget.value))}})]})})},U=t(1454),q=t(2134),D=j.Z.li(z||(z=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n  &:before {\n    position: absolute;\n    content: '';\n    display: block;\n    width: 20px;\n    height: 20px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='logo_x5F_contacts_x5F_192px_1_' x='0px' y='0px' viewBox='0 0 500 500' enable-background='new 0 0 500 500' xml:space='preserve'%3E%3Cg id='art_layer'%3E%3Ccircle id='bg_circle' fill='%231A73E8' cx='250' cy='250' r='250'/%3E%3Cpath id='body_shadow' fill='%23185ABC' d='M332.4,375H170.5c-19.6,0-36.9-11.8-36.9-31.2V358c0,19.4,17.3,34.1,36.9,34.1h161.9 c19.6,0,36.9-14.7,36.9-34.1v-14.2C369.3,363.2,352,375,332.4,375z'/%3E%3Cpath id='head_shadow' fill='%23185ABC' d='M250,227.3c-29.3-0.1-52.4-20.4-54-48.3v11.4c0,28.9,24.2,54,54,54s54-25.1,54-54V179 C301.7,207.1,279.3,227.4,250,227.3z'/%3E%3Cg id='subject'%3E%3Cpath id='body' fill='%23FFFFFF' d='M250,261.4c-57,0-116.5,27.8-116.5,65.3v17c0,19.4,15.9,34.1,35.5,34.1h164.7 c19.6,0,35.5-14.7,35.5-34.1v-17C369.3,289.1,307,261.4,250,261.4z'/%3E%3Ccircle id='head' fill='%23FFFFFF' cx='250' cy='176.1' r='54'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  }\n"]))),O=j.Z.div(A||(A=(0,v.Z)(["\n  margin-right: 20px;\n  padding-left: 30px;\n"]))),R=j.Z.div(S||(S=(0,v.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),G=j.Z.button(L||(L=(0,v.Z)(["\n  background-image: linear-gradient(#42a1ec, #0070c9);\n  border: 1px solid #0077cc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: block;\n  font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',\n    Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: -0.022em;\n  line-height: 1;\n  min-width: 30px;\n  overflow: visible;\n  padding: 4px 15px;\n  text-align: center;\n  user-select: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  &:disabled {\n    cursor: default;\n    opacity: 0.3;\n  }\n  &:hover {\n    background-image: linear-gradient(#51a9ee, #147bcd);\n    border-color: #1482d0;\n    text-decoration: none;\n  }\n  &:active {\n    background-image: linear-gradient(#3d94d9, #0067b9);\n    border-color: #006dbc;\n    outline: none;\n  }\n\n  &:focus {\n    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;\n    outline: none;\n  }\n"]))),J=j.Z.div(_||(_=(0,v.Z)(["\n  min-width: 400px;\n  padding: 15px;\n  position: relative;\n"]))),Q=j.Z.button(I||(I=(0,v.Z)(["\n  margin-left: auto;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  border: none;\n  background-color: transparent;\n  &:hover svg {\n    fill: #ed282d;\n  }\n  svg {\n    width: 18px;\n    height: 18px;\n  }\n"]))),$=t(4164),W=j.Z.div(P||(P=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),X=j.Z.div(N||(N=(0,v.Z)(["\n  background-color: white;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),Y=document.getElementById("modal-root");function nn(n){var e=n.onClose,t=n.children;(0,h.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,$.createPortal)((0,F.jsx)(W,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,F.jsx)(X,{children:t})}),Y)}var en,tn,rn,an,on=j.Z.h1(T||(T=(0,v.Z)(["\n  text-align: center;\n"]))),sn=function(n){var e=n.contactName,t=n.contactNumber,r=n.contactId,i=n.onClose,a=(0,p.v9)(m.K2),o=(0,p.I0)(),s=(0,h.useState)(e),c=(0,x.Z)(s,2),d=c[0],l=c[1],u=(0,h.useState)(t),g=(0,x.Z)(u,2),b=g[0],v=g[1],j=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":return l(r);case"number":return v(r);default:return}};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(on,{children:"Edit contact"}),(0,F.jsxs)(w,{onSubmit:function(n){n.preventDefault();var e=d,t=e.toLowerCase(),s=a.find((function(n){return n.name.toLowerCase()===t}));s?f.Am.warning('Contact "'.concat(s.name,'" is already in contacts')):(o((0,m.Tk)({id:r,name:d,number:b})),f.Am.success('Contact "'.concat(e,'" has been succesfully edited')),i())},children:[(0,F.jsxs)(y,{children:[(0,F.jsx)(Z,{children:"Name"}),(0,F.jsx)(C,{type:"text",name:"name",value:d,onChange:j})]}),(0,F.jsxs)(y,{children:[(0,F.jsx)(Z,{children:"Phone"}),(0,F.jsx)(C,{type:"tel",name:"number",value:b,onChange:j})]}),(0,F.jsx)(k,{type:"submit",children:"Edit"})]})]})},cn=function(n){var e=n.id,t=n.name,r=n.number,i=(0,h.useState)(!1),a=(0,x.Z)(i,2),o=a[0],s=a[1],c=function(){s(!o)},d=(0,p.I0)(),l=(0,p.v9)(m.RM),u=(0,p.v9)(m.j);return(0,F.jsxs)(D,{children:[(0,F.jsxs)(O,{children:[(0,F.jsxs)("span",{children:[t,": "]}),(0,F.jsx)("span",{children:r})]}),(0,F.jsxs)(R,{children:[(0,F.jsxs)(G,{type:"button",onClick:c,disabled:u,children:[(0,F.jsx)("span",{children:"Edit\xa0"}),(0,F.jsx)(q.QML,{})]}),(0,F.jsx)(G,{type:"button",disabled:l,onClick:function(){return function(n,e){d((0,m.GK)(n)),f.Am.success('Contact "'.concat(e,'" has been succesfully deleted'))}(e,t)},children:l?(0,F.jsx)(g.gy,{height:"12",width:"12",color:"#e3e4ed",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0}):(0,F.jsx)(q.VPh,{})})]}),o&&(0,F.jsx)(nn,{onClose:c,children:(0,F.jsxs)(J,{children:[(0,F.jsx)(Q,{onClick:c,children:(0,F.jsx)(q.oHP,{})}),(0,F.jsx)(sn,{contactName:t,contactNumber:r,contactId:e,onClose:c})]})})]})},dn=j.Z.ul(en||(en=(0,v.Z)(["\n  margin-top: 12px;\n  padding-left: 5px;\n  padding-right: 5px;\n"]))),ln=function(){var n=(0,p.I0)();(0,h.useEffect)((function(){n((0,m.yF)())}),[n]);var e=(0,p.v9)(m.hg),t=(0,p.v9)(m.K2),r=(0,p.v9)(m.zK).toLowerCase(),i=t.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,F.jsxs)(dn,{children:[e&&(0,F.jsx)(U.a,{}),i.length>0&&i.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,F.jsx)(cn,{id:e,name:t,number:r},e)}))]})},un=j.Z.div(tn||(tn=(0,v.Z)(["\n  padding: 10px 40px;\n"]))),pn=j.Z.h1(rn||(rn=(0,v.Z)(["\n  font-size: 22px;\n  margin-top: 6px;\n"]))),xn=j.Z.h2(an||(an=(0,v.Z)(["\n  margin-top: 12px;\n  margin-bottom: 6px;\n  font-size: 20px;\n"]))),hn=t(9760),gn=function(){var n=(0,p.v9)(m.N3);return(0,F.jsx)(un,{children:n?(0,F.jsx)(hn.j,{children:n}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(pn,{children:"Phonebook"}),(0,F.jsx)(E,{}),(0,F.jsx)(xn,{children:"Contacts"}),(0,F.jsx)(V,{}),(0,F.jsx)(ln,{})]})})}},9760:function(n,e,t){t.d(e,{j:function(){return i}});var r=t(184),i=function(n){var e=n.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Ups, something went wrong"}),(0,r.jsx)("p",{children:"Please try again later"}),(0,r.jsx)("p",{children:"Erorr message:"}),(0,r.jsx)("p",{children:e})]})}}}]);
//# sourceMappingURL=811.1b063290.chunk.js.map