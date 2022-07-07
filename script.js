const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.todo-input')

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

function addTodo(event) {
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('flex', 'gap-2')

    const todoLi = document.createElement('li')
    todoLi.classList.add('border-2', 'rounded-md', 'p-2', 'flex-1')
    todoLi.innerText = todoInput.value
    todoInput.value = ''

    todoDiv.appendChild(todoLi)

    const buttonComplete = document.createElement('button')
    buttonComplete.innerHTML = '<img src="./assets/check.svg" width="25">'
    buttonComplete.classList.add('check-btn')
    todoDiv.appendChild(buttonComplete)

    const buttonClear = document.createElement('button')
    buttonClear.innerHTML = '<img src="./assets/delete.svg" width="25">'
    buttonClear.classList.add('delete-btn')
    todoDiv.appendChild(buttonClear)

    todoList.appendChild(todoDiv)
}

function deleteCheck(event) {
    const item = event.target
    const todo = item.parentElement

    if (item.classList[0] === 'delete-btn') {
        todo.remove()
    }
    if (item.classList[0] === 'check-btn') {
        todo.classList.toggle('completed')
    }
}