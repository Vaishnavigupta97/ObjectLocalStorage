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
li.style.backgroundColor = "grey";
li.style.fontSize = "20px";
li.style.padding = "10px";
parentEle.appendChild(li);
let allObj = [];
let obj = {
    name,
    email, 
    number
}
allObj.push(obj);
localStorage.setItem("addobj", JSON.stringify([...allObj]));
// let abc = JSON.parse(localStorage.getItem("addobj"));
// console.log(abc);

// create a delete button 
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete"
deleteBtn.style.backgroundColor = "red";
deleteBtn.style.padding = "2px";
deleteBtn.style.border = "none";
deleteBtn.style.fontSize = "20px";
deleteBtn.style.marginLeft = "10px";
li.appendChild(deleteBtn);
deleteBtn.addEventListener("click", deleteFunc);
function deleteFunc(){
   deleteBtn.parentElement.remove();
   localStorage.removeItem(addobj);
}
}