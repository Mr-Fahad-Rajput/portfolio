import{r as n,j as e,_ as w}from"./index-17b16dc5.js";import{m as j}from"./mailChimp-8045beb2.js";import{s as y}from"./sent-7490dff0.js";import{n as u}from"./notsent-b3569384.js";import{A as k}from"./AlertBox-84621fc1.js";function A(){const[p,o]=n.useState(y),[c,d]=n.useState(!1),[x,s]=n.useState({status:!1,text:""}),[m,g]=n.useState(!1),[i,h]=n.useState({email:"",status:"pending"});n.useEffect(()=>{const a=window.location.hash;a==="#success"?(s({status:!0,text:"Sucessfully Subscribed to The News Letter!"}),setTimeout(()=>{s({status:!1})},3e3),h({...i,email:""})):a==="#cancel"&&(o(u),s({status:!0,text:"Subscription Didn't work :("}),setTimeout(()=>{s({status:!1})},3e3))},[]);const f=a=>{const l=a.target.name,t=a.target.value;h(r=>({...r,[l]:t}))},b=async()=>{d(!0);try{const l=(await w(()=>import("./handleAPI-e9f033ab.js"),[])).default;l(i,"mailchimp","POST").then(t=>{if(t.ok)return t=t.json(),t;throw new Error("Request failed with status: "+t)}).then(t=>{console.log(t.urlRes);const r=t.urlRes;window.location=r,location.reload()}).catch(t=>{if(o(u),t.toString().includes("Failed to fetch"))s({status:!0,text:"Can't Connect To the Server! Check Your Internet Connection"});else{const r="http://localhost:5173/mailchimp#cancel";window.location=r,location.reload()}}).finally(()=>{d(!1),setTimeout(()=>{s({status:!1})},3e3)})}catch(a){console.error("Error importing handleSubmit:",a)}};return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"mainContent",children:[e.jsxs("div",{className:"text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2",children:[e.jsx("div",{className:" inline-flex w-64 md:my-12 h-full md:float-left place-items-center",children:e.jsx("a",{href:"https://mailchimp.com/",target:"_blank",rel:"noreferrer",children:e.jsx("img",{src:j,alt:"Mail Chimp Ilustration",className:" w-64 h-56 hover:scale-110 transform duration-500"})})}),e.jsxs("div",{className:"overflow-hidden pt-2 mx-2 ",children:[e.jsx("h1",{className:"mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand",children:"Mail Chimp API"}),e.jsxs("p",{className:" mt-3 mx-auto text-justify tracking-tight indent-10",children:[e.jsx("b",{className:"text-2xl",children:"T"}),"he Mailchimp API is a robust and versatile tool that empowers businesses to seamlessly integrate their applications with Mailchimp's email marketing and automation platform. With the Mailchimp API, developers can create custom solutions that enhance marketing campaigns, audience engagement, and data management. This API enables businesses to automate tasks such as list management, campaign creation, and subscriber interactions."]}),e.jsxs("p",{className:"mx-auto text-justify tracking-tighter indent-10",children:[e.jsx("b",{className:"text-2xl",children:"B"}),"y leveraging the Mailchimp API, businesses can unlock the full potential of email marketing, streamline their communication efforts, and provide a more personalized experience to their audience. Whether it's syncing customer data, automating email sends, or tracking campaign performance, the Mailchimp API offers a powerful way to integrate email marketing functionalities into a wide range of applications and platforms. For More details about the Power of Mail Chimp, Click on the logo to The left."]})]})]}),e.jsxs("div",{className:"mx-2 text-center md:px-10",children:[e.jsx("h3",{className:"mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand",children:"How To:"}),e.jsx(k,{responseStatus:x,msgImg:p,className:"top-0"}),e.jsxs("p",{className:" mt-3 mx-auto text-justify indent-10",children:[e.jsx("b",{className:"text-2xl",children:"T"}),'o interact with the Mailchimp API, follow these simple steps. Begin by entering your email address into the designated email input field. You’ll notice two subscription options available. If you toggle the button to "verified", the system will initiate a verification email before finalizing the subscription on the Mailchimp site. Conversely, toggling to "unverified" will result in a direct subscription without requiring a confirmation email.']}),e.jsxs("p",{className:" mx-auto text-justify tracking-tighter indent-10",children:[e.jsx("b",{className:"text-2xl",children:"P"}),"lease note that this entire process is designed solely for API demonstration purposes. When you input your email, it will be registered for the newsletter; however, please be aware that no promotional emails will be sent. This lack of promotional emails is intentional and designed for clear reasons. Feel free to explore the functionality of the Mailchimp API in this controlled setting."]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("label",{className:"dark:text-mainBg ",htmlFor:"RegisterEmail",children:"Email:"}),e.jsx("input",{id:"RegisterEmail",type:"email",className:"inp",placeholder:"name@example.com",name:"email",value:i.email,onChange:f,required:!0,pattern:"[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,4}$"}),e.jsxs("div",{className:"text-center text-base  ",children:[e.jsx("p",{children:"Verified"}),e.jsx("button",{onClick:()=>{g(!m),i.status=="subscribed"?i.status="pending":i.status="subscribed"},className:"flex justify-center mx-auto cursor-pointer relative w-6 h-11 dark:bg-dBrand bg-mainBg overflow-hidden border-dBrand dark:border-mainBg  border-2 rounded-[999px]","aria-label":"Dark Mode Switch",children:e.jsx("div",{className:`absolute w-5 h-5 dark:bg-mainBg border-[1px] duration-300 border-dBrand dark:border-mainBg rounded-[999px] ${m?"translate-y-full":""} bg-lBrand`})}),e.jsx("p",{children:"Un-Verified"})]})]}),e.jsx("button",{name:"send",className:"p-4 m-1 btn whitespace-nowrap mx-auto",onClick:()=>{b()},disabled:c,"aria-label":"Check Out Button",children:c?e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"animate-spin mr-2",children:e.jsxs("svg",{className:"w-5 h-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-100 ",cx:"12",cy:"12",r:"10",stroke:"#FEFAE6",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"#471AA0",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),"Fetching Api..."]}):"Subscribe"})]})]})})}export{A as default};