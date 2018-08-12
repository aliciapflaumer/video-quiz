let question = document.getElementsByClassName('question')
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
  $(question).show()
})

let pause = document.getElementsByClassName('pause-video')[0]
pause.addEventListener('click', function() {
  if (player) {
    let fn = function(){
      player.pauseVideo()
      setTimeout(fn,1000)
    }
  }
  // console.log("hide question button clicked!")
  $(question).hide()
})


// load json data from quiz.json file
let data = $.getJSON('quiz.json', function(json) {
  for (let i = 0; i < json.quiz.length; i++) {
    if (json.quiz[i]) {
      console.log(json.quiz[i])
    }
  }
})


// At 0:50 seconds, pause video, show question and multiple choice answers



// Getting results
function results() {
  let answer = document.getElementsByName('answer')
  let val = ""
  // iterate through each radio button with the name 'answer' and see which radio button is checked
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].checked) {
     console.log(answer[i].value)
     val = answer[i].value
    }
  }
  if (val == "") {
    alert("Please select an answer")
  }
}


// Inject YouTube API script
let tag = document.createElement('script')
tag.src = "//www.youtube.com/player_api"
let firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
