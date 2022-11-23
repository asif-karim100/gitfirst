
var seconditem=document.querySelector('.list-group-item:nth-child(2)')
seconditem.style.backgroundColor='green';

var thirditem=document.querySelector('.list-group-item:nth-child(3)')
thirditem.style.visibility='hidden'

var seconditem=document.querySelectorAll('.list-group-item')
console.log(seconditem)
seconditem[2].style.color='green'
/////////////
var odd = document.querySelectorAll('li:nth-child(odd)')
for(var i = 0 ;i<odd.length;i++){
    odd[i].style.backgroundColor = "green"
}