let taskInput = document.querySelector(".taskIn")
let deleteBtn
let editbtn
let completedBtn
let completedTask = document.querySelector(".completedTask")
let pendingTask = document.querySelector('.pendingTask')

function addTask() {
    // differ of complete or pending task
    let task = taskInput.value;

    let pendingTaskBox = document.createElement('div')
    pendingTaskBox.classList.add('taskBoxPending')
    pendingTask.appendChild(pendingTaskBox)

    let completeTaskBox = document.createElement('div')
    completeTaskBox.classList.add('taskBoxCompleted')
    completedTask.appendChild(completeTaskBox)


    // tasks
    let taskBar = document.createElement("input")
    taskBar.setAttribute('readonly', 'readonly')
    taskBar.classList.add('task')
    taskBar.value = task;
    pendingTaskBox.appendChild(taskBar)

    editbtn = document.createElement("btn")
    editbtn.innerHTML = 'Edit'
    editbtn.classList.add('btn')
    pendingTaskBox.appendChild(editbtn)
    // edit btn functinality
    editbtn.addEventListener('click', () => {
        if (editbtn.innerHTML == 'Edit') {
            taskBar.removeAttribute('readonly', 'true');
            editbtn.innerHTML = 'Save'
        }
        else {
            taskBar.setAttribute('readonly', 'true');
            editbtn.innerHTML = 'Edit'
        }
    })
    deleteBtn = document.createElement("btn")
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.classList.add('btnDelete')
    pendingTaskBox.appendChild(deleteBtn)
    // delete button functionality
    deleteBtn.addEventListener('click', () => {
        pendingTask.removeChild(pendingTaskBox)
    })

    let completeTag = document.createElement('span')
    completeTag.innerText = "Completed"
    completeTag.classList.add('completedTag')

    completedBtn = document.createElement("btn")
    completedBtn.innerHTML = 'Completed'
    completedBtn.classList.add('btn')
    pendingTaskBox.appendChild(completedBtn)

    // completebtn fucnitonality
    completedBtn.addEventListener('click', () => {
        pendingTask.removeChild(pendingTaskBox)
        completeTaskBox.appendChild(taskBar)
        completeTaskBox.appendChild(completeTag)


    })

}



let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    addTask()

    event.preventDefault()
})