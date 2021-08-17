(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1226],{3905:function(e,a,n){"use strict";n.r(a),n.d(a,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var t=n(2784);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function d(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?d(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){return function(a){var n=p(a.components);return t.createElement(e,i({},a,{components:n}))}},p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},N=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,N=s["".concat(d,".").concat(c)]||s[c]||u[c]||i;return n?t.createElement(N,o(o({ref:a},l),{},{components:n})):t.createElement(N,o({ref:a},l))}));function x(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=N;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var l=2;l<i;l++)d[l]=n[l];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}N.displayName="MDXCreateElement"},44597:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return o},metadata:function(){return m},toc:function(){return l},default:function(){return p}});var t=n(22122),r=n(19756),i=(n(2784),n(3905)),d=["components"],o={title:"getAudioData()",id:"get-audio-data"},m={unversionedId:"get-audio-data",id:"get-audio-data",isDocsHomePage:!1,title:"getAudioData()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/get-audio-data.md",sourceDirName:".",slug:"/get-audio-data",permalink:"/docs/get-audio-data",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/get-audio-data.md",version:"current",frontMatter:{title:"getAudioData()",id:"get-audio-data"},sidebar:"someSidebar",previous:{title:"@remotion/gif",permalink:"/docs/gif"},next:{title:"getAudioDuration()",permalink:"/docs/get-audio-duration"}},l=[{value:"Arguments",id:"arguments",children:[{value:"<code>src</code>",id:"src",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"Caching behavior",id:"caching-behavior",children:[]},{value:"Alternatives",id:"alternatives",children:[]},{value:"See also",id:"see-also",children:[]}],s={toc:l};function p(e){var a=e.components,n=(0,r.default)(e,d);return(0,i.mdx)("wrapper",(0,t.default)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Part of the ",(0,i.mdx)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),(0,i.mdx)("p",null,"Takes an audio ",(0,i.mdx)("inlineCode",{parentName:"p"},"src"),", loads it and returns data and metadata for the specified source."),(0,i.mdx)("h2",{id:"arguments"},"Arguments"),(0,i.mdx)("h3",{id:"src"},(0,i.mdx)("inlineCode",{parentName:"h3"},"src")),(0,i.mdx)("p",null,"A string pointing to an audio asset."),(0,i.mdx)("h2",{id:"return-value"},"Return value"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Promise<AudioData>")," - object with information about the audio data:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"channelWaveforms"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"Float32Array[]")," an array with waveform information for each channel."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sampleRate"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"number")," How many samples per second each waveform contains."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"durationInSeconds"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"number")," The duration of the audio in seconds."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"numberOfChannels"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"number")," The number of channels contained in the audio file. This corresponds to the length of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"channelWaveforms")," array."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"resultId"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"string")," Unique identifier of this audio data fetching call. Other functions can cache expensive operations if they get called with the same resultId multiple times."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"isRemote"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"boolean")," Whether the audio was imported locally or from a different origin.")),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("div",{className:"shiki-twoslash-fragment"},(0,i.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const getAudioData: (src: string) => Promise<AudioData>\nimport getAudioData"},"getAudioData"),"} "),(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'@remotion/media-utils'")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,i.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music")," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'./music.mp3'")),(0,i.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getAudioData(src: string): Promise<AudioData>\nimport getAudioData"},"getAudioData")),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,i.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music"),") "),(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/* {")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  channelWaveforms: [Float32Array(4410000), Float32Array(4410000)],")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  sampleRate: 44100,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  durationInSeconds: 100.0000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  numberOfChannels: 2,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},'  resultId: "0.432878981",')),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  isRemote: false")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"} */")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getAudioData(src: string): Promise<AudioData>\nimport getAudioData"},"getAudioData")),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,i.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'https://example.com/remote-audio.aac'"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/* {")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  channelWaveforms: [Float32Array(4800000)],")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  sampleRate: 48000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  durationInSeconds: 100.0000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  numberOfChannels: 1,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},'  resultId: "0.432324444",')),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  isRemote: true")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"} */"))))),(0,i.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const getAudioData: (src: string) => Promise<AudioData>\nimport getAudioData"},"getAudioData"),"} "),(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'@remotion/media-utils'")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,i.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music")," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./music.mp3'")),(0,i.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getAudioData(src: string): Promise<AudioData>\nimport getAudioData"},"getAudioData"),"(",(0,i.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music"),") "),(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"/* {")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  channelWaveforms: [Float32Array(4410000), Float32Array(4410000)],")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  sampleRate: 44100,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  durationInSeconds: 100.0000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  numberOfChannels: 2,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},'  resultId: "0.432878981",')),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  isRemote: false")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"} */")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getAudioData(src: string): Promise<AudioData>\nimport getAudioData"},"getAudioData"),"("),(0,i.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'https://example.com/remote-audio.aac'"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},") "),(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"/* {")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  channelWaveforms: [Float32Array(4800000)],")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  sampleRate: 48000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  durationInSeconds: 100.0000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  numberOfChannels: 1,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},'  resultId: "0.432324444",')),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  isRemote: true")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"} */")))))),(0,i.mdx)("h2",{id:"caching-behavior"},"Caching behavior"),(0,i.mdx)("p",null,"This function is memoizing the results it returns.\nIf you pass in the same argument to ",(0,i.mdx)("inlineCode",{parentName:"p"},"src")," multiple times, it will return a cached version from the second time on, regardless of if the file has changed. To clear the cache, you have to reload the page."),(0,i.mdx)("h2",{id:"alternatives"},"Alternatives"),(0,i.mdx)("p",null,"If you need only the duration, prefer ",(0,i.mdx)("a",{parentName:"p",href:"get-audio-duration"},(0,i.mdx)("inlineCode",{parentName:"a"},"getAudioDuration()"))," which is faster because it doesn't need to read waveform data."),(0,i.mdx)("p",null,"Use the ",(0,i.mdx)("a",{parentName:"p",href:"use-audio-data"},(0,i.mdx)("inlineCode",{parentName:"a"},"useAudioData()"))," helper hook to not have to do state management yourself and to wrap the call in ",(0,i.mdx)("a",{parentName:"p",href:"delay-render"},(0,i.mdx)("inlineCode",{parentName:"a"},"delayRender()")),"."),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/using-audio"},"Using audio")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/audio-visualization"},"Audio visualization")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/audio"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Audio/>"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/visualize-audio"},(0,i.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()")))))}p.isMDXComponent=!0}}]);