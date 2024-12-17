function create() {
    const inputedText = document.getElementById("inputText").value;
    const noteContainer = document.getElementById("notes");
    const note = document.createElement("div");
    const noteText = document.createElement("div");
    const noteDelete = document.createElement("div");
    const checkMark = document.createElement("input");
    checkMark.type = "checkbox";
    
    noteText.classList.add("note-text");
    noteText.textContent = inputedText;
    note.classList.add("note");
    checkMark.classList.add("Check");
    note.appendChild(checkMark);
    note.appendChild(noteText);
    
    noteDelete.innerHTML = "<img src='delete.svg'>";
    noteDelete.classList.add("note-delete");
    noteDelete.addEventListener("click", () => {
        let parentDiv = noteDelete.parentNode;
        parentDiv.remove();
    });
    note.appendChild(noteDelete);
    noteContainer.appendChild(note);
}

document.addEventListener("change", function (event) {
    if (event.target.matches("input[type='checkbox']")) {
        let parentBlock = event.target.parentNode;
        let inputText = parentBlock.querySelector(".note-text");
        if (inputText) {
            if (event.target.checked) {
                applyCheckedStyles(inputText);
            } else {
                removeCheckedStyles(inputText);
            }
        }
    }
});

document.addEventListener("input", function (event) {
    if (event.target.classList.contains("note-text")) {
        let parentBlock = event.target.parentNode;
        let checkbox = parentBlock.querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            applyCheckedStyles(event.target);
        }
    }
});

function applyCheckedStyles(element) {
    element.style.textDecoration = "line-through";
    element.style.textDecorationColor = "red";
    element.style.textDecorationThickness = "1px";
    element.style.color = "";
}

function removeCheckedStyles(element) {
    element.style.textDecoration = "none";
    element.style.color = "";
}