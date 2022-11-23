var items = document.getElementsByClassName("list-group-item");
console.log(items)
console.log(items[1]);
items[1].textContent = 'hello2';
// items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor='green';

items[1].style.backgroundColor = 'yellow';

for(var i =0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}


//////////////////

var newli = document.getElementsByClassName("newli");
console.log(newli)
newli.innerHTML='hello';

var newli= document.getElementsByTagName("li")
console.log(newli)
console.log(newli[4])