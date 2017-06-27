function getName() {
  return document.getElementById('your-name').value;
}

function sayName() {
  console.log(getName());
}

function getNameContainer() {
  return document.getElementById('name-return');
}

function insertName() {
  var textContainer = document.createTextNode(getName());
  var nameContainer = getNameContainer();
  while (nameContainer.firstChild) {
    nameContainer.removeChild(nameContainer.firstChild);
  }
  nameContainer.appendChild(textContainer);
}
