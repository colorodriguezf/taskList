const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', toggleTask);
taskList.addEventListener('click', deleteTask);

function addTask() {
  const taskInput = document.getElementById('task');
  const newTaskText = taskInput.value.trim();
  
  if (newTaskText !== '') {
    const newTask = document.createElement('li');
    
    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = newTaskText;
    newTask.appendChild(taskParagraph);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('deleteBtn');
    newTask.appendChild(deleteBtn);
    
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

function toggleTask(event) {
  if (event.target.tagName === 'P') {
    event.target.classList.toggle('completed');
  }
}

function deleteTask(event) {
    if (event.target.classList.contains('deleteBtn')) {
      const taskItem = event.target.parentElement;
      taskList.removeChild(taskItem);
    }
  }