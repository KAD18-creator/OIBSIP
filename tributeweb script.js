let btn=document.querySelector("button");
let body=document.querySelector("body");
let mode='light';
btn.addEventListener("click",()=>{
    if(mode==='light'){
        body.classList.add("lightmode");
        mode='dark'
    }else{
        body.classList.remove("lightmode");
        mode='light'
    }   
});
