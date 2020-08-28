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

$('body').keyup(function (e) {
  if(e.keyCode === 32){
    new Audio('audio/slap.mp3').play()
  }
  if(e.keyCode === 65) {
    let audio = new Audio('audio/qua.mp3')
    audio.play()
    setTimeout(() => {
      audio.pause();
    }, 2500);
  }
  if(e.keyCode === 83) {
    new Audio('audio/laught1.mp3').play()
  }
  if(e.keyCode === 68) {
    new Audio('audio/laught2.mp3').play()
  }
})

$( document ).ready(function () {
  if(interval != null) {
    clearInterval(interval)
  }
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
