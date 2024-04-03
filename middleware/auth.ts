export default defineNuxtRouteMiddleware((to, from)=>{
    console.log("TO",to.path)
    console.log("FROM",from.path)
   
    if(to.path==='/'){ 
      return navigateTo("/Login ")    
    }
})