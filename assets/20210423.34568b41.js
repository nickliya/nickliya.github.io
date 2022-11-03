import{_ as p}from"./postLoyout.c3de0574.js";import{o as e,c as t,w as o,a as s,b as a}from"./app.bab9285b.js";import"./utc.917b3e44.js";const c=s("div",{class:"markdown-body"},[s("h3",{id:"vue-%E5%85%A8%E5%B1%80%E5%BC%95%E5%85%A5-axios-%E5%A4%A7%E6%A6%82%E4%BC%9A%E5%9C%A8%E7%BD%91%E4%B8%8A%E6%89%BE%E5%88%B0%E4%B8%8B%E9%9D%A2%E4%B8%A4%E7%A7%8D%E6%96%B9%E6%A1%88%EF%BC%9A",tabindex:"-1"},"vue \u5168\u5C40\u5F15\u5165 axios \u5927\u6982\u4F1A\u5728\u7F51\u4E0A\u627E\u5230\u4E0B\u9762\u4E24\u79CD\u65B9\u6848\uFF1A"),s("h3",{id:"%E4%B8%80%E3%80%81%E6%94%B9%E5%86%99vue%E7%9A%84%E5%8E%9F%E5%9E%8B%E5%B1%9E%E6%80%A7",tabindex:"-1"},"\u4E00\u3001\u6539\u5199Vue\u7684\u539F\u578B\u5C5E\u6027"),s("p",null,"\u65B9\u6CD5\u662F\u5728main.js\u4E2D\u5199\u5165"),s("pre",null,[s("code",{class:"hljs language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-title class_"},"App"),a(),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" axios "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'axios'"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" app = "),s("span",{class:"hljs-title function_"},"createApp"),a("("),s("span",{class:"hljs-title class_"},"App"),a(`)
app.`),s("span",{class:"hljs-property"},[s("span",{class:"hljs-keyword"},"prototype")]),a("."),s("span",{class:"hljs-property"},"$http"),a(`= axios
`)])]),s("p",null,[a("\u7ECF\u8FC7\u8E29\u5751\uFF0C\u53D1\u73B0"),s("span",{color:"red"},"vue3.0\u53D6\u6D88\u4E86Vue.prototype\uFF0C\u5B98\u65B9\u6587\u6863\u63A8\u8350\u4F7F\u7528globalProperties"),a(" \u4E8E\u662Fmain.js\u6539\u5199\u6210")]),s("pre",null,[s("code",{class:"hljs language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-title class_"},"App"),a(),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" axios "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'axios'"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" app = "),s("span",{class:"hljs-title function_"},"createApp"),a("("),s("span",{class:"hljs-title class_"},"App"),a(`)
app.`),s("span",{class:"hljs-property"},"config"),a("."),s("span",{class:"hljs-property"},"globalProperties"),a("."),s("span",{class:"hljs-property"},"$http"),a(` = axios
`)])]),s("p",null,"\u7136\u540E\u5728\u7EC4\u4EF6\u4E2D\u5F15\u7528"),s("pre",null,[s("code",{class:"hljs language-js"},[s("span",{class:"hljs-variable language_"},"this"),a("."),s("span",{class:"hljs-property"},"$http"),a("."),s("span",{class:"hljs-title function_"},"get"),a("("),s("span",{class:"hljs-string"},"'api/getNewsList'"),a(`)
.`),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"response"),a(")=>")]),a(`{
    `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(response)
})
`)])]),s("p",null,[a("\u7EE7\u7EED\u8E29\u5751 "),s("img",{src:"https://yongchinblog.oss-cn-chengdu.aliyuncs.com/%E5%9B%BE%E7%89%87/20210423.png",style:{width:"100%",height:"100%"},alt:"\u56FE\u7247\u540D\u79F0",align:"center"})]),s("p",null,[a("vue3.0\u4E2D\u662F\u6CA1\u6709this\u7684\u3002\u4F7F\u7528getCurrentInstance\u6765\u83B7\u53D6\u4E0A\u4E0B\u6587"),s("br"),a(" const { proxy } = getCurrentInstance() \u8FD9\u91CC\u7684proxy\u76F8\u5F53\u4E8Ethis")]),s("pre",null,[s("code",{class:"hljs language-js"},[s("span",{class:"hljs-keyword"},"const"),a(" { proxy } = "),s("span",{class:"hljs-title function_"},"getCurrentInstance"),a(`()
proxy.`),s("span",{class:"hljs-property"},"$http"),a("."),s("span",{class:"hljs-title function_"},"get"),a("("),s("span",{class:"hljs-string"},"'api/getNewsList'"),a(`)
.`),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"response"),a(")=>")]),a(`{
    `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(response)
})
`)])]),s("h3",{id:"%E4%BA%8C%E3%80%81%E4%BD%BF%E7%94%A8vue-axios%E6%8F%92%E4%BB%B6",tabindex:"-1"},"\u4E8C\u3001\u4F7F\u7528vue-axios\u63D2\u4EF6"),s("p",null,"\u9996\u5148\u5728\u4E3B\u5165\u53E3\u6587\u4EF6main.js\u4E2D\u5F15\u7528\uFF1A"),s("pre",null,[s("code",{class:"hljs language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-title class_"},"App"),a(),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" axios "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'axios'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-title class_"},"VueAxios"),a(),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue-axios'"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" app = "),s("span",{class:"hljs-title function_"},"createApp"),a("("),s("span",{class:"hljs-title class_"},"App"),a(`)
app.`),s("span",{class:"hljs-title function_"},"use"),a("("),s("span",{class:"hljs-title class_"},"VueAxios"),a(`,axios);
`)])]),s("p",null,"\u7136\u540E\u5728\u7EC4\u4EF6\u4E2D\u5F15\u7528\uFF0C\u6CE8\u610Fvue3.x\u6CA1\u6709this"),s("pre",null,[s("code",{class:"hljs language-js"},[a("axios."),s("span",{class:"hljs-title function_"},"get"),a("("),s("span",{class:"hljs-string"},"'api/getNewsList'"),a(`)
.`),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"response"),a(")=>")]),a(`{
    `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(response)
})
`)])])],-1),r={title:"Vue 3.x \u5168\u5C40\u5F15\u5165axios \u65B9\u6CD5",date:"2021-04-23T18:00:00.000Z",lang:"zh",type:"dev"},y={setup(i,{expose:l}){return l({frontmatter:{title:"Vue 3.x \u5168\u5C40\u5F15\u5165axios \u65B9\u6CD5",date:"2021-04-23T18:00:00.000Z",lang:"zh",type:"dev"}}),(h,j)=>{const n=p;return e(),t(n,{frontmatter:r},{default:o(()=>[c]),_:1})}}};export{y as default,r as frontmatter};
