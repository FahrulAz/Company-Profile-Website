var todoList = []; // JavaScript Object (Array)

var myInput = document.getElementById("myInput");
var myUL = document.getElementById("myUL");

function addTask() { // Function
  var inputValue = myInput.value;
  if (inputValue === '') { // Strict Equality Operator (===)
    var errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = "input tidak boleh kosong!";
    var hero = document.querySelector(".hero");
    hero.appendChild(errorDiv);
    setTimeout(function() {
      hero.removeChild(errorDiv);
    }, 3000);
  } else {
    var task = {
      text: inputValue,
      completed: false
    };
    todoList.push(task); // Function (push)
    displayTasks();
    saveTasksToLocalStorage();
  }
  myInput.value = '';
}

function displayTasks() { // Function
  myUL.innerHTML = '';
  todoList.forEach(function(task, index) { // forEach Function
    var li = document.createElement("li");
    li.textContent = task.text;
    task.completed ? li.classList.add('checked') : li.classList.remove('checked'); // Ternary Operator (?:)
    li.addEventListener('click', function() {
      task.completed = !task.completed;
      displayTasks();
      saveTasksToLocalStorage();
    });
    var close = document.createElement("span");
    close.textContent = "x";
    close.className = "close";
    close.addEventListener('click', function() {
      removeTask(index);
    });
    li.appendChild(close);
    myUL.appendChild(li);
  });
}

function removeTask(index) { // Filter Function
  todoList.splice(index, 1);
  displayTasks();
  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() { // Function
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function loadTasksFromLocalStorage() { // Function
  var storedTasks = localStorage.getItem('todoList');
  if (storedTasks) {
    todoList = JSON.parse(storedTasks); // JSON Object
    displayTasks();
  }
}

loadTasksFromLocalStorage();

document.getElementById("addButton").addEventListener('click', addTask);

myInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') { // Strict Equality Operator (===)
    addTask();
  }
});