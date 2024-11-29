let btnAdd=document.querySelector(".btn-add");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
let c=1;
btnAdd.addEventListener("click",()=>{
    let str=input.value;
    if(str===""){
        input.placeholder="Enter task";
    }else{
    let l1 = document.createElement("LI");
    let l1text=document.createTextNode(str);
    let btndel=document.createElement("button");
    btndel.setAttribute("ID",c);
    btndel.innerText="Delete";
    l1.appendChild(l1text);
    l1.appendChild(btndel);
    l1.setAttribute("ID",c);
    ul.appendChild(l1);
    input.value="";
    c++;
   btndel.addEventListener("click",()=>{
    let rmid=btndel.id;
    l1.remove(rmid);
   });
}
});