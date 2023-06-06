import './styles.css';

const tasks = [
  {
    descr: 'wash the dishes',
    completed: true,
    index: 1,
  },
  {
    descr: 'complete To Do list Project',
    completed: false,
    index: 1,
  },
];

const taskContainer = document.querySelector('.task-container');

tasks.forEach((task) => {
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
