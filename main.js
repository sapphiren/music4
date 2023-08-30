song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
song1Play = "";
song2Play = "";

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}

function modelLoaded(){
    console.log("ModelLoaded")
}

function draw() {
   image(video, 0, 0, 600, 500);
   
   fill("#FF0000");
   stroke("#FF0000");

   song1.isPlaying();

   if(scoreLeftWrist > 0.2)
   {
    circle(leftWristX, leftWristY, 20);
    song1.stop();
   }
   if(playing_song1 = false){
    song2.play();
    document.getElementById("song_name").innerHTML = "Song Name: Peter Pan"

   }

   
}