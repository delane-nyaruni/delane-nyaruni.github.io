const noteListDiv = document.querySelector(".note-list");
let noteID = 1;

function Note(id, dateTime, title, content) {
    this.id = id;
    this.dateTime = dateTime;
    this.title = title;
    this.content = content;
}

// Add eventListeners 

function eventListeners() {
    document.addEventListener("DOMContentLoaded", displayNotes);
    document.getElementById("add-note-btn").addEventListener("click", addNewNote);
    noteListDiv.addEventListener("click", deleteNote);
    div.innerHTML = `<hr>`;
    document.getElementById("delete-all-btn").addEventListener("click", deleteAllNotes);
}

eventListeners();

// get item from storage 
function getDataFromStorage() {
    return localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];
}

// add a new note in the list 
function addNewNote() {
    const notedateTime =  dateTimeStamp();
    const noteTitle = document.getElementById("note-title");
    const noteContent = document.getElementById("note-content");
    
    function dateTimeStamp(){
        const currentDate = new Date();
        const currentH= currentDate.getHours();
        const currentMin= currentDate.getMinutes();
        const currentSec= currentDate.getSeconds();
        const currentDOM= currentDate.getDate();
        const currentM = currentDate.getMonth();
        const currentY = currentDate.getFullYear();
        const dateString = (currentH)+":"+(currentMin)+":"+(currentSec)+"  "+currentDOM+"/"+(currentM+1)+"/"+currentY;
        return dateString;
    }//eo dateTimeStamp();
    if (validateInput(noteTitle, noteContent)) {
        let notes = getDataFromStorage();
        let noteItem = new Note(noteID, notedateTime, noteTitle.value, noteContent.value);
        noteID++;
        notes.push(noteItem);
        createNote(noteItem);

        // saving in the local storage 
        localStorage.setItem("notes", JSON.stringify(notes));
        notedateTime.value = "";
        noteTitle.value = "";
        noteContent.value = "";
    }
}

//  input validation 
function validateInput(title, content) {
    if (title.value !== "" && content.value !== "") {
        return true;
    } else {
        if (title.value === "") title.classList.add("warning");
        if (content.value === "") content.classList.add("warning");
    }
    setTimeout(() => {
        title.classList.remove("warning");
        content.classList.remove("warning");
    }, 1600);
}


// create a new note div

function createNote(noteItem) {
    const div = document.createElement("div");
    div.classList.add("note-item");
    div.setAttribute("data-id", noteItem.id);
    div.innerHTML = `
        <p class="dateTime">${noteItem.dateTime}</p>
        <h3>${noteItem.title}</h3>
        <p>${noteItem.content}</p>
        <button type = "button" class = "btn delete-note-btn">
        <span><i class = "fas fa-trash"></i></span>
        Delete
        </buttton>`;
    noteListDiv.appendChild(div);
    //        <p>${noteItem.dateTime}</p>

}

// display all the notes from the local storage
function displayNotes() {
    let notes = getDataFromStorage();
    if (notes.length > 0) {
        noteID = notes[notes.length - 1].id;
        noteID++;
    } else {
        noteID = 1;
    }
    notes.forEach(item => {
        createNote(item);
    });
}
// delete a note 
function deleteNote(e) {
    if (e.target.classList.contains("delete-note-btn")) {
        e.target.parentElement.remove();
        let divID = e.target.parentElement.dataset.id;
        let notes = getDataFromStorage();
        let newNotesList = notes.filter(item => {
            return item.id !== parseInt(divID);
        });
        localStorage.setItem("notes", JSON.stringify(newNotesList));
    }
}

// delete all notes 
function deleteAllNotes() {
    localStorage.removeItem("notes");
    let noteList = document.querySelectorAll(".note-item");
    if (noteList.length > 0) {
        noteList.forEach(item => {
            noteListDiv.removeChild(item);
        });
    }
    noteID = 1; //resetting noteID to 1
}