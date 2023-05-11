var myForm = document.getElementById("myForm");
myForm.addEventListener('submit', addFunc);
function addFunc(e){
e.preventDefault();    
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let number = document.getElementById("number").value;
const parentEle = document.getElementById("unOrderList");
let li = document.createElement("li");
li.innerHTML = li.innerHTML + `name : ${name}, email : ${email}, PhoneNumber : ${number}`
parentEle.appendChild(li);
let obj = {
    name,
    email, 
    number
}
localStorage.setItem("addobj", JSON.stringify(obj));
}