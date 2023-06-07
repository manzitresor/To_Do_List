/* eslint-disable no-use-before-define */
const taskContainer = document.querySelector('.task-container');
const descr = document.querySelector('#addTask');

function Tasks(index, descr, completed) {
  this.index = index;
  this.descr = descr;
  this.completed = completed;
}

const todotasks = localStorage.getItem('todotasks');
const taskarr = todotasks ? JSON.parse(todotasks) : [];

// Adding task
function addtask() {
  const description = descr.value;
  const tasks = new Tasks(taskarr.length + 1, description, false);
  taskarr.push(tasks);
  localStorage.setItem('todotasks', JSON.stringify(taskarr));
  descr.value = '';
}

// Displaying Tasks
function DisplayTask() {
  taskContainer.innerHTML = '';
  const sortedTasks = taskarr.sort((x, y) => x.index - y.index);
  sortedTasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="container">
        <div class='task-content'>
          <input type="checkbox" id="task-${task.index}" ${task.completed ? 'checked' : ''}>
          <input class="descr" value="${task.descr}" ${task.completed ? 'disabled' : ''}>
        </div>
        <div class="icon-container">
          <i class="fas fa-ellipsis-v edit-btn"></i>
          <i class="fas fa-trash-alt remove-button" id="${task.index}"></i>
        </div>
      </div>
      <hr>
    `;
    taskContainer.appendChild(listItem);
    const editIcon = listItem.querySelector('.edit-btn');
    const descriptionInput = listItem.querySelector('.descr');
    const removeButton = listItem.querySelector('.remove-button');

    editIcon.addEventListener('click', () => {
      removeButton.style.display = 'block';
      descriptionInput.disabled = !descriptionInput.disabled;
      if (!descriptionInput.disabled) {
        descriptionInput.focus();
      }
    });

    descriptionInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        descriptionInput.blur();
      }
    });

    descriptionInput.addEventListener('blur', () => {
      const newDescription = descriptionInput.value;
      const dataIndex = removeButton.getAttribute('id');
      const taskIndex = parseInt(dataIndex, 10);
      updateTask(taskIndex, newDescription);
    });

    removeButton.addEventListener('click', () => {
      const dataIndex = removeButton.getAttribute('id');
      const taskIndex = parseInt(dataIndex, 10);
      deleteTask(taskIndex);
    });
  });
}

// Remove task
function deleteTask(index) {
  const newArr = taskarr.filter((element) => element.index !== index);
  taskarr.length = 0;
  newArr.forEach((element, i) => {
    element.index = i + 1;
    taskarr.push(element);
  });
  localStorage.setItem('todotasks', JSON.stringify(taskarr));
  DisplayTask();
}

// Update task description
function updateTask(index, newDescription) {
  const task = taskarr.find((element) => element.index === index);
  if (task) {
    task.descr = newDescription;
    localStorage.setItem('todotasks', JSON.stringify(taskarr));
    DisplayTask();
  }
}

export { DisplayTask, addtask };
