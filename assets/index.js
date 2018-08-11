let video = document.getElementByClass('video')
let question = document.getElementByClass('question')
let play = document.getElementByClass('play-video')
let pause = document.getElementByClass('pause-video')

$('play').click(function() {

})

$('pause').click(function() {
  $('question').show()
})

// At 0:50 seconds, pause video, show question and multiple choice answers
