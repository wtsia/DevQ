(this["webpackJsonpcode-challenge"]=this["webpackJsonpcode-challenge"]||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),l=a.n(r),c=a(2),i=(a(27),a(4)),s=a(5),m=a(7),u=a(6),d=a(8),h=a(11),p=(a(28),a(29),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(c.b,{className:"button",to:"/HTML"},"HTML"),o.a.createElement(c.b,{className:"button",to:"/CSS"},"CSS"),o.a.createElement(c.b,{className:"button",to:"/JavaScript"},"JavaScript"),o.a.createElement(c.b,{className:"button",to:"/Express"},"Express"),o.a.createElement(c.b,{className:"button",to:"/React"},"React"),o.a.createElement(c.b,{className:"button",to:"/Node"},"Node"))}}]),t}(n.Component)),E=(a(35),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"About"},o.a.createElement("h1",null,"About Us // Read Me"),o.a.createElement("div",{className:"answers"},o.a.createElement("p",null,"Corey"),o.a.createElement("p",null,"Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."),o.a.createElement("p",null,"Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor..."))))}}]),t}(n.Component)),b=(a(36),a(37),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[],x:0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log(this.props),fetch("https://immense-citadel-86220.herokuapp.com/edit/".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t,x:0},(function(t){return console.log(e.state,t)}))}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t&&n?o.a.createElement("div",null,"Error: ",t.message):a?o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"editContainer"},o.a.createElement("h1",null,"Edit Question"),o.a.createElement("p",null,"Don't forget to rewrite all input fields \u263a"),o.a.createElement("div",{className:"edit"},o.a.createElement("form",{action:"https://immense-citadel-86220.herokuapp.com/edit/".concat(this.props.match.params.id,"?_method=put"),method:"POST"},o.a.createElement("p",null,o.a.createElement("h2",null,"Question:"),o.a.createElement("p",null,n.question),o.a.createElement("input",{className:"editPage",type:"text",name:"question",placeholder:n.question,required:!0})),o.a.createElement("p",null,o.a.createElement("h2",null,"Hint: "),o.a.createElement("p",null,n.hint),o.a.createElement("input",{className:"editPage",type:"text",name:"hint",placeholder:n.hint,required:!0})),o.a.createElement("p",null,o.a.createElement("h2",null,"Answer: "),o.a.createElement("p",null,n.answer),o.a.createElement("input",{className:"editPage",type:"text",name:"answer",placeholder:n.answer,required:!0})),o.a.createElement("p",null,o.a.createElement("h2",null,"URL: "),o.a.createElement("p",null,n.url),o.a.createElement("input",{className:"editPage",type:"text",name:"url",placeholder:n.url,required:!0})),o.a.createElement("p",null,o.a.createElement("h2",null,"Type: "),o.a.createElement("select",{className:"editPage",type:"text",name:"type"},o.a.createElement("option",{name:"type",value:"HTML"},"HTML"),o.a.createElement("option",{name:"type",value:"CSS"},"CSS"),o.a.createElement("option",{name:"type",value:"JavaScript"},"JavaScript"),o.a.createElement("option",{name:"type",value:"React"},"React"),o.a.createElement("option",{name:"type",value:"Express"},"Express"),o.a.createElement("option",{name:"type",value:"Node"},"Node"))),o.a.createElement("input",{type:"submit",value:"Update"}))),o.a.createElement("form",{action:"https://immense-citadel-86220.herokuapp.com/edit/".concat(this.props.match.params.id,"?_method=delete"),method:"POST"},o.a.createElement("input",{className:"delete",type:"submit",value:"Delete"})))):o.a.createElement("div",null,"Loading...")}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).nextQuestion=function(){var e=a.state.items;a.state.x<e.length-1&&a.setState({x:a.state.x+1})},a.previousQuestion=function(){a.state.x>0&&a.setState({x:a.state.x-1})},a.state={error:null,isLoaded:!1,items:[],x:0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.question;console.log(t),"DevQ"!==t&&fetch("https://immense-citadel-86220.herokuapp.com/".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t,x:0},(function(t){return console.log(e.state,t)}))}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;if(t&&n)return o.a.createElement("div",null,"Error: ",t.message);if(a){var r=this.state.x+1,l=n;return o.a.createElement("div",null,o.a.createElement("h1",null,l[this.state.x].question),o.a.createElement("p",null,r,"/",n.length),o.a.createElement("input",{className:"answer",type:"text",placeholder:"Write Your Answer Here \u2192 Check Below \u2193"}),o.a.createElement("button",{onClick:this.previousQuestion},"\u2190"),o.a.createElement("button",{onClick:this.nextQuestion},"\u2192"),o.a.createElement(c.b,{to:"/Edit/"+l[this.state.x]._id},o.a.createElement("button",null,"Edit")),o.a.createElement("div",{className:"answers"},o.a.createElement("h2",null,"Hint:"),o.a.createElement("p",null,l[this.state.x].hint),o.a.createElement("h2",null,"Answer:"),o.a.createElement("p",null,l[this.state.x].answer),o.a.createElement("h2",null,o.a.createElement("a",{target:"_blank",href:l[this.state.x].url},"[ Documentation ]"))))}return o.a.createElement("div",null,"Loading...")}}]),t}(n.Component),f=(a(38),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[],x:0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"editContainer"},o.a.createElement("h1",null,"Add a New Question!"),o.a.createElement("div",{className:"edit"},o.a.createElement("form",{action:"https://immense-citadel-86220.herokuapp.com/new",method:"POST"},o.a.createElement("p",null,o.a.createElement("h2",null,"Question:"),o.a.createElement("input",{className:"editPage",type:"text",name:"question",required:!0})),o.a.createElement("p",null,o.a.createElement("h2",null,"Hint: "),o.a.createElement("input",{className:"editPage",type:"text",name:"hint",required:!0})),o.a.createElement("p",null,o.a.createElement("h2",null,"Answer: "),o.a.createElement("input",{className:"editPage",type:"text",name:"answer",required:!0})),o.a.createElement("p",null,o.a.createElement("h2",null,"Read More URL: "),o.a.createElement("input",{className:"editPage",type:"text",name:"url",required:!0})),o.a.createElement("p",null,o.a.createElement("h2",null,"Type: "),o.a.createElement("select",{className:"editPage",type:"text",name:"type"},o.a.createElement("option",{name:"type",value:"HTML"},"HTML"),o.a.createElement("option",{name:"type",value:"CSS"},"CSS"),o.a.createElement("option",{name:"type",value:"JavaScript"},"JavaScript"),o.a.createElement("option",{name:"type",value:"React"},"React"),o.a.createElement("option",{name:"type",value:"Express"},"Express"),o.a.createElement("option",{name:"type",value:"Node"},"Node"))),o.a.createElement("input",{type:"submit",value:"Post"})))))}}]),t}(n.Component)),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("nav",null,o.a.createElement(c.b,{to:"/new"},o.a.createElement("h1",{className:"link"},"[ Q + ]")),o.a.createElement(c.b,{to:"/home"},o.a.createElement("h1",{className:"link logo"},"DevQ")),o.a.createElement(c.b,{to:"/about"},o.a.createElement("h1",{className:"link"},"[ About ]")))),o.a.createElement("main",null,o.a.createElement("div",null,o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/home",component:p}),o.a.createElement(h.b,{exact:!0,path:"/about",component:E}),o.a.createElement(h.b,{exact:!0,path:"/new",component:f}),o.a.createElement(h.b,{exact:!0,path:"/Edit/:id",component:b}),o.a.createElement(h.b,{exact:!0,path:"/:question",render:function(t){return o.a.createElement(v,Object.assign({},t,{items:e.state.items}))}}),o.a.createElement(h.b,{path:"/*",render:function(){return o.a.createElement(h.a,{to:"/home"})}})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(c.a,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.c5bdd3c5.chunk.js.map