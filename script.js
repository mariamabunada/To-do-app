// Get access to all the items that needed
const inputBox=document.querySelector(".inputfield input")
const addBtn=document.querySelector(".inputfield button")
const listOfTasks=document.querySelector(".todolist")
showTasks()
// add button
addBtn.onclick=()=>{
    let taskText=inputBox.value
    let getLocalStorage=localStorage.getItem("new task")
    if(getLocalStorage==null){ //if local storage is null
        arrOfTasks=[] // create empty array
    }
    else{
        arrOfTasks=JSON.parse(getLocalStorage) // transforming json string into a JS object
    }
    arrOfTasks.push(taskText) // pushing the tasks to the arr of tasks
    localStorage.setItem("new task",JSON.stringify(arrOfTasks)) // transforming JS object to Json string
    showTasks() // calling the function
}

function showTasks() {
    let getLocalStorage=localStorage.getItem("new task")
    if(getLocalStorage==null){ //if local storage is null
        arrOfTasks=[] // create empty array
    }
    else{
        arrOfTasks=JSON.parse(getLocalStorage) 
    }
    let newTask=""
    arrOfTasks.forEach((element,index) => {
        newTask+= `<li contenteditable="true">${element}<span onclick="editTask(${index})"><i class="fas fa-regular fa-pen"></i></span><span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
    });
    listOfTasks.innerHTML=newTask // add new task inside ul tasks
    inputBox.value=""//emptify the input box after adding the task
}

function deleteTask(index) {
    let getLocalStorage=localStorage.getItem("new task")
    arrOfTasks=JSON.parse(getLocalStorage) 
    arrOfTasks.splice(index,1)// delete a specific indexed li
    // update local storage after deleting
    localStorage.setItem("new task",JSON.stringify(arrOfTasks)) 
    showTasks() // calling the function
}

function editTask(index) {
    let getLocalStorage=localStorage.getItem("new task")
    arrOfTasks=JSON.parse(getLocalStorage)
    // Replace 1 array element at index with item 
    // Replace the old value with the new value that written inside input box
   let newValue=inputBox.value
   arrOfTasks.splice(index,1,newValue)
   // update local storage after editing
   localStorage.setItem("new task",JSON.stringify(arrOfTasks)) 
    showTasks() 
}