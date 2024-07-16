document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', manageTask);

    function addTask(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskText));

        const editBtn = document.createElement('button');
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('Delete'));
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = '';
    }

    function manageTask(e) {
        if (e.target.textContent === 'Delete') {
            e.target.parentElement.remove();
        } else if (e.target.textContent === 'Edit') {
            const newText = prompt('Edit your task', e.target.parentElement.firstChild.textContent);
            if (newText) {
                e.target.parentElement.firstChild.textContent = newText;
            }
        }
    }
});
