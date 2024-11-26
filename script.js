let usernameinput=document.querySelector("#usernameinput");
let passwordinput=document.querySelector("#passwordinput");
let btn=document.querySelector("button");
let result=document.querySelector("h5");

let Username="KAD18";
let Password="KAD123";
btn.addEventListener("click",()=>{
    let tempusername=usernameinput.value;
    if(Username===tempusername){
        let temppassword=passwordinput.value;
        if(temppassword===Password){
            result.classList.remove("hide");
            result.innerText="Logined successfully";
        }
        else{
            result.classList.remove("hide");
            result.innerText="Invalid Username or password";
        }
    }
    else{
        result.classList.remove("hide");
        result.innerText="Invalid Username or password";
    }
});


