const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('add');

// Add a task to the list
const addTask = () => {
  if (inputBox.value === '' || inputBox.value === ' ') {
    alert('Please add an item.');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Add icon to each li
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }

  // Clear input field after submit
  inputBox.value = '';
  saveData();
};

// Complete a task
const completeTask = (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  }
};

// Remove a task
const removeTask = (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
};

// Event listeners
addButton.addEventListener('click', addTask);
listContainer.addEventListener('click', (e) => {
  completeTask(e);
  removeTask(e);
});

// Accept the enter key to submit form
inputBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addButton.click();
  }
});

// Local storage
const saveData = () => {
  localStorage.setItem('data', listContainer.innerHTML);
};

const showItems = () => {
  listContainer.innerHTML = localStorage.getItem('data');
};
showItems();
