// app.js
import { DisplayTask, taskarr } from './functionality.js';

const taskContainer = document.querySelector('.task-container');
const clearComplitedTask = document.querySelector('#clearCompleted');

taskContainer.addEventListener('change', (event) => {
  event.preventDefault();
  const checkbox = event.target;
  const dataIndex = checkbox.id.split('-')[1];
  const taskIndex = parseInt(dataIndex, 10);
  // eslint-disable-next-line no-use-before-define
  updateCompleted(taskIndex, checkbox.checked);
});

function updateCompleted(index, completed) {
  const task = taskarr.find((element) => element.index === index);
  if (task) {
    task.completed = completed;
    localStorage.setItem('todotasks', JSON.stringify(taskarr));
  }
}

clearComplitedTask.addEventListener('click', (event) => {
  event.preventDefault();
  const updatedTask = taskarr.filter((task) => !task.completed);
  taskarr.length = 0;
  updatedTask.forEach((task, index) => {
    task.index = index + 1;
    taskarr.push(task);
  });
  localStorage.setItem('todotasks', JSON.stringify(taskarr));
  DisplayTask();
});