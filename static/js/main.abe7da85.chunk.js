(this["webpackJsonpkibana-iframe"]=this["webpackJsonpkibana-iframe"]||[]).push([[0],{110:function(t,e,n){},165:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n.n(i),c=n(84),o=n.n(c),s=(n(110),n(93)),r=n(7),u=n(85),O=n(91),l=n(54),_=n(5),h=function(t){var e=t.history;Object(i.useEffect)((function(){l.a.currentAuthenticatedUser({bypassCache:!0}).then((function(t){localStorage.setItem("userInfo",JSON.stringify(t)),e.push("/home")})).catch((function(t){console.log("currentAuthenticatedUser Error:  ",t),n()}))}),[]);var n=function(){localStorage.removeItem("userInfo"),l.a.federatedSignIn()};return Object(_.jsx)("div",{style:{textAlign:"center"},children:Object(_.jsx)("h3",{children:"Loading...."})})};var d=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(s.a,{children:Object(_.jsxs)(r.c,{children:[Object(_.jsx)(r.a,{exact:!0,path:"/",component:h}),Object(_.jsx)(r.a,{exact:!0,path:"/home",component:u.a}),Object(_.jsx)(r.a,{exact:!0,path:"/kibana",component:O.a})]})})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),c(t),o(t)}))},f=n(37),j={region:"us-east-1",userPoolId:"us-east-1_PYgQKSA1k",userPoolWebClientId:"61c0q7f1lh8fmi4r120gqq38s3",oauth:{domain:"auth-test-0.auth.us-east-1.amazoncognito.com",scope:["phone","email","profile","openid","aws.cognito.signin.user.admin"],redirectSignIn:Object({NODE_ENV:"production",PUBLIC_URL:"/kibana-iframe",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_COGNITO_USER_POOL_ID:"us-east-1_PYgQKSA1k",REACT_APP_COGNITO_USER_POOL_WEBCLIENT_ID:"61c0q7f1lh8fmi4r120gqq38s3",REACT_APP_COGNITO_AUTH_DOMAIN:"auth-test-0.auth.us-east-1.amazoncognito.com"}).REACT_APP_REDIRECT_SIGNIN||"http://localhost:3000/",redirectSignOut:Object({NODE_ENV:"production",PUBLIC_URL:"/kibana-iframe",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_COGNITO_USER_POOL_ID:"us-east-1_PYgQKSA1k",REACT_APP_COGNITO_USER_POOL_WEBCLIENT_ID:"61c0q7f1lh8fmi4r120gqq38s3",REACT_APP_COGNITO_AUTH_DOMAIN:"auth-test-0.auth.us-east-1.amazoncognito.com"}).REACT_APP_REDIRECT_SIGNOUT||"http://localhost:3000/",responseType:"code"}};f.default.configure(j),o.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(d,{})}),document.getElementById("root")),b()},85:function(t,e,n){"use strict";(function(t){n(3);var i=n(54),a=n(5);e.a=function(e){var n=e.history;return Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("h1",{children:"Home"}),Object(a.jsx)("button",{onClick:function(){return n.push("/kibana")},children:"Go to Kibana"}),"\xa0",Object(a.jsx)("button",{onClick:function(){return i.a.signOut({global:t})},children:"Logout"})]})}}).call(this,n(35))},91:function(t,e,n){"use strict";(function(t){n(3);var i=n(54),a=n(92),c=n(5);e.a=function(){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h1",{children:"Kibana"}),Object(c.jsx)("button",{onClick:function(){return i.a.signOut({global:t})},children:"Logout"}),Object(c.jsx)(a.a,{url:"https://4d980065475c44f5b3dded9798abb265.us-east-1.aws.found.io:9243/",width:"100%",height:"100%",id:"kibanaIframe",className:"kibanaIframe",display:"initial",position:"relative"})]})}}).call(this,n(35))}},[[165,1,2]]]);
//# sourceMappingURL=main.abe7da85.chunk.js.map