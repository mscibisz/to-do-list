// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var button = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  button.className = "button__delete";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.className = "todo__li--row";

  var divView = document.createElement("DIV");
  divView.className = "view";
  divView.appendChild(document.createTextNode(''));
  li.appendChild(divView);

  var divBorder = document.createElement("DIV");
  divBorder.className = "todo__li--border";
  divBorder.appendChild(document.createTextNode(''));
  divView.appendChild(divBorder);
  
  var btnDelete = document.createElement("button");
  btnDelete.className = "button__delete";
  btnDelete.appendChild(document.createTextNode(''));
  divView.appendChild(btnDelete);
  
  var inputText = document.getElementById("inputText").value;
  var t = document.createTextNode(inputText);

  var label = document.createElement("label");
  label.className = "checker";
  label.setAttribute("for", "check7");
  label.appendChild(document.createTextNode(inputText));
  divView.appendChild(label);

  if (inputText === '') {
    alert("You must write something!");
  } else {
    document.getElementById("ulToDo").appendChild(li);
  }
  document.getElementById("inputText").value = "";


  function newInput() {
    var check;
    var i;
    for (i = 0; i < li.length; i++) {
      check = "check" + i;
    }
    console.log(i);
  
    var inputCheckbox = document.createElement("input");
    inputCheckbox.className = "trigger";
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = check;
    inputCheckbox.appendChild(document.createTextNode(''));
    divView.appendChild(inputCheckbox);
  }
    newInput();
}

// Click on a trash icon to delete the current list item
var deleteElement = document.getElementsByClassName("button__delete");
var i;
for (i = 0; i < deleteElement.length; i++) {
  deleteElement[i].onclick = function() {
    var element = this.parentElement.parentElement;
    element.parentNode.removeChild(element);
  }
}