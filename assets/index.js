let question = document.getElementsByClassName('question')
let player

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'NWYWgda5f0I',
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'rel': 0,
      'showinfo': 0,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

function onPlayerReady(event) {
  event.target.playVideo();
}

let done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(pauseVideo, 30000)
          done = true
        }
      }
      function pauseVideo() {
        player.pauseVideo()
        $(question).show()
      }

// let show = document.getElementsByClassName('show-question')[0]
// show.addEventListener('click', function() {
//   // console.log("show question button clicked!")
//   $(question).show()
// })

// let pause = document.getElementsByClassName('pause-video')[0]
// pause.addEventListener('click', function() {
//   if (player) {
//     let fn = function(){
//       player.pauseVideo()
//       setTimeout(fn,1000)
//     }
//   }
//   console.log('Pause button clicked!')
// })


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
function nextBtnClicked() {
  let answer = document.getElementsByName('answer')
  let val = ""
  // iterate through each radio button with the name 'answer' and see which radio button is checked
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].checked) {
     console.log(answer[i].value)
     val = answer[i].value
     $(question).fadeOut(1000)
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
