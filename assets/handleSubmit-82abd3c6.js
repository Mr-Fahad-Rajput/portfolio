const m=async(g,d,t,l,n,o,u)=>{g.preventDefault();let r=3e3,s,c,i;if(o(!0),t==="SignIn"){const{email:a,password:e}=d;c=JSON.stringify({email:a,password:e}),s="login",i="Login Succesful! Welcome aboard!"}else if(t==="SignUp"){const{username:a,email:e,password:f}=d;c=JSON.stringify({username:a,email:e,password:f}),s="register",i="Account Successfully Created! Welcome aboard!"}else if(t==="msg"){const{name:a,email:e,subject:f,message:h}=d;c=JSON.stringify({name:a,email:e,subject:f,message:h}),s="message",i="Message Sent! Thanks for reaching out! We'll be in Touch Soon."}try{const a=await fetch("http://localhost:5000/"+s,{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":"89ddc2f1d6a8e86e377c619d3ae3dc2a9c91adbd913d4eca684a080a0d22caf7"},body:c,credentials:"include"});if(console.log(a.status),a.status===400||a.status===403){l(!0);let e=await a.text();console.error("Error:",e),e.includes("duplicate")&&(e="The Entered Details are Already Registered!"),e=e.replace(/\b\w+:|Path|(.,)\s*/g,""),e=e.replace(/validation/g,"NOT SENT:"),e=e.replace(/.*(?:mongodb\.net|ENOTFOUND).*$/g,"Server Error: Database Server Down"),r=5e3,n({status:!0,text:e}),o(!1)}else l(!1),n({status:!0,text:i}),o(!1),r=2e3,setTimeout(()=>{t=="SignUp"?u("/signin",{replace:!0}):t=="SignIn"&&u("/dashboard",{replace:!0})},r+10)}catch(a){l(!0),console.log(a),a.toString().includes("Failed to fetch")&&(r=4e3,o(!1),n({status:!0,text:"Can't Connect To the Server! Check Your Internet Connection"}))}finally{setTimeout(()=>{l(!1),n({status:!1,text:""})},r)}};export{m as default};