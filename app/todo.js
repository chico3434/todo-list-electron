var inputElement = document.getElementById('todo');
var buttonElement = document.getElementById('add');
var listElement = document.querySelector('#app ul');

var todos = JSON.parse(localStorage.getItem('list')) || [];

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

function add() {
    todos.push(inputElement.value);
    update();
}

function remove(index) {
    todos.splice(index, 1);
    update();
}

function save() {
    localStorage.setItem('list', JSON.stringify(todos));
}

function update() {
    render();
    save();
}

render();

buttonElement.onclick = add;