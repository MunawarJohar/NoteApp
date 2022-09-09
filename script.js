console.log("Note app project");
let addB = document.getElementById('addB');
addB.addEventListener('click', function(e) {
    let addText = document.getElementById("addText");
    let title = document.getElementById("title");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: title.value,
        text: addText.value,
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    title.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let text = "";
    notesObj.forEach(function(element, index) {
        text += `
<div class="notecard my-3 mx-2" style="width: 18rem;">

<div class="card-body">${element.title}
    <h5 class="card-title"></h5>
    <p class="card-text">${element.text}</p>
</div>

<div class="card-body">
    <button href="#" class="card-link btn btn-danger" id="${index}" onclick="DeleteN(this.id)">Delete Now</button
    >
</div>


</div>
<hr>
`;
    });
    let notesE = document.getElementById('notes');
    if (notes.length != 0) {
        notesE.innerHTML = text;
    }
}

//function for deletion
function DeleteN(index) {
    console.log("Delete a Note", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchNow');
search.addEventListener("input", function() {
    let inputVal = search.value.toLowerCase();

    console.log("search process is start ", inputVal);

    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element) {
        let cardText = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardText);
        if (cardText.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})