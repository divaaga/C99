// var SpeechRecognition = window.webkitSpeechRecognition;

// var recognition = new SpeechRecognition();

// function start() {
//     document.getElementById("textbox").innerHTML = "";
//     recognition.start();
// }

// recognition.onresult = function(event) {
//     console.log(event);
//     var Content = event.results[0][0].transcript;
//     document.getElementById("textbox").innerHTML = Content;
//     console.log(Content);
//     if (Content == "take my selfie" || Content == "selfie" || Content == "click my selfie" || Content == "click my picture") {
//         console.log("taking my selfie...");
//         speak();
//     }
// }

// function speak() {
//     console.log("inside speak()");
    
//     var synth = window.speechSynthesis;
//     speak_data = "Get ready to smile your picture will be captured in 5 seconds.";
//     var utter_this = new SpeechSynthesisUtterance(speak_data);
//     synth.speak(utter_this);
//     Webcam.attach(camera);
    
//     setTimeout(function(){
//         take_selfie();
//         save();
//     }, 5000);
// }

// Webcam.set({
//     width : 360,
//     height : 250,
//     image_format : 'png',
//     png_quality : 90
// });
// camera = document.getElementById("camera");

// function take_selfie() {
//     Webcam.snap(function(data_img){
//         document.getElementById("result").innerHTML= "<img id = 'selfie' src = '" + data_img + " ' > ";
//     });
// }

// function save() {
//     link = document.getElementById("result1");
//     img = document.getElementById("pic1.jpg").src;
//     link = document.getElementById("result2");
//     img = document.getElementById("pic2.jpg").src;
//     link = document.getElementById("result3");
//     img = document.getElementById("pic3.jpg").src;
//     link.href = img;
//     link.click();
// }
