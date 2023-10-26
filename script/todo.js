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
    }, 3000); // setTimeout Function
  } else {
    var task = { // JavaScript Object
      text: inputValue,
      completed: false
    };
    todoList.push(task); // Function (push)
    displayTasks();
    saveTasksToLocalStorage();
  }
  myInput.value = '';
}

function displayTasks(completedTasks) { // Function
  myUL.innerHTML = '';
  var filteredTasks = completedTasks ? todoList.filter(task => task.completed) : todoList; // Filter Function

  filteredTasks.forEach(function(task, index) { // forEach Function
    var li = document.createElement("li");
    li.textContent = task.text;
    task.completed ? li.classList.add('checked') : li.classList.remove('checked'); // Ternary Operator (?:)
    li.addEventListener('click', function() { // Function
      task.completed = !task.completed;
      displayTasks(completedTasks);
      saveTasksToLocalStorage();
    });
    var close = document.createElement("span");
    close.textContent = "x";
    close.className = "close";
    close.addEventListener('click', function() { // Function
      removeTask(index);
    });
    li.appendChild(close);
    myUL.appendChild(li);
  });
}

function removeTask(index) { // Splice Function
  todoList.splice(index, 1);
  displayTasks();
  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() { // localStorage Function
  localStorage.setItem('todoList', JSON.stringify(todoList)); // JavaScript Object (JSON)
}

function loadTasksFromLocalStorage() { // Function
  var storedTasks = localStorage.getItem('todoList');
  if (storedTasks) {
    todoList = JSON.parse(storedTasks); // JavaScript Object (JSON)
    displayTasks();
  }
}

loadTasksFromLocalStorage();

document.getElementById("myButton").addEventListener('click', addTask); // Event Listener

myInput.addEventListener('keyup', function(event) { // Event Listener
  if (event.key === 'Enter') { // Strict Equality Operator (===)
    addTask();
  }
});

document.getElementById("showCompletedButton").addEventListener('click', function() { // Event Listener
  displayTasks(true);
});

document.getElementById("showAllButton").addEventListener('click', function() { // Event Listener
  displayTasks(false);
});