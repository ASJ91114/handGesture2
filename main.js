prediction1 = "";
prediction2 = "";

Webcam.set({
    width:350,
    height:275,
    image_format:'png',
    png_quality:100
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    });
}
console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speakData1 = "The first prediction is " + prediction1;
    speakData2 = "and the second prediction is " + prediction1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
