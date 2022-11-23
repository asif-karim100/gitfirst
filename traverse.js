var itemList = document.querySelector("#items")
 //parentNode
//  console.log(itemList.parentNode);
//  itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'orange';


///firstChild
// console.log(itemList.firstChild);

////firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello 1';


///lastChild
// console.log(itemList.lastChild);

////lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4';

//nextSibling
// console.log(itemList.nextSibling);
////nextelementSibling
// console.log(itemList.nextElementSibling);


//previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';

//createElement

//create a div
var newDiv = document.createElement("div");
//add class
newDiv.className='hello'

// add Id
newDiv.id = 'hello1'

//add attribute
newDiv.setAttribute('title','hello div');

1.//
//create text node
var newDivText = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText)

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// console.log(newDiv)

// container.insertBefore(newDiv,h1);


// var items = document.querySelector('ul .list-group-item')
//  var li = document.querySelector('ul li')

//  console.log(newDiv)
//  items.insertBefore(newDiv,li)


2.//
var li = document.createTextNode('Hello world');
var child = document.getElementById('re');
child.parentNode.insertBefore(li, child);
