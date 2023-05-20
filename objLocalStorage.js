var myForm = document.getElementById("myForm");


myForm.addEventListener('submit', addFunc);
function addFunc(e){
e.preventDefault(); 
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var number = document.getElementById("number").value;
var parentEle = document.getElementById("unOrderList");   
myForm.reset();
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


axios.post("https://crudcrud.com/api/c2414d27ea1c482e90ace163a806f983/appointmentData", obj)
.then((respone) => {
    console.log(respone);
}).catch((error) => {
    console.log(error);
})

// console.log(obj.name);
allObj.push(obj);
localStorage.setItem(obj.email, JSON.stringify(allObj));
// create a delete button 
let deleteBtn = document.createElement("button");
deleteBtn.classList = "deleteBtns";
deleteBtn.textContent = "Delete"
li.appendChild(deleteBtn);
deleteBtn.addEventListener("click", deleteFunc);
function deleteFunc(){
   deleteBtn.parentElement.remove();
   localStorage.removeItem(obj.email);
}


// create a edit button 
let editBtn = document.createElement("button");
editBtn.className = "editBtns";
editBtn.textContent = "Edit";
li.appendChild(editBtn);

// edit functionality 
editBtn.addEventListener("click", clickEditFunc);
function clickEditFunc(){
    editBtn.parentElement.remove();
    localStorage.removeItem(obj.email);
    myForm.name.value = obj.name;
    myForm.email.value = obj.email;
    myForm.number.value = obj.number;
    myForm.name.style.color = "black";
    myForm.email.style.color = "black";
    myForm.number.style.color = "black";
}
}
