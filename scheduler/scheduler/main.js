const eventDateInput = document.getElementById('event-date');
const eventTitleInput = document.getElementById('event-title');
const eventContentInput = document.getElementById('event-content');
const addEventButton = document.getElementById('add-event');
const eventList = document.querySelector('.event-list');
let events = JSON.parse(localStorage.getItem('events')) || [];

addEventButton.addEventListener('click', addEvent);

renderEvents();

function addEvent(event) {
  event.preventDefault();

  const date = eventDateInput.value;
  const title = eventTitleInput.value;
  const content = eventContentInput.value;

  if (date && title && content) {
    const newEvent = {
      id: Date.now(),
      date,
      title,
      content
    };
    events.push(newEvent);
    saveEventsToLocalStorage();
    renderEventItem(newEvent);

    eventDateInput.value = '';
    eventTitleInput.value = '';
    eventContentInput.value = '';
  }
}

function saveEventsToLocalStorage() {
  localStorage.setItem('events', JSON.stringify(events));
}

function renderEvents() {
  eventList.innerHTML = '';
  events.forEach((event) => renderEventItem(event));
}

/**
 * current time
 */

function dateTimeStamp(){
    const currentDate = new Date();
    const currentH= currentDate.getHours();
    const currentMin= currentDate.getMinutes();
    const currentSec= currentDate.getSeconds();

    /**
     * precision calc for current date 2 digit precision
     */
    const currentDOM= currentDate.getDate();
    var dP = 10;
    var precisionDOM = '';
    var precisionHr = '';
    if(currentDOM < dP && currentH < dP){
      // append 0 to the datetimestamp if its less than 2 digit precision
      precisionDOM = '0'+currentDOM;
      precisionHr = '0'+currentH;
    }else{
      precisionDOM = currentDOM;
      precisionHr = currentH;
    }

    /**
     * precision calc for current month 2 digit precision
     */
    const currentM = currentDate.getMonth();
    var precisionMonth = '';
    if(currentM < 10){
      // append 0 to the datetimestamp if its less than 10 days for 2 digit precision
      precisionMonth = '0'+currentM;
      var prm = precisionMonth.slice(0,1); //temporary var to slice the required data
      precisionMonth = prm;
    }else{
      precisionMonth = currentM;
    }
    const currentY = currentDate.getFullYear();
    const dateString = currentY +"-"+ (precisionMonth+1)+"-"+ precisionDOM + "  "+ (precisionHr)+":"+(currentMin)+":"+(currentSec);
    return dateString;
}//eo dateTimeStamp();

function renderEventItem(event) {

  const eventItem = document.createElement('li');
  var title = event.title;
  var eventDate = event.date;
  const currentDateTime =  dateTimeStamp();
  var eventContent = event.content;
  eventItem.innerHTML = `
  <div class='note-list'>
    <div class='contentfloat'>
    <h4 class='contentAlign note-item'>${title.toUpperCase()}</h4>
    <p class="dateTime event-list inlineParagraph contentAlignTime"><span class="silverColor">Event Date: </span>${eventDate}</p>
    <p class="dateTime event-list inlineParagraph contentAlignTime"><span class="silverColor">Time Stamp: </span>${currentDateTime}</p>
    <hr class="silver-color"/>
      <p class='contentAlign note-item'>${eventContent}</p>
      <button type="button" class="delete-btn">
      Delete
      </buttton>
    </div>  
  </div>  
    `;

  const deleteButton = eventItem.querySelector('.delete-btn');
  deleteButton.addEventListener('click', () => deleteEvent(event.id));
  eventList.appendChild(eventItem);
}

function deleteEvent(eventId) {
  events = events.filter((event) => event.id !== eventId);
  saveEventsToLocalStorage();
  renderEvents();
}

// delete all notes 
function deleteAllNotes(eventId) {
    events = events.filter((event) => event.id === eventId);
    saveEventsToLocalStorage();
    renderEvents();
  }

function printDocument(){
    var printwin = document.getElementById('printwin');
    printwin = print();
}  
