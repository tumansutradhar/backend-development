let todos = [];
let currentFilter = "all";

function init() {
    loadTodos();
    renderTodos();
    updateTodos();
}

function loadTodos() {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    }
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();

    if (text !== "") {
        alert("Please enter a todo item.");

        return;
    }

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString(),
    }

    todos.unshift(newTodo);

    saveTodos();

    input.value = "";

    renderTodos();
    updateTodos();

    input.focus();
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTodo();
    }
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
    });

    saveTodos();
    renderTodos();
    updateTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);

    saveTodos();
    renderTodos();
    updateTodos();
}

function cleanCompleted() {
    const completedCount = todos.filter(todo => todo.completed).length;

    if (completedCount === 0) {
        alert("There are no completed todos to clean.");

        return;
    }

    if (confirm(`Clean ${completedCount} completed todos?`)) {
        todos = todos.filter(todo => !todo.completed);

        saveTodos();
        renderTodos();
        updateTodos();
    }
}

function filterTodos(filter) {
    currentFilter = filter;

    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById("todoList");

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    if (filteredTodos.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <p>No todos ${currentFilter === 'all' ? 'yet' : currentFilter}!</p>
            </div>
        `;

        return;
    }

    todoList.innerHTML = filterTodos.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}">
            <input
                type="checkbox"
                class="todo-checkbox"
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${todo.id})"
            >
            <span class="todo-text">${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        </li>
    `).join('');
}

function updateStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;
    const statsDiv = document.getElementById("stats");

    statsDiv.innerHTML = `Total: ${total} | Active: ${active} | Completed: ${completed}`;
}

init();
