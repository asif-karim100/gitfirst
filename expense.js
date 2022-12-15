function saveToLocalStorage(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const desc = document.getElementById('desc').value;
    const category = document.getElementById('category').value;

    let obj={
        amount,
        desc,
        category
    }
    let serializedObj = JSON.stringify(obj);
    localStorage.setItem(desc,serializedObj);
    showNewUserOnScreen(obj);
    
}


function showNewUserOnScreen(obj){
    document.getElementById('amount').value = '';
    document.getElementById('desc').value ='';
    document.getElementById('category').value = '';

    if(localStorage.getItem(obj.desc)){
        removeUserFromScreen(obj.desc)
    }
const parentNode =document.getElementById('list-group');
const childHTML = `<li id="${obj.desc}" class="list-group-item">${obj.amount} - ${obj.desc} - ${obj.category}
<button class="btn btn-primary btn-sm float-end btn-outline-light" onclick=editUser('${obj.amount}','${obj.desc}','${obj.category}')>Edit</button>
<button class="btn btn-danger btn-sm float-end btn-outline-light" onclick=deleteUser('${obj.desc}')>Del</button>

</li>`;


parentNode.innerHTML =parentNode.innerHTML + childHTML;
}


function editUser(amount,desc,category){
    document.getElementById('amount').value = amount;
    document.getElementById('desc').value = desc;
    document.getElementById('category').value = category;

    deleteUser(desc);

}



function deleteUser(desc){
    
    localStorage.removeItem(desc);
    removeUserFromScreen(desc);

}

function removeUserFromScreen(desc){
    const parentNode = document.getElementById('list-group');
    const childNodeToBeDeleted = document.getElementById(desc);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}
