(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i});var r=n(126),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"7244807a-ddd9-49f2-aa3c-73ea155a3b51"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e)).then(function(e){return e.data})},unfollow:function(e){return a.delete("follow/".concat(e)).then(function(e){return e.data})}},u={getAuth:function(){return a.get("auth/me").then(function(e){return e.data})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},i={getProfile:function(e){return a.get("profile/".concat(e)).then(function(e){return e.data})},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}}},131:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__hRKOG"}},132:function(e,t,n){e.exports=n.p+"static/media/user.f8a15e74.png"},133:function(e,t,n){e.exports=n.p+"static/media/loader.ca5fed74.svg"},16:function(e,t,n){e.exports={nav:"Navbar_nav__7Yg2L",item:"Navbar_item__2dwnC",activeLink:"Navbar_activeLink__g1J7L"}},160:function(e,t,n){e.exports=n(298)},165:function(e,t,n){},250:function(e,t,n){},28:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return m});var r=n(40),a=n(0),o=n.n(a),u=n(51),i=n.n(u),c=n(122),s=function(e){e.input;var t=e.meta,n=(e.child,Object(r.a)(e,["input","meta","child"])),a=t.touched&&t.error;return o.a.createElement("div",{className:i.a.formControl+" "+(a?i.a.error:"")},o.a.createElement("div",null,n.children),a&&o.a.createElement("span",null,t.error))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e," ",o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e," ",o.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,component:r,validate:n},a)),u)}},298:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(60),u=n.n(o),i=(n(165),n(30)),c=n(31),s=n(33),l=n(32),f=n(34),m=n(6),d=n(89),p=n(99),g={},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;arguments.length>1&&arguments[1];return e},E=n(7),v=n.n(E),b=n(15),w=n(39),O=n(8),S=n(12),_=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(O.a)({},e,r):e})},P={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},j=function(e){return{type:"FOLLOW",userId:e}},C=function(e){return{type:"UNFOLLOW",userId:e}},y=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},I=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},k=function(){var e=Object(b.a)(v.a.mark(function e(t,n,r,a){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(I(!1,n));case 6:case"end":return e.stop()}},e,this)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(O.a)({},e,{users:_(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(O.a)({},e,{users:_(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(O.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(O.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(O.a)({},e,{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(O.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(O.a)({},e,{followingInProgress:t.isFetching?Object(w.a)(e.followingInProgress).concat([t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}},N=n(42),L={userId:null,email:null,login:null,isAuth:!1},U=function(e,t,n,r){return{type:"my-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},x=function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){var n,r,a,o,u;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.getAuth();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,o=r.email,u=r.login,t(U(a,o,u,!0)));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"my-network/auth/SET_USER_DATA":return Object(O.a)({},e,t.payload);default:return e}},F=n(127),R=n(125),z={initialized:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(O.a)({},e,{initialized:!0});default:return e}},D=Object(m.c)({profilePage:d.b,dialogsPage:p.a,sidebar:h,usersPage:T,auth:A,form:R.a,app:G}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,W=Object(m.e)(D,M(Object(m.a)(F.a))),B=n(310),H=n(13),Y=(n(250),n(16)),q=n.n(Y),V=n(312),J=function(){return a.a.createElement("nav",{className:q.a.nav},a.a.createElement("div",{className:q.a.item},a.a.createElement(V.a,{to:"/profile",activeClassName:q.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(q.a.item," ").concat(q.a.active)},a.a.createElement(V.a,{to:"/dialogs",activeClassName:q.a.activeLink},"Messages")),a.a.createElement("div",{className:"".concat(q.a.item," ").concat(q.a.active)},a.a.createElement(V.a,{to:"/users",activeClassName:q.a.activeLink},"Users")),a.a.createElement("div",{className:q.a.item},a.a.createElement("a",null,"News")),a.a.createElement("div",{className:q.a.item},a.a.createElement("a",null,"Music")),a.a.createElement("div",{className:q.a.item},a.a.createElement("a",null,"Settings")))},X=n(255),Z=n(311),K=n(40),Q=n(62),$=n(124),ee=n(66),te=n.n(ee),ne=n(130),re=n.n(ne),ae=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var m=Math.ceil(s/c),d=Object(r.useState)(1),p=Object($.a)(d,2),g=p[0],h=p[1],E=(g-1)*c+1,v=g*c;return a.a.createElement("div",{className:te.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter(function(e){return e>=E&&e<=v}).map(function(e){return a.a.createElement("span",{className:re()(Object(Q.a)({},te.a.selectedPage,o===e),te.a.pageNumber),key:e,onClick:function(t){return u(e)}},e)}),m>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},oe=n(131),ue=n.n(oe),ie=n(132),ce=n.n(ie),se=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(V.a,{to:"/profile/".concat(t.id)},a.a.createElement("img",{src:null!==t.photos.small?t.photos.small:ce.a,className:ue.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("div",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},le=function(e){var t=e.users,n=e.currentPage,r=e.onPageChanged,o=e.totalItemsCount,u=e.pageSize,i=e.followingInProgress,c=e.unfollow,s=e.follow;Object(K.a)(e,["users","currentPage","onPageChanged","totalItemsCount","pageSize","followingInProgress","unfollow","follow"]);return a.a.createElement("div",null,a.a.createElement(ae,{currentPage:n,onPageChanged:r,totalItemsCount:o,pageSize:u}),a.a.createElement("div",null,t.map(function(e){return a.a.createElement(se,{user:e,followingInProgress:i,unfollow:c,follow:s,key:e.id})})))},fe=n(46),me=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){n.props.setCurrentPage(e),n.props.requestUsers(e,n.props.pageSize)},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(fe.a,null):null,a.a.createElement(le,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),de={follow:function(e){return function(){var t=Object(b.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=S.c.follow.bind(S.c),k(n,e,r,j);case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(b.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=S.c.unfollow.bind(S.c),k(n,e,r,C);case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},toggleFollowingProgress:I,requestUsers:function(e,t){return function(){var n=Object(b.a)(v.a.mark(function n(r){var a;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(y(!0)),n.next=3,S.c.getUsers(e,t);case 3:a=n.sent,r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",totalCount:a.totalCount}),r(y(!1));case 7:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}},pe=Object(m.d)(Object(H.b)(function(e){return{users:function(e){return e.usersPage.users}(e),pageSize:function(e){return e.usersPage.pageSize}(e),totalUsersCount:function(e){return e.usersPage.totalUsersCount}(e),currentPage:function(e){return e.usersPage.currentPage}(e),isFetching:function(e){return e.usersPage.isFetching}(e),followingInProgress:function(e){return e.usersPage.followingInProgress}(e)}},de))(me),ge=n(85),he=n.n(ge),Ee=function(e){return a.a.createElement("header",{className:he.a.header},a.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),a.a.createElement("div",{className:he.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Logout")):a.a.createElement(V.a,{to:"/login"},"Login")))},ve=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(Ee,this.props)}}]),t}(a.a.Component),be={logout:function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(U(null,null,null,!1));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},we=Object(H.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},be)(ve),Oe=n(123),Se=n(28),_e=n(80),Pe=n(309),je=n(51),Ce=n.n(je),ye=Object(Oe.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(Se.c)("Email","email",[_e.b],Se.a),Object(Se.c)("Password","password",[_e.b],Se.a,{type:"password"}),Object(Se.c)(null,"rememberMe",null,Se.a,{type:"checkbox"},"Remember me"),n&&a.a.createElement("div",{className:Ce.a.formSammuryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),Ie=Object(H.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var r=Object(b.a)(v.a.mark(function r(a){var o,u;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(x()):(u=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(N.a)("login",{_error:u})));case 4:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(Pe.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(ye,{onSubmit:function(t){var n=t.email,r=t.password,a=t.rememberMe;e.login(n,r,a)}}))}),ke=a.a.lazy(function(){return n.e(1).then(n.bind(null,308))}),Te=a.a.lazy(function(){return n.e(2).then(n.bind(null,307))}),Ne=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(we,null),a.a.createElement(J,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(r.Suspense,{fallback:a.a.createElement(fe.a,null)},a.a.createElement(X.a,{path:"/profile/:userId?",render:function(){return a.a.createElement(Te,null)}}),a.a.createElement(X.a,{path:"/dialogs",render:function(){return a.a.createElement(ke,null)}})),a.a.createElement(X.a,{path:"/users",render:function(){return a.a.createElement(pe,null)}}),a.a.createElement(X.a,{path:"/login",render:function(){return a.a.createElement(Ie,null)}}))):a.a.createElement(fe.a,null)}}]),t}(a.a.Component),Le=Object(m.d)(Z.a,Object(H.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){e(x()).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(Ne),Ue=function(e){return a.a.createElement(B.a,null,a.a.createElement(H.a,{store:W},a.a.createElement(Le,null)))};u.a.render(a.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(133),u=n.n(o);t.a=function(){return a.a.createElement("img",{src:u.a})}},51:function(e,t,n){e.exports={formControl:"FormControls_formControl__2_PTD",error:"FormControls_error__2PZEi",formSammuryError:"FormControls_formSammuryError__3kneh"}},66:function(e,t,n){e.exports={paginator:"Paginator_paginator__2ItlU",pageNumber:"Paginator_pageNumber__1fmQr",selectedPage:"Paginator_selectedPage__1ck2W"}},80:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e)}}},85:function(e,t,n){e.exports={header:"Header_header__15u2-",loginBlock:"Header_loginBlock__3f86R"}},89:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"e",function(){return f}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"f",function(){return g});var r=n(7),a=n.n(r),o=n(15),u=n(39),i=n(8),c=n(12),s={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_USER_PROFILE",profile:e}},m=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)({},e,{posts:Object(u.a)(e.posts).concat([n]),newPostText:""});case"SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(i.a)({},e,{status:t.status});case"DELETE_POST":return Object(i.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});default:return e}}},99:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(39),a=n(8),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:Object(r.a)(e.messages).concat([{id:6,message:n}])});default:return e}}}},[[160,4,3]]]);
//# sourceMappingURL=main.18031c9f.chunk.js.map