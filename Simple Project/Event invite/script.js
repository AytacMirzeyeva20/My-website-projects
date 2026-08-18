const radios=document.querySelectorAll("input[name='attend']");
const messageBox=document.getElementById("messageBox");

radios.forEach(radio=>{

radio.addEventListener("change",()=>{

if(radio.value==="Yes" && radio.checked){

messageBox.classList.remove("hidden");

}else{

messageBox.classList.add("hidden");

}

});

});

const form=document.getElementById("rsvpForm");

form.addEventListener("submit",function(e){

e.preventDefault();

document.querySelectorAll(".error").forEach(el=>el.innerHTML="");

let valid=true;

const first=document.getElementById("first").value.trim();
const last=document.getElementById("last").value.trim();
const email=document.getElementById("email").value.trim();

const attend=document.querySelector("input[name='attend']:checked");

if(first===""){
document.getElementById("firstError").innerHTML="First name is required.";
valid=false;
}

if(last===""){
document.getElementById("lastError").innerHTML="Last name is required.";
valid=false;
}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email===""){
document.getElementById("emailError").innerHTML="Email is required.";
valid=false;
}
else if(!emailPattern.test(email)){
document.getElementById("emailError").innerHTML="Enter a valid email.";
valid=false;
}

if(!attend){
document.getElementById("attendError").innerHTML="Please choose an option.";
valid=false;
}

if(valid){

document.getElementById("successMessage").style.display="block";

form.reset();

messageBox.classList.add("hidden");

setTimeout(()=>{

document.getElementById("successMessage").style.display="none";

},5000);

}

});