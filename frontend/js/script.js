// Create a new list item when clicking on the "Add" button
function newElement() { // function for adding a new task
  event.preventDefault(); // prevents the website from being refreshed each time a new element is added
  
  // adds a new list element (new row)
  var li = document.createElement("li");
  li.className = "todo__li--row";

  // adds a new div with 'view' class
  var divView = document.createElement("DIV");
  divView.className = "view";
  divView.appendChild(document.createTextNode(''));
  li.appendChild(divView);
  
  // modifies value of label to have text input into task
  var inputText = document.getElementById("inputText").value;
  var t = document.createTextNode(inputText);
  document.getElementById("ulToDo").appendChild(li);
  document.getElementById("inputText").value = "";
  
  // creates a border inside of div with class 'view'
  var divBorder = document.createElement("DIV");
  divBorder.className = "todo__li--border";
  divBorder.appendChild(document.createTextNode(''));
  divView.appendChild(divBorder);
  
  var randomNumber = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); // generates a random string to get a unique ID

  // creates input[type=checkbox] with previously generated unique ID
  var inputCheckbox = document.createElement("input");
  inputCheckbox.className = "trigger";
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = randomNumber;
  inputCheckbox.appendChild(document.createTextNode(''));
  divView.appendChild(inputCheckbox);

  // creates label with previusly generated unique ID (same as checkbox)
  var label = document.createElement("label");
  label.className = "checker";
  label.setAttribute("for", randomNumber);
  label.appendChild(document.createTextNode(inputText));
  divView.appendChild(label);

  // creates a button with trash icon
  var btnDelete = document.createElement("button");
  btnDelete.className = "button__delete";
  btnDelete.appendChild(document.createTextNode(''));
  divView.appendChild(btnDelete);

  // when clicked removes a whole line with everything inside of it
  var deleteElement = document.getElementsByClassName("button__delete");
  var y;
  for (y = 0; y < deleteElement.length; y++) {
    deleteElement[y].onclick = function() {
      var element = this.parentElement.parentElement;
      element.parentNode.removeChild(element);
    }
  }
}

// Adds functionality; click on a trash icon to delete the current list item. For list items that have existed, e.g were added manually via HTML
var deleteElement = document.getElementsByClassName("button__delete");
var y;
for (y = 0; y < deleteElement.length; y++) {
  deleteElement[y].onclick = function() {
    var element = this.parentElement.parentElement;
    element.parentNode.removeChild(element);
  }
}