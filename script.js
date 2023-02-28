// selectors
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const button = ducument.querySelector('todo-button');
const list = document.querySelector('#todo-list');

// event Listeners
form.addEventListener('submit', addTask);
list.addEventListener('click', removeTask);

// Functions
function addTask(e) {
    e.preventDefault();
    const task = input.value.trim();
    if (task.length > 0) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = '';
    }
}

function removeTask(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
}
