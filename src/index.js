import './styles.css';

const tasks = [
  {
    descr: 'wash the dishes',
    completed: true,
    index: 1,
  },
];

const taskContainer = document.querySelector('.task-container');

tasks.forEach((task) => {
  let listTask = document.createElement('ul');
  listTask = `
    <li>${task.descr}</li>
    <li>${task.completed}</li>
    `;
  taskContainer.innerHTML += listTask;
});
