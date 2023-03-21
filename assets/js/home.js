const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', () => {
const taskList = document.getElementById('task-list');
const checkboxes = taskList.querySelectorAll('input[type="checkbox"]:checked');
const ids = Array.from(checkboxes).map(checkbox => checkbox.value);

fetch('/delete-tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ ids })
})
  .then(response => {
    if (response.ok) {
      location.reload(); // reload the page after successful delete
    } else {
      console.log('Error while deleting tasks:', response.statusText);
    }
  })
  .catch(error => console.error('Error while deleting tasks:', error));
});