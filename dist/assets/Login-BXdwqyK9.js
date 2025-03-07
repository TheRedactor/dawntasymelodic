import{d as a,u as e,r as s,c as t,a as l,b as r,e as i,w as n,f as c,g as o,t as u,h as d,i as m,v as p,j as v,o as x}from"./main-B3cBw7hM.js";const y={class:"min-h-screen flex items-center justify-center bg-gray-50 dark:bg-cosmic-dark py-12 px-4 sm:px-6 lg:px-8"},g={class:"max-w-md w-full space-y-8"},f={class:"text-center"},b={class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},w={class:"mt-8 card p-6"},k={key:0,class:"mb-4 p-3 bg-red-100 text-red-700 rounded-md"},h={class:"mt-1"},j={class:"mt-1"},S=["disabled"],_={key:0,class:"mr-2"},q=a({__name:"Login",setup(a){const q=v(),P=e(),U=s(""),V=s(""),A=s(""),D=s(!1);async function E(){D.value=!0,A.value="";const a=await P.login(U.value,V.value);a.success?q.push("/"):A.value=a.error||"Failed to sign in. Please check your credentials.",D.value=!1}return(a,e)=>{const s=c("router-link");return x(),t("div",y,[l("div",g,[l("div",f,[e[4]||(e[4]=l("h1",{class:"text-4xl font-display font-bold cosmic-glow"},"DawntasyAI",-1)),e[5]||(e[5]=l("h2",{class:"mt-6 text-3xl font-extrabold text-gray-900 dark:text-white"}," Sign in to your account ",-1)),l("p",b,[e[3]||(e[3]=r(" Or ")),i(s,{to:"/register",class:"font-medium text-cosmic-accent hover:text-cosmic-glow"},{default:n((()=>e[2]||(e[2]=[r(" create a new account ")]))),_:1})])]),l("div",w,[A.value?(x(),t("div",k,u(A.value),1)):o("",!0),l("form",{class:"space-y-6",onSubmit:d(E,["prevent"])},[l("div",null,[e[6]||(e[6]=l("label",{for:"email",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"}," Email address ",-1)),l("div",h,[m(l("input",{id:"email",name:"email",type:"email",autocomplete:"email",required:"","onUpdate:modelValue":e[0]||(e[0]=a=>U.value=a),class:"input"},null,512),[[p,U.value]])])]),l("div",null,[e[7]||(e[7]=l("label",{for:"password",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"}," Password ",-1)),l("div",j,[m(l("input",{id:"password",name:"password",type:"password",autocomplete:"current-password",required:"","onUpdate:modelValue":e[1]||(e[1]=a=>V.value=a),class:"input"},null,512),[[p,V.value]])])]),l("div",null,[l("button",{type:"submit",class:"btn btn-primary w-full flex justify-center",disabled:D.value},[D.value?(x(),t("span",_,e[8]||(e[8]=[l("i",{class:"ri-loader-4-line animate-spin"},null,-1)]))):o("",!0),e[9]||(e[9]=r(" Sign in "))],8,S)])],32)])])])}}});export{q as default};
