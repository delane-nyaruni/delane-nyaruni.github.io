const noteListDiv = document.querySelector(".note-list");
let noteID = 1;

function Note(id, title, dateTime, content) {
    this.id = id;
    this.title = title;
    this.dateTime = dateTime;
    this.content = content;
}

// Add eventListeners 

function eventListeners() {
    document.addEventListener("DOMContentLoaded", displayNotes);
    document.getElementById("add-note-btn").addEventListener("click", addNewNote);
    noteListDiv.addEventListener("click", deleteNote);
    document.getElementById("delete-all-btn").addEventListener("click", deleteAllNotes);
}

eventListeners();

// get item from storage 
function getDataFromStorage() {
    return localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];
}

// add a new note in the list 
function addNewNote() {
    const noteTitle = document.getElementById("note-title");
    const notedateTime =  dateTimeStamp();
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
        let noteItem = new Note(noteID, noteTitle.value, notedateTime, noteContent.value);
        noteID++;
      /*  let days = currentSec;
        dateString.sort(function(a, b) {
            var dateA = new Date(a);
            var dateB =new Date(b);
            return dateA - dateB
            } ) ;
      //  notes.reverse();*/
        notes.push(noteItem);
        createNote(noteItem);

        // saving in the local storage 
        localStorage.setItem("notes", JSON.stringify(notes));
        noteTitle.value = "";
        notedateTime.value = "";
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

// create a new note div    <div class='contentfloat'>
function createNote(noteItem) {
    const div = document.createElement("div");
    const hr = document.createElement("hr");
    div.classList.add("note-item");
    div.classList.add("contentfloat");
    div.setAttribute("data-id", noteItem.id);
    div.innerHTML = `
        <h3>${noteItem.title}</h3>
        <p class="dateTime">${noteItem.dateTime}</p>
        <hr class="silver-color"/>
        <p>${noteItem.content}</p>
        <button type = "button" class = "btn delete-note-btn">
        <span><i class = "fas fa-trash"></i></span>
        Delete
        </buttton>`;
    noteListDiv.appendChild(div);
 //   noteListDiv.appendChild(hr);

    //  </div><hr class="silver-color"/>   
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
        //location = 'journal.html'; //forcing a page regresh
    }
}

// delete all notes 
function deleteAllNotes() {
    alert("delete all??");// exit modal 
    localStorage.removeItem("notes");
    let noteList = document.querySelectorAll(".note-item");
    if (noteList.length > 0) {
        noteList.forEach(item => {
            noteListDiv.removeChild(item);
        });
    }
    noteID = 1; //resetting noteID to 1
  //  location = 'journal.html'; //forcing a page regresh
}