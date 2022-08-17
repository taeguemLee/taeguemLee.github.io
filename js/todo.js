const todo_form = document.getElementById('todo-form');
const todo_input = todo_form.querySelector('input');
const todo_list = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
    const div = e.target.parentElement;
    div.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const div = document.createElement('div');
    div.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const img = document.createElement('img');
    img.src = 'img/delete.png';
    img.addEventListener('click', deleteToDo);
    div.appendChild(span);
    div.appendChild(img);
    todo_list.appendChild(div);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = todo_input.value;
    todo_input.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todo_form.addEventListener('submit', handleToDoSubmit);

const saved_to_dos = localStorage.getItem(TODOS_KEY);

if (saved_to_dos) {
    const parsed_to_dos = JSON.parse(saved_to_dos);
    toDos = parsed_to_dos;
    parsed_to_dos.forEach(paintToDo);
}