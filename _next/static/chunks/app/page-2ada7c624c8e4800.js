(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{47790:()=>{},87336:(e,t,a)=>{Promise.resolve().then(a.bind(a,17839))},17839:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var r=a(95155),s=a(12115),l=a(64601);let n=e=>e.match(/\b[A-HJ-NP-Za-km-z1-9]{32,44}\b/g)||[],o=e=>{try{if(!e)return null;let t=atob(e),a=new Uint8Array(t.length);for(let e=0;e<t.length;e++)a[e]=t.charCodeAt(e);let r=new Blob([a],{type:"audio/wav"}),s=URL.createObjectURL(r);return new Audio(s)}catch(e){return console.error("Error playing Base64 audio:",e),null}};async function c(e){let{message:t}=e;try{let e;let a="https://43rg3cc5vk.execute-api.us-east-1.amazonaws.com/Prod/";if(!a)return console.error("API URL is not defined"),{ok:!1,message:"dApp is facing unpredicted issues"};e=t.startsWith("Featured Token ")?t.replace(" ","-"):n(t);let r="".concat(a,"/tokenInfo?token_id=").concat(e),s=await fetch(r,{method:"POST",headers:{Authorization:"Bearer 123456"},body:JSON.stringify(t)});if(s.status>299)return{ok:!1,text:"My API is facing a severe traffic right now baby, I'm overloaded but doing my best to keep my system up to date to fulfill all your desires, please call me again in a moment"};let l=await s.json();return console.log("response data json",l),{ok:s.ok,text:l.text||"InVaL1D R3Sp0nS3!\xa1",audioB64:l.audio_base64||"",audioId:l.audio_id||""}}catch(e){return console.error("Error sending message to Lambda:",e),{ok:!1,text:"Something odd happened to us right now... Sorry for the trouble - please retry"}}}var i=a(11536),d=a(71124),u=a(77369),m=a(61520),h=a(75927).Buffer;let p=new u.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),g="https://mainnet.helius-rpc.com/?api-key=e7854720-7f1b-4f3c-b0e4-c2453f75aaf1";async function x(e){try{if(!g)throw Error("RPC URL is not provided");let t=new u.Connection(g),a=new u.PublicKey(e),[r]=await u.PublicKey.findProgramAddress([h.from("metadata"),p.toBuffer(),a.toBuffer()],p),s=await t.getAccountInfo(r);if(!s)throw Error("Metadata account not found for this mint address.");let l=m.Metadata.deserialize(s.data),n=Array.isArray(l)?l[0]:l;if(!n||!n.data)throw Error("Invalid metadata structure.");let o=n.data.name.replace(/\0/g,"").trim(),c=n.data.symbol.replace(/\0/g,"").trim(),i=n.data.uri.replace(/\0/g,"").trim();return{name:o,symbol:c,image:i}}catch(t){return console.error("Error fetching token metadata:",t),console.log("fallback to Palms name"),{name:"Token",symbol:e,image:""}}}let f=()=>{let{featuredTokens:e}=(0,s.useContext)(l.t),t=(0,s.useRef)(null),a=(0,s.useRef)(null),[n,u]=(0,s.useState)(!1),[m,h]=(0,s.useState)(""),[p,g]=(0,s.useState)("Palms"),[f,b]=(0,s.useState)(""),[v,y]=(0,s.useState)(!1),[w,j]=(0,s.useState)(null),[k,N]=(0,s.useState)(""),[C,A]=(0,s.useState)("fetching LLM data & processing model...");(0,s.useEffect)(()=>{w&&t.current&&t.current.scrollIntoView({behavior:"smooth"})},[w]);let E=()=>{a.current&&(a.current.pause(),a.current.currentTime=0)},_=(e,t)=>{E();let r=t?o(t):new Audio("./".concat(e,".mp3"));a.current=r,null==r||r.play().then(()=>u(!0)).catch(t=>{console.error("Error playing audio ".concat(e,":"),t)})};(0,s.useEffect)(()=>{if(!n){let e=()=>{_("welcome"),document.removeEventListener("click",e),document.removeEventListener("keydown",e)};return document.addEventListener("click",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("click",e),document.removeEventListener("keydown",e)}}},[n]),(0,s.useEffect)(()=>{if(!w)return;let e=0,t=setInterval(()=>{N(w.slice(0,e+1)),++e===w.length&&clearInterval(t)},10);return()=>clearInterval(t)},[w]),(0,s.useEffect)(()=>{let e;if(v){let t=["fetching LLM data & processing model...","connecting to the blockchain...","analyzing token trends...","optimizing trade strategies...","parsing data into human readable string...","making sure we have a safe connection...","did I told you I love cats?","what come first, the chicken or the egg?","do you like pina coladas?","and get caught in the rain?","careless whisper\xa1?"],a=0,r=()=>{a=(a+1)%t.length,A(t[a]),e=setTimeout(r,Math.floor(2001*Math.random())+3e3)};return r(),()=>clearTimeout(e)}},[v]);let L=async e=>{try{if(v)return;y(!0);let{image:t,name:a,symbol:r}=e?{image:e.image,name:e.name,symbol:e.symbol}:await x(m),s=e?"Featured Token ".concat(e.symbol):m,l=await c({message:s});g("".concat(a," - ").concat(r)),b(t||""),E(),l.ok?_("base64",l.audioB64):_("error"),j(null==l?void 0:l.text)}catch(e){console.error("Error submitting message:",e),j("request failed - please provide a valid contract address")}finally{y(!1)}},S=async e=>{await L(e)};return(0,r.jsxs)("div",{className:"min-h-screen bg-gray-900 text-white",children:[(0,r.jsxs)("nav",{className:"flex justify-between items-center px-8 py-4 bg-gray-800",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)("img",{src:"/images/logo.jpg",alt:"Logo",className:"h-10 object-contain"})}),(0,r.jsxs)("div",{className:"flex space-x-6",children:[(0,r.jsx)("a",{href:"https://safuai.fun",className:"hover:text-purple-400",children:"Home"}),(0,r.jsx)("a",{href:"https://safuai.fun/#roadmap",className:"hover:text-purple-400",children:"Roadmap"}),(0,r.jsx)("a",{href:"https://github.com/#",className:"hover:text-purple-400",children:"Github"}),(0,r.jsxs)("div",{className:"relative group",children:[(0,r.jsx)("a",{href:"#",className:"text-gray-500 cursor-not-allowed","aria-disabled":"true",children:"DeFi"}),(0,r.jsx)("span",{className:"absolute top-full mt-2 hidden text-xs text-white bg-gray-800 px-2 py-1 rounded group-hover:block",children:"Coming soon"})]})]}),(0,r.jsx)("div",{className:"w-8 h-8 bg-purple-600 rounded-full"})]}),(0,r.jsx)("main",{children:(0,r.jsxs)("div",{className:"relative flex flex-col items-center justify-center px-4 py-16",children:[(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center z-0",children:(0,r.jsx)("div",{className:"w-full h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl blur-lg opacity-30"})}),(0,r.jsx)("div",{className:"relative z-10 text-center",children:(0,r.jsx)("div",{className:"w-full h-40 flex justify-center items-center mt-10",children:(0,r.jsx)("div",{className:"relative z-10 text-center",children:(0,r.jsx)("div",{className:"w-80 h-80 flex justify-center items-center",children:(0,r.jsx)("div",{className:"bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse blur-lg w-full h-full"})})})})}),(0,r.jsx)("div",{className:"relative mt-0 max-w-full overflow-x-auto whitespace-nowrap overscroll-contain scroll-touch",children:(0,r.jsx)("div",{className:"flex space-x-6",children:e.map((e,t)=>(0,r.jsxs)("div",{onClick:()=>S(e),className:"flex-shrink-0 p-4 bg-gradient-to-b from-purple-700 via-transparent to-transparent rounded-lg border border-purple-500 shadow-lg w-60 backdrop-blur-sm text-left",children:[(0,r.jsx)("div",{className:"flex justify-center mb-2",children:(0,r.jsx)("img",{src:e.image||"/placeholder.png",alt:e.name,className:"w-12 h-12 rounded-full"})}),(0,r.jsxs)("h3",{className:"text-lg font-bold text-white mb-1",children:[e.name," ",(0,r.jsxs)("span",{className:"text-purple-300",children:["(",e.symbol,")"]})]}),(0,r.jsxs)("p",{className:"text-sm text-purple-300 mb-1",children:["\uD83D\uDCB0 Price: ",e.price?"$".concat(e.price.toFixed(2)):"N/A"]}),(0,r.jsxs)("p",{className:"text-sm text-purple-300 mb-1",children:["\uD83D\uDCCA Volume: ",e.volume?"$".concat(e.volume.toLocaleString()):"N/A"]}),(0,r.jsxs)("p",{className:"text-sm text-purple-300 mb-1",children:["\uD83D\uDCC8 24h % Change: ",e.change24h?"".concat(e.change24h.toFixed(2),"%"):"N/A"]}),(0,r.jsxs)("p",{className:"text-sm text-purple-300 mb-1",children:["\uD83C\uDFD4️ ATH % Change: ",e.athChange?"".concat(e.athChange.toFixed(2),"%"):"N/A"]}),(0,r.jsxs)("p",{className:"text-sm text-purple-300",children:["\uD83D\uDCBC Market Cap: ",e.marketCap?"$".concat(e.marketCap.toLocaleString()):"N/A"]})]},t))})}),(0,r.jsxs)("div",{className:"mt-16 w-full flex flex-col items-center z-10",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-purple-300 mb-4",children:"ASK SAFU AI"}),(0,r.jsxs)("div",{className:"w-full max-w-2xl",children:[(0,r.jsx)("input",{type:"text",value:m,onChange:e=>h(e.target.value),placeholder:"Contract Address...",className:"w-full p-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500",disabled:v}),(0,r.jsx)("button",{onClick:()=>L(),className:"mt-4 w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300",disabled:v,children:v?(0,r.jsxs)("div",{className:"ml-4 flex items-center space-x-2",children:[(0,r.jsx)(i.hW,{className:"animate-spin"}),(0,r.jsx)("b",{children:(0,r.jsx)("i",{children:C})})]}):"Send"})]}),w&&(0,r.jsxs)("div",{ref:t,className:"mt-8 p-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg max-w-2xl overflow-auto break-words",children:[f&&(0,r.jsx)("img",{src:f,alt:"".concat(p," logo"),className:"w-10 h-10 rounded-full border-2 border-purple-300"}),(0,r.jsx)("h3",{className:"text-lg font-bold text-purple-300",children:p}),(0,r.jsx)(d.o,{className:"mt-2 whitespace-pre-wrap break-words",children:k})]})]})]})}),(0,r.jsx)("footer",{className:"mt-16 py-6 bg-gray-800 text-center",children:(0,r.jsx)("p",{className:"text-gray-400",children:"\xa9 2024 Safu ai. All rights reserved."})})]})}},64601:(e,t,a)=>{"use strict";a.d(t,{t:()=>o,default:()=>c});var r=a(95155),s=a(12115),l=a(82651);async function n(){try{return(await l.A.get("https://api.coingecko.com/api/v3/coins/markets",{params:{vs_currency:"usd",order:"volume_desc",per_page:100,page:1,sparkline:!1,category:"solana-ecosystem"}})).data.filter(e=>e.market_cap<=1e9&&"sol"!==e.symbol&&"jlp"!==e.symbol).map(e=>({name:e.name,symbol:e.symbol,price:e.current_price,volume:e.total_volume,marketCap:e.market_cap,image:e.image,change24h:e.price_change_percentage_24h,athChange:e.ath_change_percentage}))}catch(e){return console.error("Error fetching Solana tokens:",e),[]}}let o=(0,s.createContext)({messages:[],setMessages:()=>{},featuredTokens:[],setFeaturedTokens:()=>{}}),c=e=>{let{children:t}=e,[a,l]=(0,s.useState)([]),[c,i]=(0,s.useState)([]);return(0,s.useEffect)(()=>{console.log("reload!"),n().then(e=>{i(e)}).catch(e=>console.error("Error getting trending tokens",e))},[]),(0,r.jsx)(o.Provider,{value:{messages:a,setMessages:l,featuredTokens:c,setFeaturedTokens:i},children:t})}}},e=>{var t=t=>e(e.s=t);e.O(0,[956,711,316,103,441,517,358],()=>t(87336)),_N_E=e.O()}]);