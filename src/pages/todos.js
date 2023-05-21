import Auth from "../services/auth.js";
import loading from "../services/loading.js";
import Todos from "../services/todos.js";
import Form from "../components/form.js";

const init = async (todos) => {
    const {ok: isLogged} = await Auth.me()
    const init = async () => {
        loading.stop()
    }

    // create POST /todo { description: string }
    // get get /todo/1 - 1 это id
    // getAll get /todo
    // update put /todo/1 - 1 это id { description: string }
    // delete delete /todo/1 - 1 это id

    await generateTaskList(todos);

    const formEl = document.getElementById('todo');

    new Form(formEl, {
        'description': () => false,
    }, (values) => {
        addTodo(todos, values.description);
    })
}

function generateTask(todos, todo) {
    const todoHTML = document.createElement('div');
    const todoCheckbox = document.createElement('input');
    const todoDescription = document.createElement('span');
    const todoRemoveButton = document.createElement('button');
    todoHTML.classList.add('todo');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.classList.add('todo__checkbox');
    todoCheckbox.checked = todo.completed;
    todoCheckbox.onchange = async function (e) {
        loading.start();
        const checboxValue = e.target.checked;
        e.target.checked = !e.target.checked;
        const response = await todos.updateById(todo.id, checboxValue);
        loading.stop();
        if (response) {
            e.target.checked = !e.target.checked;
        } else {
            alert('Не удалось отправить запрос на сервер. Попробуйте ещё раз.')
        }
    }
    todoDescription.classList.add('todo__description');
    todoDescription.innerText = todo.description;
    todoRemoveButton.classList.add('todo__remove');
    todoRemoveButton.innerText = 'Удалить';
    todoRemoveButton.onclick = async function (e) {
        const response = confirm('Вы уверены?');
        if (response) {
            loading.start();
            await todos.deleteById(todo.id);
            generateTaskList();
        }
    }
    todoHTML.appendChild(todoCheckbox);
    todoHTML.appendChild(todoDescription);
    todoHTML.appendChild(todoRemoveButton);
    return todoHTML;
}

const generateTaskList = async (todos) => {
    document.querySelector('.todos').innerHTML = '';
    loading.stop();
    let list = await todos.getAll();
    list.forEach(todo => {
        const todoHTML = generateTask(todos, todo);
        document.querySelector('.todos').appendChild(todoHTML);
    });
}

const addTodo = async (todos, description) => {
    loading.start();
    todos.create(description).then(async res => {
        console.log(res);
        if (res.ok) {
            await generateTaskList(todos);
        } else {
            console.log('Ошибка');
        }
    })
    loading.stop();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    const todos = new Todos();
    init(todos)
}