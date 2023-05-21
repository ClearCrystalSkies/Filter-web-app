function preload(){}
function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0, 500, 400);
}
function download(){}
function modelLoaded(){
    console.log("PoseNet has been initialized ! 🥳")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x :" + results[0].pose.nose.x + "nose y :" + results[0].pose.nose.y);
    }
}