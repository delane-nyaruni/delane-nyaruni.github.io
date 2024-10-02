function updateTime() {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();
    document.getElementById('time').textContent = formattedTime;
  }
  
  setInterval(updateTime, 1000);

 // <div id="time"></div>

 // <script src="yourScript.js"></script>
 const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.setMaxListeners(30);
