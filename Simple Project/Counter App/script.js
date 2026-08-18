let button1=document.querySelector(".btn_1");
let button2=document.querySelector(".btn_2");
let button3=document.querySelector(".btn_3");
let counter=document.querySelector(".count")
let count=0;

button1.addEventListener("click",()=>{
    count --;
    counter.textContent = count;
})

button2.addEventListener("click",()=>{
    count=0;
    counter.textContent = count;
})

button3.addEventListener("click",()=>{
    count ++;
    counter.textContent = count;
})
