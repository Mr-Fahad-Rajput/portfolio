import{g as A,r as c,j as i,u as D,_ as N}from"./index-17b16dc5.js";var I=function(e,t){return e<t};function s(e){if(!(this instanceof s))return new s(e);this.array=[],this.size=0,this.compare=e||I}s.prototype.clone=function(){var e=new s(this.compare);return e.size=this.size,e.array=this.array.slice(0,this.size),e};s.prototype.add=function(e){var t=this.size;this.array[this.size]=e,this.size+=1;for(var a,r;t>0&&(a=t-1>>1,r=this.array[a],!!this.compare(e,r));)this.array[t]=r,t=a;this.array[t]=e};s.prototype.heapify=function(e){this.array=e,this.size=e.length;var t;for(t=this.size>>1;t>=0;t--)this._percolateDown(t)};s.prototype._percolateUp=function(e,t){for(var a=this.array[e],r,n;e>0&&(r=e-1>>1,n=this.array[r],!(!t&&!this.compare(a,n)));)this.array[e]=n,e=r;this.array[e]=a};s.prototype._percolateDown=function(e){for(var t=this.size,a=this.size>>>1,r=this.array[e],n,o,m;e<a&&(n=(e<<1)+1,o=n+1,m=this.array[n],o<t&&this.compare(this.array[o],m)&&(n=o,m=this.array[o]),!!this.compare(m,r));)this.array[e]=m,e=n;this.array[e]=r};s.prototype._removeAt=function(e){if(!(e>this.size-1||e<0))return this._percolateUp(e,!0),this.poll()};s.prototype.remove=function(e){for(var t=0;t<this.size;t++)if(!this.compare(this.array[t],e)&&!this.compare(e,this.array[t]))return this._removeAt(t),!0;return!1};s.prototype.removeOne=function(e){if(typeof e=="function"){for(var t=0;t<this.size;t++)if(e(this.array[t]))return this._removeAt(t)}};s.prototype.removeMany=function(e,t){if(typeof e!="function"||this.size<1)return[];t=t?Math.min(t,this.size):this.size;for(var a=0,r=new Array(t),n=0,o=new Array(this.size);a<t&&!this.isEmpty();){var m=this.poll();e(m)?r[a++]=m:o[n++]=m}r.length=a;for(var p=0;p<n;)this.add(o[p++]);return r};s.prototype.peek=function(){if(this.size!=0)return this.array[0]};s.prototype.poll=function(){if(this.size!=0){var e=this.array[0];return this.size>1?(this.array[0]=this.array[--this.size],this._percolateDown(0)):this.size-=1,e}};s.prototype.replaceTop=function(e){if(this.size!=0){var t=this.array[0];return this.array[0]=e,this._percolateDown(0),t}};s.prototype.trim=function(){this.array=this.array.slice(0,this.size)};s.prototype.isEmpty=function(){return this.size===0};s.prototype.forEach=function(e){if(!(this.isEmpty()||typeof e!="function"))for(var t=0,a=this.clone();!a.isEmpty();)e(a.poll(),t++)};s.prototype.kSmallest=function(e){if(this.size==0||e<=0)return[];e=Math.min(this.size,e);const t=Math.min(this.size,2**(e-1)+1);if(t<2)return[this.peek()];const a=new s(this.compare);a.size=t,a.array=this.array.slice(0,t);const r=new Array(e);for(let n=0;n<e;n++)r[n]=a.poll();return r};var P=s;const _=A(P),k=e=>{const{userName:t,profileImg:a,comment:r,createdAt:n,animate:o}=e,[m,p]=c.useState("");return c.useEffect(()=>{p("animate-scale-100"),setTimeout(()=>{p("")},3e3)},[o]),i.jsxs("div",{className:`bg-lBrand dark:bg-mainBg p-2 rounded-lg text-dBrand ${m} border border-dBrand`,children:[i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"current",className:"block w-5 h-5 text-gray-400 mb-4",viewBox:"0 0 975.036 975.036",children:i.jsx("path",{d:"M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"})}),i.jsx("p",{className:"leading-relaxed mb-2",children:r}),i.jsxs("a",{className:"inline-flex items-center",children:[i.jsx("img",{alt:"testimonial",src:a,className:"w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"}),i.jsxs("span",{className:"flex-grow flex flex-col pl-4",children:[i.jsx("span",{className:"title-font font-medium text-gray-900",children:t}),i.jsx("span",{className:"text-gray-500 text-sm",children:n})]})]})]})},C=e=>{const{skillName:t}=e;return i.jsx("div",{className:"bg-lBrand dark:bg-mainBg px-1 m-1 rounded-lg text-dBrand flex justify-center grow border animate-scale-100 border-dBrand",children:i.jsx("h4",{className:"whitespace-nowrap",children:t})})};function M(){const[e,t]=c.useState(!1),[a,r]=c.useState(25),n=[{name:"React"},{name:"C"},{name:"Blender 3D"},{name:"C++"},{name:"React Native"},{name:"PHP"},{name:"MongoDB"},{name:"Java"},{name:"Python"},{name:"Node JS"},{name:"Docker"},{name:"Express JS"},{name:"GSAP"},{name:"Wordpress"},{name:"Redux"},{name:"Tailwind"},{name:"Unity"},{name:"JavaScript"},{name:"BASH"},{name:"Github Pages"},{name:"cPanel"},{name:"CLI"},{name:"Kubernetes"},{name:"Pandas"},{name:"Google Cloud Platform"},{name:"C#"},{name:"Firebase"},{name:"MySQL"},{name:"WebScrapping"},{name:"Vercel"},{name:"Git Bash"},{name:"Three JS"},{name:"Websocket IO"},{name:"Pug JS"},{name:"Bootstrap"},{name:"LESS"},{name:"RESTful API"},{name:"EJS"},{name:"Heroku"},{name:"CI/CD"},{name:"GoDaddy"},{name:"Github"},{name:"Hostinger"},{name:"SQL"},{name:"Data Analysis"},{name:"Railway"},{name:"Vim"},{name:"SSMS"},{name:"Postman"},{name:"Gitlab"},{name:"Data Visualization"},{name:"Figma"},{name:"PyGame"},{name:"Code Pen"},{name:"Adobe XD"},{name:"Beautiful Soup"}],[o,m]=c.useState(new _((h,d)=>new Date(d.createdAt).getTime()-new Date(h.createdAt).getTime())),p=new Set,[v,w]=c.useState(),[f,z]=c.useState(""),x=D(),[j,B]=c.useState(0),[S,y]=c.useState([]);c.useEffect(()=>{y(n.slice(0,25));const d=setInterval(()=>{r(l=>l+1),y(l=>l.slice(1))},1e4);return()=>clearInterval(d)},[]),c.useEffect(()=>{y(h=>[...h,n[a]]),a>=n.length&&r(0)},[a]),c.useEffect(()=>{(async()=>{try{const b=(await N(()=>import("./getApi-6fdb6ad0.js"),[])).default;b("comment","GET").then(u=>{if(u.ok)return u=u.json(),u;throw new Error("Request failed with status: "+u)}).then(u=>{u.comments.forEach(g=>{p.has(g._id)||(o.add(g),p.add(g._id))}),m(o)}).catch(u=>{console.log(u)}).finally(()=>{})}catch(l){console.error("Error importing handleSubmit:",l)}})();const d=setInterval(()=>{o.isEmpty()||(z(o.poll()),B(l=>(l+1)%o.size),j===o.size-1&&w(!v),t(l=>!l))},2e4);return()=>clearInterval(d)},[v]);function E(h){const d={day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"},l=Intl.DateTimeFormat().resolvedOptions().timeZone;return new Date(h).toLocaleDateString("en-US",d)+" "+l}return x.pathname==="/signup"||x.pathname==="/signin"?null:i.jsx(i.Fragment,{children:i.jsxs("section",{className:"sidebar",children:[i.jsx("h3",{className:"mb-2 text-center dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand",children:"My Tech Arsenal"}),i.jsx("div",{className:"flex flex-wrap",children:S&&S.map((h,d)=>h&&h.name&&i.jsx(C,{skillName:h.name},d))}),f&&i.jsxs("div",{className:"absolute bottom-1 right-1 left-1 bg-mainBg dark:bg-dBrand",children:[i.jsx("h3",{className:"mb-2 text-center dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand ",children:"Endorsments"}),i.jsx(k,{userName:f.name,profileImg:f.profileImg,comment:f.comment,createdAt:E(f.createdAt),animate:e})]})]})})}export{M as default};