var inputElement = document.getElementById('todo');
var buttonElement = document.getElementById('add');
var listElement = document.querySelector('#app ul');

var todos = [];

function add() {
    todos.push(inputElement.value);
    render();
}

function render() {
    listElement.innerHTML = '';
    for(todo of todos) {
        var itemElement = document.createElement('li');

        var textElement = document.createTextNode(todo);

        var index = todos.indexOf(todo);

        var anchorElement = document.createElement('a');
        anchorElement.setAttribute('href', '#');
        anchorElement.setAttribute('onclick', `remove(${index})`);

        var textAnchor = document.createTextNode('Excluir');

        anchorElement.appendChild(textAnchor);

        itemElement.appendChild(textElement);
        itemElement.appendChild(anchorElement);

        listElement.appendChild(itemElement);
    }
}

function remove(index) {
    todos.splice(index, 1);
    render();
}

buttonElement.onclick = add;