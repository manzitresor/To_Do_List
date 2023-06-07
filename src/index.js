import './styles.css';
import { DisplayTask, addtask } from './StoreList.js';

const formBtn = document.querySelector('.btn');
formBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addtask();
});

DisplayTask();
