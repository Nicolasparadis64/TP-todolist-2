let task = document.getElementById('task')
let add = document.querySelector('#add')
let liste = document.querySelector('#liste')
let form = document.getElementById("form")

function getData() {
    let array = JSON.parse(localStorage.getItem('data'))
    return array
}
console.log(getData());

function addTask () {
    let array = getData()
    array.push(task.value)
    localStorage.setItem('data', JSON.stringify(array))
    task.value = ""
    task.focus()
}

function displayTask() {
    let array = getData()
    let i = 1
    for (let task of array) {
        createElement(task)
        console.log(i);
        i++
    }
}

function createElement(task) {
    let li = document.createElement ("li")
    li.textContent = task
    let btn = document.createElement ('button')
    btn.textContent = 'suprimer'
    li.appendChild(btn)
    liste.appendChild(li)
    btn.addEventListener('click',function(){
        deleteTask()
    })
}

function deleteTask (tache) {
    let tab = getData()
    let index = tab.indexof(tache)
    tab.splice(index,1)
    localStorage.setItem('data', JSON.stringify(array))
}

displayTask()

form.addEventListener('click',addTask())