// Função para alterar a cor de fundo
function changeBackgroundColor() {
    const colorInput = document.getElementById('colorInput');
    document.body.style.backgroundColor = colorInput.value;
}

// Função para alterar a cor de fundo das tasks
function changeTaskColor() {
    const colorInput = document.getElementById('colorInput');
    let tasks_div = document.getElementsByClassName("task");

    for (let div of tasks_div) {
        div.style.backgroundColor = colorInput.value;
    }
}

// Função para criar um elemento de tarefa
function createTaskElement(name, description) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `<h3>${name}</h3><p>${description}</p>`;
    return taskElement;
}

// Função para salvar a tarefa no localStorage
function saveTask(task, columnId) {
    let tasks = JSON.parse(localStorage.getItem(columnId)) || [];
    tasks.push(task);
    localStorage.setItem(columnId, JSON.stringify(tasks));
}

// Carrega as tasks salvas no LocalStorage
function loadTasks() {
    for(let task_type of ["todo", "inProgress", "done"]) {
        let task = JSON.parse(localStorage.getItem(task_type)) || [];

        for (let each of task) {
            let taskElement = createTaskElement(each["name"], each["description"]);
            let column = document.getElementById(task_type);
            column.appendChild(taskElement);
        }
    }
}

// Função para adicionar uma tarefa ao clicar no botão "Adicionar" na coluna
function addTask(columnId) {
    const nameInput = document.getElementById(`${columnId}Name`);
    const descriptionInput = document.getElementById(`${columnId}Description`);
    const taskElement = createTaskElement(nameInput.value, descriptionInput.value);
    
    if(validateTask(columnId, nameInput.value)) {
        saveTask({ name: nameInput.value, description: descriptionInput.value }, columnId);
        
        const column = document.getElementById(columnId);
        column.appendChild(taskElement);

        // Limpar os campos de entrada após adicionar a tarefa
        nameInput.value = '';
        descriptionInput.value = '';
    }
    else {
        alert("Uma tarefa com esse nome já existe. Por favor, utilize outro nome");
    }
}

// Função que confirma se a tarefa possui um nome único
function validateTask(task_type, task_name) {
    if(task_name.trim() == "") {
        return false;
    }

    let tasks = JSON.parse(localStorage.getItem(task_type));
    for (let task of tasks) {
        if(task.name == task_name) {
            return false;
        }
    }
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    // Carrega os registros salvos
    loadTasks();

    // Adicione manipuladores de eventos para os botões "Adicionar" nas colunas
    document.getElementById('todoAddButton').addEventListener('click', () => addTask('todo'));
    document.getElementById('inProgressAddButton').addEventListener('click', () => addTask('inProgress'));
    document.getElementById('doneAddButton').addEventListener('click', () => addTask('done'));

    // Adicione um manipulador de eventos para o botão "Alterar Cor"
    document.getElementById('changeBackgroundColorButton').addEventListener('click', changeBackgroundColor);
    document.getElementById('changeTaskColorButton').addEventListener('click', changeTaskColor);
});
