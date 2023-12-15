let clickCount = 0;

function saveTodoInCookie(todo) {
    let todoCookie = getTodosFromCookie();
    todoCookie.push(todo);
    document.cookie = "todos=" + JSON.stringify(todoCookie) + ";path=/";
}

function getTodosFromCookie() {
    const cookieString = document.cookie.split('; ').find(row => row.startsWith('todos='));
    if (cookieString) {
        const cookieValue = cookieString.split('=')[1];
        try {
            return JSON.parse(decodeURIComponent(cookieValue));
        } catch (e) {
            return [];
        }
    }
    return [];
}

function displayTodos() {
    const todos = getToDosFromCookie();

    const list = document.getElementById('todo-items');

    list.innerHTML = '';

    todos.forEach(todoInCookie => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = todoInCookie;
        list.appendChild(li);
    })
}