// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.className = "todo__li--row";

  var divView = document.createElement("DIV");
  divView.className = "view";
  divView.appendChild(document.createTextNode(''));
  li.appendChild(divView);
  
  var inputText = document.getElementById("inputText").value;
  var t = document.createTextNode(inputText);

  if (inputText === '') {
    alert("You must write something!");
  } else {
    document.getElementById("ulToDo").appendChild(li);
  }
  document.getElementById("inputText").value = "";
  
  var divBorder = document.createElement("DIV");
  divBorder.className = "todo__li--border";
  divBorder.appendChild(document.createTextNode(''));
  divView.appendChild(divBorder);
  
  var randomNumber = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  var inputCheckbox = document.createElement("input");
  inputCheckbox.className = "trigger";
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = randomNumber;
  inputCheckbox.appendChild(document.createTextNode(''));
  divView.appendChild(inputCheckbox);

  var label = document.createElement("label");
  label.className = "checker";
  label.setAttribute("for", randomNumber);
  label.appendChild(document.createTextNode(inputText));
  divView.appendChild(label);

  var btnDelete = document.createElement("button");
  btnDelete.className = "button__delete";
  btnDelete.appendChild(document.createTextNode(''));
  divView.appendChild(btnDelete);

  var deleteElement = document.getElementsByClassName("button__delete");
  var y;
  for (y = 0; y < deleteElement.length; y++) {
    deleteElement[y].onclick = function() {
      var element = this.parentElement.parentElement;
      element.parentNode.removeChild(element);
    }
  }
}

// Click on a trash icon to delete the current list item
var deleteElement = document.getElementsByClassName("button__delete");
var y;
for (y = 0; y < deleteElement.length; y++) {
  deleteElement[y].onclick = function() {
    var element = this.parentElement.parentElement;
    element.parentNode.removeChild(element);
  }
}