(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{166:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[s._v("#")]),s._v(" HTTP")]),s._v(" "),a("p",[s._v("HTTP协议即超文本传送协议，\n特点是客户端发送的每次请求都需要服务器回送响应。")]),s._v(" "),a("p",[s._v("在请求结束后，会主动释放连接。从建立连接到关闭连接的过程称为"),a("code",[s._v("“一次连接”")]),s._v("。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("TCP就是单纯建立连接，不涉及任何我们需要请求的实际数据，简单的传输。")]),s._v(" "),a("p",[s._v("HTTP是要基于TCP连接基础上的，是用来收发实际数据。")])]),s._v(" "),a("h3",{attrs:{id:"http状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[s._v("#")]),s._v(" http状态码")]),s._v(" "),a("p",[a("strong",[s._v("1xx（临时响应）")])]),s._v(" "),a("blockquote",[a("p",[s._v("表示临时响应并需要请求者继续执行操作的状态码。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//继续  请求者应当继续提出请求。服务器返回此代码表示已收到请求的第一部分，正在等待其余部分。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//切换协议  请求者已要求服务器切换协议，服务器已确认并准备切换。")]),s._v("\n")])])]),a("p",[a("strong",[s._v("2xx（成功）")])]),s._v(" "),a("blockquote",[a("p",[s._v("表示成功处理了请求的状态码。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//成功  服务器已经成功处理了请求。通常，这表示服务器提供了请求的网页。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//已创建  请求成功并且服务器创建了新的资源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("202")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//已接受  服务器已接受请求，但尚未处理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("203")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//非授权信息  服务器已经成功处理了请求，但返回的信息可能来自另一来源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//无内容  服务器成功处理了请求，但没有返回任何内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("205")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//重置内容  服务器成功处理了请求，但没有返回任何内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("206")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//部分内容  服务器成功处理了部分GET请求")]),s._v("\n")])])]),a("p",[a("strong",[s._v("3xx（重定向）")])]),s._v(" "),a("blockquote",[a("p",[s._v("要完成请求，需要进一步操作。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//多种选择  针对请求，服务器可执行多种操作。服务器可根据请求者（user agent）选择一项操作，或提供操作列表供请求者选择。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//永久移动  请求的网页已永久移动到新位置。服务器返回此响应（对GET或HEAD请求的响应）时，会自动将请求者转到新位置。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("302")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//临时移动  服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("303")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查看其它位置  请求者应当对不同的位置使用单独的GET请求来检索响应时，服务器返回此代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("304")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//未修改  自动上次请求后，请求的网页未修改过。服务器返回此响应，不会返回网页的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("305")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用代理  请求者只能使用代理访问请求的网页。如果服务器返回此响应，还表示请求者应使用代理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("307")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//临时性重定向  服务器目前从不同位置的网页响应请求，但请求者应继续使用原有的位置来进行以后的请求")]),s._v("\n")])])]),a("p",[a("strong",[s._v("4xx（请求错误）")])]),s._v(" "),a("blockquote",[a("p",[s._v("请求可能出错，妨碍了服务器的处理。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//错误请求  服务器不理解请求的语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//未授权  请求要求身份验证。对于需要登录的网页，服务器可能返回此响应")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//禁止  服务器拒绝请求")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//未找到  服务器找不到请求的网页")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("405")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//方法禁用  禁用请求中指定的方法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("406")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//不接受  无法使用请求的内容特性响应请求的网页")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("407")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//需要代理授权  此状态码与401（未授权）类似，但指定请求者应当授权使用代理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("408")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//请求超时  服务器等候请求时发生超时")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("409")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//冲突  服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("410")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//已删除  如果请求的资源已永久删除，服务器就会返回此响应")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("411")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//需要有效长度  服务器不接受不含有效内容长度标头字段的请求")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("412")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//未满足前提条件  服务器未满足请求者在请求者设置的其中一个前提条件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("413")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//请求实体过大  服务器无法处理请求，因为请求实体过大，超出了服务器的处理能力")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("414")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//请求的URI过长  请求的URI（通常为网址）过长，服务器无法处理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("415")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//不支持媒体类型  请求的格式不受请求页面的支持")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("416")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//请求范围不符合要求  如果页面无法提供请求的范围，则服务器会返回此状态码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("417")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//未满足期望值  服务器未满足“期望”请求标头字段的要求")]),s._v("\n")])])]),a("p",[a("strong",[s._v("5xx（服务器错误）")])]),s._v(" "),a("blockquote",[a("p",[s._v("服务器在尝试处理请求时发生内部错误")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//服务器内部错误  服务器遇到错误，无法完成请求")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("501")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//尚未实施  服务器不具备完成请求的功能。例如，服务器无法识别请求方法时可能会返回此代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//错误网关  服务器作为网关或代理，从上游服务器无法收到无效响应")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//服务器不可用  服务器目前无法使用（由于超载或者停机维护）。通常，这只是暂时状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//网关超时  服务器作为网关代理，但是没有及时从上游服务器收到请求")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("505")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//HTTP版本不受支持  服务器不支持请求中所用的HTTP协议版本")]),s._v("\n")])])]),a("h3",{attrs:{id:"常见状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[s._v("#")]),s._v(" 常见状态码")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//服务器成功返")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//服务器没有资源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//服务器内报错")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//服务器不可用")]),s._v("\n")])])]),a("h2",{attrs:{id:"https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[s._v("#")]),s._v(" HTTPS")]),s._v(" "),a("p",[s._v("HTTPS是基于HTTP协议，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护。")]),s._v(" "),a("h3",{attrs:{id:"https特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https特点"}},[s._v("#")]),s._v(" HTTPS特点")]),s._v(" "),a("ol",[a("li",[s._v("内容加密：采用混合加密技术，中间者无法直接查看明文内容")]),s._v(" "),a("li",[s._v("验证身份：通过证书认证客户端访问的是自己的服务器，所以收方能够证实发送方的真实身份")]),s._v(" "),a("li",[s._v("保护数据完整性：防止传输的内容被中间人冒充或者篡改")])]),s._v(" "),a("h3",{attrs:{id:"https-通信流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-通信流程"}},[s._v("#")]),s._v(" https 通信流程")]),s._v(" "),a("br"),s._v(" "),a("br"),s._v(" "),a("br"),s._v(" "),a("img",{attrs:{src:s.$withBase("/ground/1589340937.jpg?v=1"),width:"700",alt:"img"}}),s._v(" "),a("p",[a("code",[s._v("客户端的TLS解析证书")]),s._v("，首先会验证公钥是否有效，如果发现异常，则会弹出一个警告框，提示证书存在问题。")]),s._v(" "),a("p",[s._v("对称密钥用于SSL 协议的安全数据通讯的加解密通讯。同时在"),a("code",[s._v("SSL 通讯")]),s._v("过程中还要完成数据通讯的完整性，防止数据通讯中的任何变化。")]),s._v(" "),a("h3",{attrs:{id:"抓取https的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抓取https的原理"}},[s._v("#")]),s._v(" 抓取https的原理")]),s._v(" "),a("br"),s._v(" "),a("br"),s._v(" "),a("img",{attrs:{src:s.$withBase("/ground/1589340883.jpg?v=1"),width:"700",alt:"img"}}),s._v(" "),a("p",[s._v("前提是客户端选择信任并安装，网络代理方的CA证书，否则客户端就会“报警”并中止连接。(因为有第三者在拦截你的传输数据)。")]),s._v(" "),a("h3",{attrs:{id:"数字证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字证书"}},[s._v("#")]),s._v(" 数字证书")]),s._v(" "),a("p",[a("strong",[s._v("证书内容")])]),s._v(" "),a("p",[s._v("包括了加密后服务器的公钥、权威机构的信息、服务器域名，还有经过CA私钥签名之后的证书内容，签名计算方法以及证书对应的域名。")]),s._v(" "),a("p",[a("strong",[s._v("验证证书安全性过程")])]),s._v(" "),a("p",[s._v("当客户端收到这个证书之后，使用本地配置的权威机构的公钥对证书进行解密得到服务端的公钥和证书的数字签名，数字签名经过CA公钥解密得到证书信息摘要。")]),s._v(" "),a("p",[s._v("然后证书签名的方法计算一下当前证书的信息摘要，与收到的信息摘要作对比，如果一样，表示证书一定是服务器下发的，没有被中间人篡改过。因为中间人虽然有权威机构的公钥，能够解析证书内容并篡改，但是篡改完成之后中间人需要将证书重新加密，但是中间人没有权威机构的私钥，无法加密，强行加密只会导致客户端无法解密，如果中间人强行乱修改证书，就会导致证书内容和证书签名不匹配。")]),s._v(" "),a("p",[s._v("那第三方攻击者能否让自己的证书显示出来的信息也是服务端呢？（伪装服务端一样的配置）显然这个是不行的，因为当第三方攻击者去CA那边寻求认证的时候CA会要求其提供例如域名的whois信息、域名管理邮箱等证明你是服务端域名的拥有者，而第三方攻击者是无法提供这些信息所以他就是无法骗CA他拥有属于服务端的域名。")]),s._v(" "),a("h3",{attrs:{id:"安全性考虑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全性考虑"}},[s._v("#")]),s._v(" 安全性考虑")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("HTTPS协议的加密范围也比较有限，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不到什么作用")])]),s._v(" "),a("li",[a("p",[s._v("SSL证书的信用链体系并不安全，特别是在某些国家可以控制CA根证书的情况下，中间人攻击一样可行")])]),s._v(" "),a("li",[a("p",[s._v("中间人攻击（MITM攻击）是指，黑客拦截并篡改网络中的通信数据。又分为被动MITM和主动MITM，被动MITM只窃取通信数据而不修改，而主动MITM不但能窃取数据，还会篡改通信数据。最常见的中间人攻击常常发生在公共wifi或者公共路由上。")])])]),s._v(" "),a("h3",{attrs:{id:"成本考虑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#成本考虑"}},[s._v("#")]),s._v(" 成本考虑")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("SSL证书需要购买申请，功能越强大的证书费用越高")])]),s._v(" "),a("li",[a("p",[s._v("SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗（SSL有扩展可以部分解决这个问题，但是比较麻烦，而且要求浏览器、操作系统支持，Windows XP就不支持这个扩展，考虑到XP的装机量，这个特性几乎没用）。")])]),s._v(" "),a("li",[a("p",[s._v("HTTPS连接缓存不如HTTP高效，流量成本高。")])]),s._v(" "),a("li",[a("p",[s._v("HTTPS连接服务器端资源占用高很多，支持访客多的网站需要投入更大的成本。")])]),s._v(" "),a("li",[a("p",[s._v("HTTPS协议握手阶段比较费时，对网站的响应速度有影响，影响用户体验。比较好的方式是采用分而治之，比如主页使用HTTP协议，有关于用户信息等方面使用HTTPS。")])])]),s._v(" "),a("h2",{attrs:{id:"从输入-url-到页面加载完成的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到页面加载完成的过程"}},[s._v("#")]),s._v(" 从输入 URL 到页面加载完成的过程")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("首先做 DNS 查询")]),s._v("，如果这一步做了智能 DNS 解析的话，会提供访问速度最快的 IP 地址回来")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("查找强缓存")]),s._v("\n先检查强缓存，如果命中直接使用，否则进入下一步。关于强缓存，如果不清楚可以参考上一篇文章。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("接下来是 TCP 握手")]),s._v("，应用层会下发数据给传输层，这里 TCP 协议会指明两端的端口号，然后下发给网络层。网络层中的 IP 协议会确定 IP 地址，并且指示了数据传输中如何跳转路由器。然后包会再被封装到数据链路层的数据帧结构中，最后就是物理层面的传输了")])]),s._v(" "),a("li",[a("p",[s._v("TCP 握手结束后会进行 "),a("strong",[s._v("TLS 握手")]),s._v("，然后就开始正式的传输数据")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("数据在进入服务端")]),s._v("之前，可能还会先经过负责负载均衡的服务器，它的作用就是将请求合理的分发到多台服务器上，这时"),a("strong",[s._v("假设服务端会响应一个 HTML 文件")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("首先浏览器会判断状态码")]),s._v("是什么，如果是 200 那就继续解析，如果 400 或 500 的话就会报错，如果 300 的话会进行重定向，这里会有个重定向计数器，避免过多次的重定向，超过次数也会报错")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("浏览器开始解析文件")]),s._v("，如果是 gzip 格式的话会先解压一下，然后通过文件的编码格式知道该如何去解码文件")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("文件解码成功后会正式开始渲染流程")]),s._v("，先会根据 HTML 构建 DOM 树，有 CSS 的话会去构建 CSSOM 树。如果遇到 script 标签的话，会判断是否存在 async 或者 defer ，前者会并行进行下载并执行 JS，后者会先下载文件，然后等待 HTML 解析完成后顺序执行，如果以上都没有，就会阻塞住渲染流程直到 JS 执行完毕。遇到文件下载的会去下载文件，这里如果使用 HTTP 2.0 协议的话会极大的提高多图的下载效率。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("初始的 HTML")]),s._v(" 被完全加载和解析后会触发 DOMContentLoaded 事件")])]),s._v(" "),a("li",[a("p",[s._v("CSSOM 树和 DOM 树构建完成后会开始生成 Render 树，这一步就是确定"),a("strong",[s._v("页面元素的布局、样式")]),s._v("等等诸多方面的东西")])]),s._v(" "),a("li",[a("p",[s._v("在生成 Render 树的过程中，浏览器就开始调用 "),a("strong",[s._v("GPU 绘制，合成图层")]),s._v("，将内容显示在屏幕上了")])])]),s._v(" "),a("Utterances")],1)}),[],!1,null,null,null);t.default=e.exports}}]);