let scr=document.querySelector("input");
let eql=document.querySelector(".eql");
let key=document.querySelectorAll(".calval");
let clear=document.querySelector(".clear");

function solve(){ 

        let x = scr.value;
        try {
            let y = math.evaluate(x); // Corrected to use math.evaluate
            scr.value = y; // Set the input value to the result
        } catch (error) {
            scr.value = "Error"; // Handle invalid input
        }
   
}
eql.addEventListener("click",()=>{
   solve();
});
key.forEach((n)=>{
    n.addEventListener("click",()=>{
        
        scr.value+=n.id;
   
    })
});
clear.addEventListener("click",()=>{
    scr.value="";
});
