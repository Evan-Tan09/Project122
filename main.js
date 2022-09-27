x = 0;
y = 0;
draw_apple = "";
number_of_apples_to_be_drawn = "";
screen_width = window.innerWidth;
screen_height = window.innerHeight;
var recognition = new window.webkitSpeechRecognition();
function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}
recognition.onresult = function (event) {
  console.log(event);
  content = event.results[0][0].transcript;
  to_number = Number(content);
  if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started drawing apple";
    draw_apple = "set";
  } else {
    document.getElementById("status").innerHTML = "The speech has not recognised a number";
  }
}
function setup() {
  canvas = createCanvas(screen_width, screen_height - 150);
  img = loadImage('apple.png');
}
function draw() {
  if (draw_apple == "set") {
    document.getElementById("status").innerHTML = to_number + " apples drawn";
    for (var i = 1; i <= to_number; i++) {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 900);
      image(img, x, y, 50, 50);
    }
    draw_apple = "";
    speak(to_number + " apples drawn");
  }
}
function speak(speak_data){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}

