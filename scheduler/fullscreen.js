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
