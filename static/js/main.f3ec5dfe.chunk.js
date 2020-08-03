(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{42:function(e,t,a){e.exports=a(96)},47:function(e,t,a){},48:function(e,t,a){},77:function(e,t){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(39),i=a.n(s),r=(a(47),a(48),a(16)),o=a(3),m=a(4),l=a(6),u=a(5),d="https://hacker-news.firebaseio.com/v0/",h="".concat(d,"topstories.json"),p=function(e){return"".concat(d,"item/").concat(e,".json")},v=a(21),f=function(e){return new Date(1e3*e).toLocaleString()},E=a(15),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__title"},c.a.createElement(E.b,{to:"/".concat(this.props.data.id)},this.props.data.title)),c.a.createElement("div",{className:"card__description"}),c.a.createElement("div",{className:"card__footer"},c.a.createElement("span",{className:"card__score"},"".concat(this.props.data.score," point")),c.a.createElement("span",{className:"card__by"},"".concat(this.props.data.by," ")),c.a.createElement("span",{className:"card__time"},f(this.props.data.time)),c.a.createElement("span",{className:"card__comments"},((e=this.props.data.kids)?Object(r.a)(e).length:0)||0)));var e}}]),a}(n.Component),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isLoading:!0,data:{}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(p(this.props.id)).then((function(e){return e.json()})).then((function(t){e.setState({data:t,isLoading:!1})}))}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.isLoading&&c.a.createElement("div",null,"LOADING..."),!this.state.isLoading&&c.a.createElement(b,{data:this.state.data}))}}]),a}(n.Component),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;this.setState({props:Object(v.a)(Object(v.a)({},e),{},{isLoading:!1})}),console.log(this.props.state)}},{key:"paginateStories",value:function(){return this.props.state.stories}},{key:"render",value:function(){return c.a.createElement("div",null,this.paginateStories().map((function(e){return c.a.createElement(j,{id:e,key:e})})))}}]),a}(n.Component),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={stories:[],isLoading:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(h),fetch(h).then((function(e){return e.json()})).then((function(t){e.setState({stories:Object(r.a)(t),isLoading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",null,this.state.isLoading&&c.a.createElement("div",null," Loading..."),c.a.createElement(g,{state:this.state})))}}]),a}(n.Component),_=function(){return c.a.createElement("div",null,"LOADING...")},k=a(41),y=a.n(k),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={data:{},isLoading:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(p(this.props.commentId)).then((function(e){return e.json()})).then((function(t){return e.setState({data:t,isLoading:!1})}))}},{key:"getChildComments",value:function(){return this.state.data.kids||[]}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.isLoading&&c.a.createElement(_,null),!this.state.isLoading&&c.a.createElement("div",{className:"comment-card"},c.a.createElement("div",{className:"comment-card__description"},c.a.createElement("div",{className:"comment-card__by"},"by ",c.a.createElement("span",null," ","".concat(this.state.data.by," "))),c.a.createElement("div",{className:"comment-card__time"},"at ",c.a.createElement("span",null,f(this.state.data.time)))),c.a.createElement("div",{className:"comment-card__text"},y()(this.state.data.text)),c.a.createElement("div",{className:"comment-card__child"},this.getChildComments().map((function(e){return c.a.createElement(a,{key:e,commentId:e})})))))}}]),a}(n.Component),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={data:[],isLoading:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.paginateComments()}},{key:"paginateComments",value:function(){return this.props.comments}},{key:"render",value:function(){return c.a.createElement("div",{className:"comment-list"},c.a.createElement("div",{className:"comment-list__heading"},"Comments"),c.a.createElement("div",{className:"comment-list__comment-container"},this.paginateComments().map((function(e){return c.a.createElement("div",{className:"comment-list__comment"},c.a.createElement(N,{key:e,commentId:e}))}))))}}]),a}(n.Component),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={data:{},isLoading:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(p(this.props.match.params.newsId)).then((function(e){return e.json()})).then((function(t){return e.setState({data:t,isLoading:!1})}))}},{key:"getNewsComments",value:function(){var e;return(null===(e=this.state)||void 0===e?void 0:e.data.kids)||[]}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.isLoading&&c.a.createElement(_,null),c.a.createElement("div",{className:"news__card"},!this.state.isLoading&&c.a.createElement(b,{data:this.state.data})),c.a.createElement("div",{className:"news__comments"},!this.state.isLoading&&c.a.createElement(L,{comments:this.getNewsComments()})))}}]),a}(n.Component),w=(a(95),a(1));var D=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E.a,null,c.a.createElement(w.a,{exact:!0,path:"/",component:O}),c.a.createElement(w.a,{path:"/:newsId",component:C})))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f3ec5dfe.chunk.js.map