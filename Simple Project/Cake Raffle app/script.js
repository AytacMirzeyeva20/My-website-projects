let participants =JSON.parse(localStorage.getItem("cakeParticipants")) || [];

const input=document.getElementById("nameInput");
const addBtn=document.getElementById("addBtn");
const drawBtn=document.getElementById("drawBtn");
const resetBtn=document.getElementById("resetBtn");
const list=document.getElementById("list");
const count=document.getElementById("count");
const winnerCard=document.getElementById("winnerCard");
const winnerName=document.getElementById("winnerName");

function save(){
localStorage.setItem(
"cakeParticipants",
JSON.stringify(participants)
);
}

function render(){

list.innerHTML="";
participants.forEach(name=>{

const li=document.createElement("li");
li.textContent=name;
list.appendChild(li);

});

count.textContent=participants.length;

}

function addParticipant(){

let name=input.value.trim();

if(name===""){
alert("Enter a name.");
return;
}

if(participants.some(
n=>n.toLowerCase()===name.toLowerCase()
)){
alert("Duplicate names are not allowed.");
return;
}

participants.push(name);

save();
render();

input.value="";
input.focus();

drawBtn.disabled=false;
winnerCard.classList.remove("show");

}

addBtn.onclick=addParticipant;

input.addEventListener("keydown",e=>{

if(e.key==="Enter"){
addParticipant();
}

});

drawBtn.onclick=function(){

if(participants.length===0){
alert("No participants.");
return;
}

const winner=
participants[
Math.floor(Math.random()*participants.length)
];

winnerName.textContent=winner;
winnerCard.classList.add("show");

createConfetti();

drawBtn.disabled=true;

}

resetBtn.onclick=function(){

if(!confirm("Reset the raffle?")) return;

participants=[];

save();

render();

winnerCard.classList.remove("show");

drawBtn.disabled=false;

}

function createConfetti(){

document
.querySelectorAll(".confetti")
.forEach(c=>c.remove());

const colors=[
"#ff8fab",
"#ffd166",
"#95d5b2",
"#90caf9",
"#f4a261"
];

for(let i=0;i<40;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"%";

piece.style.background=
colors[Math.floor(Math.random()*colors.length)];

piece.style.animationDelay=
Math.random()*.5+"s";

winnerCard.appendChild(piece);

setTimeout(()=>{
piece.remove();
},2500);

}

}

render();
