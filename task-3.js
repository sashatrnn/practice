const form = document.querySelector("form");
const input = document.querySelector("#input");
const ul = document.querySelector("#list");

// Function to create new task element, return LI element
const createNewTaskElement = (value) => {
  const todoMarkup = `
        <li>
          <input disabled value="${value}"/>
          <div>
            <button data-action="edit">Edit</button>
            <button data-action="delete">Delete</button>
          </div>
        </li>
        `;

  return todoMarkup;
};

// Function to handle submit action
function handleSubmit(e) {
    e.preventDefault();
    if(input.value){
       const markup = createNewTaskElement(input.value);
       ul.insertAdjacentHTML('afterbegin', markup);
       input.value = '';
    }
}

// Function to add a task to the list (use createNewTaskElement)
function addTask() {}

// Function to delete a task from the list
function deleteTask(e) {
    if(e.target.dataset.action === 'delete'){
        const liElement = e.target.closest('li');
        liElement.remove()
    }
}

// Function to edit a task (toggle class active, if button EDIT has class active:
// change button textContent to "Save", add class "active" for button
// add class "active" for input, and remove "disabled" attribute
// else do reverse actions
function editTask(e) {
    if(e.target.dataset.action === 'edit'){
        const liEl = e.target.closest('li');
        const button = liEl.querySelector('li button[data-action="edit"]');
        const input = liEl.querySelector('input');
        button.classList.toggle('active');
        if (button.classList.contains('active')){
            button.textContent = 'Save';
            input.classList.add('active');
            input.removeAttribute('disabled');
        } else {
            button.textContent = 'Edit'
            input.classList.remove('active')
            input.setAttribute('disabled', true);
        }
    }
}

form.addEventListener("submit", handleSubmit)
ul.addEventListener("click", editTask);
ul.addEventListener("click", deleteTask);