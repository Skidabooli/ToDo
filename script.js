function createList() {
    let ul = document.createElement("ul");
    ul.className = "listDo";
    document.querySelector(".container").append(ul);
}

function newDo() {
    let li = document.createElement("li");
    li.className = "li";
    if (document.querySelector(".input").value.trim() === ""){
        alert("Введите символ");
        document.querySelector(".input").value = "";
    }
    else{
        li.textContent = document.querySelector(".input").value;
        li.append(createButtonCom(li), createButtonDel(li));
        document.querySelector("ul").append(li);
        document.querySelector(".input").value = "";
    }
}

function createButtonCom(li) {
    let buttonComplete = document.createElement("button");
    buttonComplete.className = "buttonComplete";
    buttonComplete.textContent = "Выполнено";
    buttonComplete.addEventListener("click", changeColor);

    function changeColor() {
        if (li.style.backgroundColor == "rgb(4, 240, 28)"){
            li.style.backgroundColor = "white";
        }
        else{
            li.style.backgroundColor = "#04F01C";
        }
    }
    return buttonComplete;
}

function createButtonDel(li) {
    let buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Удалить";
    buttonDelete.className = "buttonDelete";
    buttonDelete.addEventListener("click", deleteLi);

    function deleteLi() {
        if (confirm("Вы точно хотите удалить это дело?")){
           li.remove(); 
        }
    }
    return buttonDelete;
}

function createElements() {
    document.querySelector(".Title").addEventListener("submit", function(event){
        event.preventDefault();
    });
    document.querySelector(".button").addEventListener("click", newDo);
    document.querySelector(".button").addEventListener("keydown", function(e) {
        if (e.code == 13) {
            newDo(e)
        }
    });
    createList();
}

document.addEventListener("DOMContentLoaded", createElements)