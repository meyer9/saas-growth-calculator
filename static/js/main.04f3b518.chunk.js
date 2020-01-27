(this["webpackJsonpsaas-growth-calculator"]=this["webpackJsonpsaas-growth-calculator"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(4),c=t.n(n),o=(t(11),t(2)),m=(t(12),t(1)),s=t(5),i=t.n(s),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=Object(l.useState)({formattedValue:e,floatValue:a}),r=Object(o.a)(t,2),n=r[0],c=r[1];return[n,function(e){var a=Number(e.replace("%",""));isNaN(a)?c({formattedValue:e,floatValue:null}):c({formattedValue:e,floatValue:a})}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=Object(l.useState)({formattedValue:e,floatValue:a}),r=Object(o.a)(t,2),n=r[0],c=r[1];return[n,function(e){var a=Number(e.replace("$",""));isNaN(a)?c({formattedValue:e,floatValue:null}):c({formattedValue:e,floatValue:a})}]},f=function(){var e=d(),a=Object(o.a)(e,2),t=a[0],n=a[1],c=u(),s=Object(o.a)(c,2),f=s[0],p=s[1],h=d("$50.00",50),v=Object(o.a)(h,2),b=v[0],E=v[1],g=d("$1000.00",1e3),N=Object(o.a)(g,2),y=N[0],V=N[1],w=Object(l.useState)(12),C=Object(o.a)(w,2),x=C[0],k=C[1],S=u("50%",50),$=Object(o.a)(S,2),R=$[0],j=$[1],O=d("$29.00",29),M=Object(o.a)(O,2),T=M[0],P=M[1],A=d("$5.00",5),D=Object(o.a)(A,2),F=D[0],I=D[1],q=d("$20.00",20),z=Object(o.a)(q,2),B=z[0],G=z[1],J=u("5%",5),W=Object(o.a)(J,2),_=W[0],H=W[1],K={formattedValue:"",floatValue:null};t.floatValue&&f.floatValue?(K.floatValue=Number(t.floatValue)/(Number(f.floatValue)/100),K.formattedValue="$"+(Number(t.floatValue)/(Number(f.floatValue)/100)).toFixed(2)):b.floatValue&&(K=b);var L=0,Q=0,U=0,X=[],Y=[],Z=[];if(K.floatValue&&y.floatValue&&R.floatValue&&_.floatValue&&T.floatValue&&F.floatValue&&null!==B.floatValue)for(Q=y.floatValue;L<x;){Z.push(Q);var ee=Q*(R.floatValue/100);Y.push(ee),U-=Math.ceil(_.floatValue/100*U),Q-=ee;var ae=(U+=Math.floor(ee/K.floatValue))*T.floatValue;X.push(ae),Q+=ae,Q-=F.floatValue*U,Q-=B.floatValue,L++}return r.a.createElement("div",{className:"bg-near-white pb4"},r.a.createElement("div",{className:"mh0-ns mh3"},r.a.createElement("div",{className:"center mw7"},r.a.createElement("div",{className:"f1 tc pt3 b"},"SaaS Growth Calculator"),r.a.createElement("div",{className:"f5 tc mt3 mb3"},"Calculate SaaS growth as a function of common metrics."),r.a.createElement("div",{className:"f5 tc mt3 mb3"},"Built by ",r.a.createElement("a",{href:"https://twitter.com/meyer9_"},"@meyer9_")),r.a.createElement("div",{className:"relative"},r.a.createElement(i.a,{data:[{y:X,type:"scatter",mode:"lines+markers",marker:{color:"red"},name:"MRR"},{y:Y,type:"scatter",mode:"lines+markers",marker:{color:"blue"},name:"Marketing Spend"},{y:Z,type:"scatter",mode:"lines+markers",marker:{color:"green"},name:"Current Money"}],layout:{title:"Growth",width:768,xaxis:{title:"Month",zeroline:!1},yaxis:{title:"Cash ($)",zeroline:!1,tickformat:"$.2f",hoverformat:"$.2f"},autosize:!0},useResizeHandler:!0,config:{displayModeBar:!1,responsive:!0},style:{width:"100%",height:"100%"}})),r.a.createElement("div",{className:"pa4 bg-white mt3 mb3 flex lh-copy items-center"},r.a.createElement("img",{src:"https://pagecheck.app/android-chrome-512x512.png",width:"72px",height:"72px",className:"br3 mr3",alt:"pagecheck logo"}),r.a.createElement("div",{className:"flex-grow-1"},r.a.createElement("div",{className:"f4"},"Sponsored by ",r.a.createElement("a",{className:"blue",href:"https://pagecheck.app"},"page",r.a.createElement("strong",null,"check")),"."),r.a.createElement("div",null,"Convert more users by ensuring pages load fast. pagecheck monitors your website and alerts you of performance or security regressions."))),r.a.createElement("div",{className:"w-100 bg-white br3 pa4 mt4 lh-copy"},K.floatValue&&y.floatValue&&R.floatValue&&_.floatValue&&T.floatValue&&F.floatValue&&null!==B.floatValue?r.a.createElement("div",null,"In ",r.a.createElement("strong",null,x," months"),", we expect you'll have ",r.a.createElement("strong",null,U," customers")," at ",r.a.createElement("strong",null,r.a.createElement(m.a,{value:T.floatValue,displayType:"text",prefix:"$",thousandSeparator:","}))," each for an MRR of ",r.a.createElement("strong",null,r.a.createElement(m.a,{value:U*T.floatValue,displayType:"text",prefix:"$",thousandSeparator:","}))," and ARR of ",r.a.createElement("strong",null,r.a.createElement(m.a,{value:U*T.floatValue*12,displayType:"text",prefix:"$",thousandSeparator:","})),"."):r.a.createElement("div",null,"Missing parameters")),r.a.createElement("div",{className:"w-100 bg-white br3 pa4 mt4"},r.a.createElement("div",{className:"blue b mb3"},"Parameters"),r.a.createElement("div",{className:"ml3"},r.a.createElement("div",{className:"mb3 db"},r.a.createElement("div",{className:"mb1"},"Initial Investment"),r.a.createElement(m.a,{displayType:"input",prefix:"$",decimalScale:2,fixedDecimalScale:!0,placeholder:"Initial Investment",className:"w-100",value:y.formattedValue,onChange:function(e){return V(e.target.value)}})),r.a.createElement("div",{className:"mb3 db"},r.a.createElement("div",{className:"mb1"},"Period (months)"),r.a.createElement(m.a,{displayType:"input",placeholder:"Period (months)",className:"w-100",value:x,onChange:function(e){return k(Number(e.target.value))}})),r.a.createElement("div",{className:"mb3 db"},r.a.createElement("div",{className:"mb1"},"Reinvestment Ratio"),r.a.createElement(m.a,{displayType:"input",suffix:"%",placeholder:"Reinvestment Ratio",className:"w-100",value:R.formattedValue,onChange:function(e){return j(e.target.value)}}))),r.a.createElement("div",{className:"blue b"},"Customer Acquisition"),r.a.createElement("div",{className:"ml3"},r.a.createElement("p",null,"Either enter the cost-per-click and the conversion rate or just the customer acquisition cost."),r.a.createElement("label",{htmlFor:"cost-per-click",className:"mb3 db"},r.a.createElement("div",{className:"mb1"},"Cost Per Click (how much does it cost to get users to click on your link):"),r.a.createElement(m.a,{displayType:"input",prefix:"$",decimalScale:2,fixedDecimalScale:!0,placeholder:"Cost Per Click",name:"cost-per-click",className:"w-100",value:t.formattedValue,onChange:function(e){E(""),n(e.target.value)}})),r.a.createElement("label",{htmlFor:"conversion-rate",className:"mb3 db"},r.a.createElement("div",{className:"mb1"},"Conversion Rate (how many users who click on your link sign up):"),r.a.createElement(m.a,{displayType:"input",suffix:"%",placeholder:"Conversion Rate",name:"conversion-rate",className:"w-100",value:f.formattedValue,onChange:function(e){E(""),p(e.target.value)}})),r.a.createElement("div",{className:"ma4 tc"},"OR"),r.a.createElement("label",{htmlFor:"cac",className:"mb3 db"},r.a.createElement("div",{className:"mb1"},"Customer Acquisition Cost (how much does it cost to acquire a customer):"),r.a.createElement(m.a,{displayType:"input",prefix:"$",placeholder:"Customer Acquisition Cost",name:"cac",decimalScale:2,fixedDecimalScale:!0,className:"w-100",value:K.formattedValue,onChange:function(e){p(""),n(""),E(e.target.value)}}))),r.a.createElement("div",{className:"blue b mb3"},"Customer Value"),r.a.createElement("div",{className:"ml3"},r.a.createElement("div",{className:"mb3 db"},r.a.createElement("div",{className:"mb1"},"Average Monthly Revenue per Customer:"),r.a.createElement(m.a,{displayType:"input",prefix:"$",decimalScale:2,fixedDecimalScale:!0,placeholder:"Average Monthly Revenue per Customer",className:"w-100",value:T.formattedValue,onChange:function(e){return P(e.target.value)}})),r.a.createElement("div",{className:"mb3 db"},r.a.createElement("div",{className:"mb1"},"Cost Per Customer:"),r.a.createElement(m.a,{displayType:"input",prefix:"$",decimalScale:2,fixedDecimalScale:!0,placeholder:"Cost Per Customer",className:"w-100",value:F.formattedValue,onChange:function(e){return I(e.target.value)}})),r.a.createElement("div",{className:"mb3 db"},r.a.createElement("div",{className:"mb1"},"Fixed Monthly Cost:"),r.a.createElement(m.a,{displayType:"input",prefix:"$",decimalScale:2,fixedDecimalScale:!0,placeholder:"Fixed Monthly Cost",className:"w-100",value:B.formattedValue,onChange:function(e){return G(e.target.value)}})),r.a.createElement("div",{className:"mb3 db"},r.a.createElement("div",{className:"mb1"},"Churn Rate:"),r.a.createElement(m.a,{displayType:"input",suffix:"%",placeholder:"Churn Rate",className:"w-100",value:_.formattedValue,onChange:function(e){return H(e.target.value)}})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,a,t){e.exports=t(20)}},[[6,1,2]]]);
//# sourceMappingURL=main.04f3b518.chunk.js.map