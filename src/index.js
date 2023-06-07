import './styles.css';
import { DisplayTask, addtask } from './functionality.js';

const formBtn = document.querySelector('.btn');

formBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addtask();
  DisplayTask();
});

DisplayTask();
