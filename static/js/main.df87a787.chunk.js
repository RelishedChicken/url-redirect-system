(this["webpackJsonpurl-redirect-system"]=this["webpackJsonpurl-redirect-system"]||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(1),c=s.n(i),r=s(21),n=s.n(r),l=s(7),d=s(8),o=s(10),h=s(9),j=s(11),u=s(2),b=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{className:"pageTitle",children:"Usage"}),Object(a.jsx)("h3",{className:"subTitle",children:"Editing a Link"}),Object(a.jsxs)("p",{children:["To edit a link, go ",Object(a.jsx)("b",{children:Object(a.jsx)(j.b,{to:"/edit/",children:"here"})}),"."]}),Object(a.jsx)("h3",{className:"subTitle",children:"Update a Link"}),Object(a.jsxs)("p",{children:["To update a link, go ",Object(a.jsx)("b",{children:Object(a.jsx)(j.b,{to:"/update/",children:"here"})}),"."]}),Object(a.jsx)("h3",{className:"subTitle",children:"To Redirect to a Link"}),Object(a.jsxs)("p",{children:["Visit this domain with ",Object(a.jsx)("b",{children:"'/redirect/[uuid]'"})," in the URL."]})]})}}]),s}(c.a.Component),p=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={urlToUse:"",readyToGo:!1},e}return Object(d.a)(s,[{key:"parse",value:function(){var e,t=window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.length);console.log(t),this.props.currentUrls.forEach((function(s){s.url_uuid===t&&(e=s.url_value)})),"h"!==e[0]&&(e="https://"+e),this.setState({urlToUse:e,readyToGo:!0}),console.log(e)}},{key:"render",value:function(){return this.state.readyToGo?(window.location.href=this.state.urlToUse,Object(a.jsx)("h1",{children:"Redirecting you..."})):(this.parse(),Object(a.jsx)("h1",{children:"Parsing UUID..."}))}}]),s}(c.a.Component),O=s(14),m=s(40),x=s(15),g=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={id:Object(m.a)(),url:"",submitted:!1},e.update=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.formSubmitted=function(t){t.preventDefault(),e.setState({submitted:!0}),console.log(t);var s=e.state.id,a=e.state.url;console.log("UUID: "+s),console.log("URL Dest: "+a),fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/addUrl.php?uuid="+s+"&url="+a)},e}return Object(d.a)(s,[{key:"render",value:function(){return this.state.submitted?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"pageTitle",children:"Thanks! Your link has been created and is as follows:"}),Object(a.jsxs)("p",{className:"pageInstructions",children:["UUID: ",this.state.id.substring(this.state.id.lastIndexOf("/")+1,this.state.id.length)]}),Object(a.jsxs)("p",{className:"pageInstructions",children:["URL: ",this.state.url]}),Object(a.jsx)("p",{className:"pageInstructions",children:"Hint: Your redirect link has already been copied to your clipboard"})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"pageTitle",children:"Create a Link"}),Object(a.jsx)("p",{className:"pageInstructions",children:"Enter a destination. Your new URL will be copied to clipboard automatically"}),Object(a.jsx)("div",{className:"formSpacer",children:"\xa0"}),Object(a.jsx)("div",{className:"formParent",children:Object(a.jsxs)("form",{onSubmit:this.props.addUrl,children:[Object(a.jsx)("label",{className:"formLabel",children:Object(a.jsxs)("b",{children:["URL ID: "," "]})}),Object(a.jsx)("input",{className:"inputField",type:"text",name:"id",value:this.state.id,readOnly:!0}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{className:"formLabel",children:[Object(a.jsx)("b",{children:"URL Destination:"})," "]}),Object(a.jsx)("input",{className:"inputField",type:"text",name:"url",value:this.state.url,onChange:this.update}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(x.CopyToClipboard,{text:"https://relishedchicken.github.io/url-redirect-system/#/redirect/"+this.state.id,children:Object(a.jsxs)("button",{onClick:this.formSubmitted,className:"submitButton",children:["Submit ","&"," Copy to Clipboard"]})})]})}),Object(a.jsx)("div",{className:"formSpacer",children:"\xa0"})]})}}]),s}(c.a.Component),f=s(23),v=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={id:"",url:"",submitted:!1,urlValid:!0},e.update=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value),e.validateUUID)},e.formSubmitted=function(t){t.preventDefault(),e.setState({submitted:!0});var s=e.state.url;console.log(s),s.includes("http")||(s="http://"+s);var a=e.state.id;a=a.substring(a.lastIndexOf("/")+1,a.length),""!==s&&fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/updateUrl.php?uuid="+a+"&url="+s)},e}return Object(d.a)(s,[{key:"validateUUID",value:function(){var e=this.state.id;console.log(e);var t=e.substring(0,e.lastIndexOf("/")),s=e.substring(e.lastIndexOf("/")+1,e.length);console.log(t),"https://relishedchicken.github.io/url-redirect-system/#/redirect"===t&&e.includes("http")&&Object(f.a)(s)?this.setState({urlValid:!1}):this.setState({urlValid:!0})}},{key:"render",value:function(){return this.state.submitted?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"pageTitle",children:"Thanks! Your link has been updated and is as follows:"}),Object(a.jsxs)("p",{className:"pageInstructions",children:["UUID: ",this.state.id]}),Object(a.jsxs)("p",{className:"pageInstructions",children:["URL: ",this.state.url]}),Object(a.jsx)("p",{className:"pageInstructions",children:"Hint: Your redirect link has already been copied to your clipboard"})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"pageTitle",children:"Update an Exiting Link"}),Object(a.jsx)("p",{className:"pageInstructions",children:"Paste your old link below and a new destination."}),Object(a.jsx)("div",{className:"formSpacer",children:"\xa0"}),Object(a.jsx)("div",{className:"formParent",children:Object(a.jsxs)("form",{onSubmit:this.props.updateUrl,children:[Object(a.jsx)("label",{className:"formLabel",children:Object(a.jsxs)("b",{children:["Old URL: "," "]})}),Object(a.jsx)("input",{className:"inputField",type:"text",name:"id",value:this.state.id,onChange:this.update}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{className:"formLabel",children:[Object(a.jsx)("b",{children:"URL Destination:"})," "]}),Object(a.jsx)("input",{className:"inputField",type:"text",name:"url",value:this.state.url,onChange:this.update}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{hidden:!this.state.urlValid,className:"pageInstructions",style:{color:"red"},children:"Please make sure your Old URL is valid."}),Object(a.jsx)(x.CopyToClipboard,{text:"https://relishedchicken.github.io/url-redirect-system/#/redirect/"+this.state.id,children:Object(a.jsxs)("button",{onClick:this.formSubmitted,className:"submitButton",disabled:this.state.urlValid,children:["Update ","&"," Copy to Clipboard"]})})]})}),Object(a.jsx)("div",{className:"formSpacer",children:"\xa0"})]})}}]),s}(c.a.Component),k=(s(38),function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={urls:[],loadedURLs:!1,justCreatedLink:!1,createdLinkUUID:"",createdLinkURL:""},e}return Object(d.a)(s,[{key:"getURLData",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/getUrls.php").then((function(e){return e.json()})).then((function(t){e.setState({urls:t}),console.log("loaded!"),e.setState({loadedURLs:!0})}))}},{key:"render",value:function(){return this.state.loadedURLs?Object(a.jsxs)("div",{children:[Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"}),Object(a.jsx)("link",{rel:"shortcut icon",href:"./favicon.ico",type:"image/x-icon"}),Object(a.jsx)("h1",{className:"title",children:"Simple Persistant URL Redirector"}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)("div",{className:"menuContainer",children:Object(a.jsxs)("div",{className:"menuBar",children:[Object(a.jsx)(j.b,{to:"/#/",children:Object(a.jsx)("div",{className:"link",children:"Home"})}),Object(a.jsx)(j.b,{to:"/edit/",children:Object(a.jsx)("div",{className:"link",children:"Create Link"})}),Object(a.jsx)(j.b,{to:"/update/",children:Object(a.jsx)("div",{className:"link",children:"Update Link"})})]})}),Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{basename:"/url-redirect-system/#/",exact:!0,path:"/",children:Object(a.jsx)(b,{})}),Object(a.jsx)(u.a,{basename:"/url-redirect-system/#/",path:"/redirect",children:Object(a.jsx)(p,{currentUrls:this.state.urls})}),Object(a.jsx)(u.a,{basename:"/url-redirect-system/#/",path:"/edit",children:Object(a.jsx)(g,{addUrl:this.addURL})}),Object(a.jsx)(u.a,{basename:"/url-redirect-system/#/",path:"/update",children:Object(a.jsx)(v,{updateUrl:this.updateURL})})]})]})]}):(this.getURLData(),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"title",children:"Simple Persistant URL Redirector"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"pageTitle",children:"Please Wait"}),Object(a.jsx)("h4",{className:"pageDetail",children:"Loading latest data..."})]})]}))}}]),s}(c.a.Component));n.a.render(Object(a.jsx)(k,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.df87a787.chunk.js.map