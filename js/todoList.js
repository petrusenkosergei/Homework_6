var dataArray = [];

function addList() {
    var newLi = document.createElement('li');
    newLi.className = "List_TextStyle"
    var Case = typeCase.value;
    newLi.innerHTML = Case;
    list.appendChild(newLi);
    dataArray.push(Case);
    typeCase.value = "";
}


function deleteList() {
    var element = document.getElementById("list");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    typeCase.value = "";
    dataArray = [];
}

var lined = document.getElementsByClassName("List_TextStyle");
function cross_out(event){
    event.target.classList.toggle("List_TextStyleLined");

}

addCase.addEventListener('click', addList, false);
deleteCase.addEventListener('click', deleteList, false);
list.addEventListener('click', cross_out);


