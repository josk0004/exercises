const addNewTodoBtn = document.getElementById('add-todo');
const newTodoContainer = document.getElementById('new-todo-container');
const todoList = document.getElementById('todo-list');
const newTodoDescription = document.getElementById('new-todo-description');
const newTodoAmount = document.getElementById('new-todo-amount');
const newTodoDate = document.getElementById('new-todo-due-date');
const newTodoPriority = document.getElementById('new-todo-priority');
const saveTodoBtn = document.getElementById('save-todo');
const cancelTodoBtn = document.getElementById('cancel-todo');

addNewTodoBtn.addEventListener('click', () => {
    newTodoContainer.classList.remove('hidden');
});