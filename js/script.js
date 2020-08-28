let interval = null;
  function countDown() {
  let currentSec = 5
  interval = setInterval((() => {
    if(currentSec <= 0) {
      clearInterval(interval);
      new Audio('audio/beep-04.mp3').play()
    } else {
      new Audio('audio/beep-07.mp3').play()
    }
    $('.count').html(currentSec)
    currentSec --
  }), 1000)
}

document.oncontextmenu = function(e){
  e.preventDefault()
  e.stopPropagation()
}

$( document ).ready(function () {
  $('body').click(function () {
    if(interval != null) {
      clearInterval(interval)
    }
    countDown()
  })
  
  
  $('body').mousedown(function(e) {
    if(interval != null) {
      clearInterval(interval)
    }
    switch (e.which) {
      case 1:
        countDown()
        break
    }
  });
})
