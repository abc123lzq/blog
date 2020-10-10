(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{380:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"静态类型检测工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态类型检测工具"}},[t._v("#")]),t._v(" 静态类型检测工具")]),t._v(" "),a("p",[t._v("框架一般都会用静态语言预编译检测,来巩固框架的稳定性等，如"),a("a",{attrs:{href:"https://www.tslang.cn/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("typeScript"),a("OutboundLink")],1),t._v(" "),a("hot"),t._v("\n和微软的"),a("a",{attrs:{href:"https://flow.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flow"),a("OutboundLink")],1)],1),t._v(" "),a("p",[t._v("vue2.0采用的是Flow但因为flow比较不给力，所以vue3采用了typeScript")]),t._v(" "),a("h2",{attrs:{id:"源码目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码目录"}},[t._v("#")]),t._v(" 源码目录")]),t._v(" "),a("p",[t._v("到GitHub下载"),a("a",{attrs:{href:"https://github.com/vuejs/vue/releases/tag/v2.5.17-beta.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue源码"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Vue.js 的源码都在 src 目录下，其目录结构如下。")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("├── compiler        # 编译相关 \n├── core            # 核心代码 \n├── platforms       # 不同平台的支持\n├── server          # 服务端渲染\n├── sfc             # .vue 文件解析\n├── shared          # 共享代码\n")])])]),a("h3",{attrs:{id:"compiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler"}},[t._v("#")]),t._v(" compiler")]),t._v(" "),a("p",[t._v("compiler 目录包含 Vue.js 所有编译相关的代码。它包括把模板解析成 ast 语法树，ast 语法树优化，代码生成等功能。\n编译的工作可以在构建时做（借助 webpack、vue-loader 等辅助插件）；也可以在运行时做，使用包含构建功能的 Vue.js。显然，编译是一项耗性能的工作，所以更推荐前者——离线编译。")]),t._v(" "),a("h3",{attrs:{id:"core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[t._v("#")]),t._v(" core")]),t._v(" "),a("p",[t._v("core 目录包含了 Vue.js 的核心代码，包括内置组件、全局 API 封装，Vue 实例化、观察者、虚拟 DOM、工具函数等等。\n这里的代码可谓是 Vue.js 的灵魂，也是我们之后需要重点分析的地方。")]),t._v(" "),a("h3",{attrs:{id:"platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platform"}},[t._v("#")]),t._v(" platform")]),t._v(" "),a("p",[t._v("Vue.js 是一个跨平台的 MVVM 框架，它可以跑在 web 上，也可以配合 weex 跑在 natvie 客户端上。platform 是 Vue.js 的入口，2 个目录代表 2 个主要入口，分别打包成运行在 web 上和 weex 上的 Vue.js。\n我们会重点分析 web 入口打包后的 Vue.js，对于 weex 入口打包的 Vue.js，感兴趣的同学可以自行研究。")]),t._v(" "),a("h3",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" server")]),t._v(" "),a("p",[t._v('Vue.js 2.0 支持了服务端渲染，所有服务端渲染相关的逻辑都在这个目录下。注意：这部分代码是跑在服务端的 Node.js，不要和跑在浏览器端的 Vue.js 混为一谈。\n服务端渲染主要的工作是把组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序。')]),t._v(" "),a("h3",{attrs:{id:"sfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sfc"}},[t._v("#")]),t._v(" sfc")]),t._v(" "),a("p",[t._v("通常我们开发 Vue.js 都会借助 webpack 构建， 然后通过 .vue 单文件的编写组件。\n这个目录下的代码逻辑会把 .vue 文件内容解析成一个 JavaScript 的对象。")]),t._v(" "),a("h3",{attrs:{id:"shared"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared"}},[t._v("#")]),t._v(" shared")]),t._v(" "),a("p",[t._v("Vue.js 会定义一些工具方法，这里定义的工具方法都是会被浏览器端的 Vue.js 和服务端的 Vue.js 所共享的。")]),t._v(" "),a("h2",{attrs:{id:"构建工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建工具"}},[t._v("#")]),t._v(" 构建工具")]),t._v(" "),a("p",[t._v("构建工具是用来编译打包运行源码的工具。 如："),a("a",{attrs:{href:"https://www.webpackjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://www.rollupjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rollup"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("对于应用使用 webpack功能强大，只对JavaScript模块打采用Rollup比较轻量。 "),a("strong",[t._v("vue类库采用了Rollup")])]),t._v(" "),a("p",[a("strong",[t._v("package.json可以看到打包配置的文件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node scripts/build.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"入口文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入口文件"}},[t._v("#")]),t._v(" 入口文件")]),t._v(" "),a("p",[t._v("src/platforms/web/entry-runtime-with-compiler.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./runtime/index'")]),t._v("\n")])])]),a("p",[t._v("逐级往上找最后在src/core/instance/index.js找到Vue的定义")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" initMixin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./init'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (省略...)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Vue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vue is a constructor and should be called with the `new` keyword'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实例化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//挂载mixi方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (省略...)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Vue\n")])])]),a("p",[a("strong",[t._v("Vue就是一个实例化后的一个类，原型下挂在了很多方法。")])]),t._v(" "),a("p",[t._v("点开initMixin(Vue)查看源码可以看到，")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMixin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Class"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_init")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (省略...)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("除了挂载方法外，对象本身扩展"),a("strong",[t._v("全局的静态方法")]),t._v("，在src/core/index.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./instance/index'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" initGlobalAPI "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./global-api/index'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (省略...)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initGlobalAPI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//挂载全局api方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (省略...)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Vue\n")])])]),a("Utterances")],1)}),[],!1,null,null,null);s.default=r.exports}}]);