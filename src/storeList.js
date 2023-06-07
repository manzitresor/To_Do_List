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
              <i class="fas fa-ellipsis-v"></i>
              </div>
              </div>
              <hr>
    `;
    taskContainer.appendChild(listItem);
  });
}

export { DisplayTask, addtask };