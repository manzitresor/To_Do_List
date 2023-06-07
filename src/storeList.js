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
  const tasks = new Tasks(taskarr.length, description, false);
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
              <div class= "container">
              <div class='task-content'>
              <input type="checkbox" id="task-${task.index}" ${task.completed ? 'checked' : ''}>
              <label for="task-${task.index}" class="descr">${task.descr}</label>
              </div>
              <div class="icon-container">
              <i class="fas fa-ellipsis-v" class="remove"></i>
              <button class="remove-button" id="${task.index}">Remove</button>
              </div>
              </div>
              <hr>
    `;
    taskContainer.appendChild(listItem);
    const removeButton = listItem.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
      const dataIndex = removeButton.getAttribute('id');
      const taskIndex = parseInt(dataIndex, 10);
      // eslint-disable-next-line no-use-before-define
      deleteTask(taskIndex);
    });
  });
}
// remove task
function deleteTask(index) {
  const newArr = taskarr.filter((element) => element.index !== index);
  taskarr.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  taskarr.push(...newArr);
  localStorage.setItem('todotasks', JSON.stringify(taskarr));
  DisplayTask();
}

export { DisplayTask, addtask, deleteTask };