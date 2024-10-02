document.addEventListener('DOMContentLoaded', function() {
  var appContainer = document.documentElement;
  appContainer.addEventListener('dblclick', toggleFullscreen);
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (appContainer.requestFullscreen) {
        appContainer.requestFullscreen();
      } else if (appContainer.mozRequestFullScreen) { // Firefox
        appContainer.mozRequestFullScreen();
      } else if (appContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
        appContainer.webkitRequestFullscreen();
      } else if (appContainer.msRequestFullscreen) { // Internet Explorer and Edge
        appContainer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // Internet Explorer and Edge
        document.msExitFullscreen();
      }
    }
  }
});

/*
var clickCount = 0;

document.addEventListener('click', function() {
  clickCount++;

  if (clickCount === 3) {
    var element = document.documentElement; // Get the document's root element

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Internet Explorer and Edge
      element.msRequestFullscreen();
    }

    clickCount = 0; // Reset click count after triggering fullscreen
  }
});*/