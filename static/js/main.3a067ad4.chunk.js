(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={container:"Feedback_container__1cbKW",containerHeading:"Feedback_containerHeading__3hMXs",heading:"Feedback_heading__1gsnK",btn:"Feedback_btn__2X1ru",good:"Feedback_good__2_0c-",neutral:"Feedback_neutral__3gzFF",bad:"Feedback_bad__1o9hT",total:"Feedback_total__3ZR2c",positivePercentage:"Feedback_positivePercentage__1crvn"}},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a.n(c),s=a(4),i=a.n(s),o=(a(15),a(5)),d=a(6),l=a(7),b=a(9),j=a(8),u=a(1),h=a.n(u);function g(e){var t=e.title,a=e.children;return Object(n.jsxs)("div",{className:h.a.containerHeading,children:[Object(n.jsx)("h2",{className:h.a.heading,children:t}),a]})}function O(e){var t=e.options,a=e.onLeaveFeedback,c=Object.keys(t);return Object(n.jsx)("div",{children:c.map((function(e){return Object(n.jsx)("button",{name:e,type:"button",onClick:a,className:h.a.btn,children:e[0].toUpperCase()+e.slice(1)},Math.random(3))}))})}function _(e){var t=e.message;return Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:t})})}function v(e){var t=e.good,a=e.neutral,c=e.bad,r=e.total,s=e.positivePercentage;return Object(n.jsx)("div",{children:t||a||0!==c?Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:h.a.good,children:"\u0414\u043e\u0431\u0440\u0435"}),": ",t]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:h.a.neutral,children:"\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e"}),": ",a]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:h.a.bad,children:" \u041f\u043e\u0433\u0430\u043d\u043e"}),": ",c]}),Object(n.jsxs)("li",{className:h.a.total,children:[" \u0417\u0430\u0433\u0430\u043b\u044c\u043d\u043e \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432: ",r," "]}),Object(n.jsxs)("li",{className:h.a.positivePercentage,children:["\u0425\u043e\u0440\u043e\u0448\u0438\u0445 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432: ",s,"%"," "]})]}):Object(n.jsx)(_,{message:"\u041d\u0430\u0440\u0430\u0437\u0456 \u0432\u0456\u0434\u0433\u0443\u043a\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456! :)"})})}var k=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleCLick=function(t){var a=t.currentTarget.name;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.bad+e.state.neutral},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:h.a.container,children:[Object(n.jsx)(g,{title:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0437\u0430\u043b\u0438\u0448\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u0432\u0456\u0434\u0433\u0443\u043a",children:Object(n.jsx)(O,{options:this.state,onLeaveFeedback:this.handleCLick})}),Object(n.jsx)(g,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",children:Object(n.jsx)(v,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(r.a.Component);function x(){return Object(n.jsx)(k,{})}k.defaultProps={initialValue:0},i.a.render(Object(n.jsx)(x,{}),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3a067ad4.chunk.js.map