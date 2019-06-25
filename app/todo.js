var inputElement = document.getElementById('todo');
var buttonElement = document.getElementById('add');
var listElement = document.querySelector('#app ul');

var todos = [];

function addTodo() {
    todos.push(inputElement.value);
    render();
}

function render() {
    listElement.innerHTML = '';
    for(todo of todos) {
        var itemElement = document.createElement('li');

        var textElement = document.createTextNode(todo);

        itemElement.appendChild(textElement);

        listElement.appendChild(itemElement);
    }
}

buttonElement.onclick = addTodo;