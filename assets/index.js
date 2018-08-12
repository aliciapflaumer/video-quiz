// Inject YouTube API script
let tag = document.createElement('script')
tag.src = "//www.youtube.com/player_api"
let firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// let player = document.getElementsByClassName('video')
let player

function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  })
}

function onPlayerReady(event) {
  event.target.playVideo();
}

let play = document.getElementsByClassName('play-video')[0]
play.addEventListener('click', function() {
  if (player) {
    // give the player time to show up, then call it
    let fn = function(){
      player.playVideo()
      setTimeout(fn,1000)
    }
  }
  // console.log("show question button clicked!")
  $('.question').show()
})

let pause = document.getElementsByClassName('pause-video')[0]
pause.addEventListener('click', function() {
  if (player) {
    let fn = function(){
      player.pauseVideo()
      setTimeout(fn,1000)
    }
  }
  // console.log("hide button clicked!")
  $('.question').hide()
})


// let video = document.getElementsByClassName('video')
// let question = document.getElementsByClassName('question')
// let play = document.getElementsByClassName('play-video')
// let pause = document.getElementsByClassName('pause-video')
//
// $('play').click(function() {
//   $('question').show()
// })
//
// $('pause').click(function() {
//   $('question').show()
// })

// At 0:50 seconds, pause video, show question and multiple choice answers
