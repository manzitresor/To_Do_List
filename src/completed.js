// app.js
import { DisplayTask, taskarr } from './functionality.js';

const taskContainer = document.querySelector('.task-container');

taskContainer.addEventListener('change', (event) => {
  event.preventDefault();
  const checkbox = event.target;
  const dataIndex = checkbox.id.split('-')[1];
  const taskIndex = parseInt(dataIndex, 10);
  // eslint-disable-next-line no-use-before-define
  updateCompleted(taskIndex, checkbox.checked);
});

function updateCompleted(index, complited) {
  const task = taskarr.find((element) => element.index === index);
  if (task) {
    task.complited = complited;
    localStorage.setItem('todotasks', JSON.stringify(taskarr));
  }
}