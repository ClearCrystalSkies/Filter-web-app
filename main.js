noseX="";
noseY ="";
var M= false
function preload(){
    img = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x :" + results[0].pose.nose.x + "; nose y :" + results[0].pose.nose.y);
        if (M == false) {
            noseY =  results[0].pose.nose.y -30;
            noseX = results[0].pose.nose.x -100;
        } else if(M == true){
            noseY =  results[0].pose.nose.y -130;
            noseX = results[0].pose.nose.x -120;
        } else if( M == "leafy"){
            noseY =  results[0].pose.nose.y -100;
            noseX = results[0].pose.nose.x -170;
        }
    }
}
function draw(){
    image(video,0,0, 500, 400);
    if (M == false) {
        image(img, noseX, noseY, 50, 25);
    } else if(M == true){
        image(img, noseX, noseY, 100, 200);
    }else if(M == "leafy"){
        image(img, noseX, noseY, 200, 200);
    }
}
function no2lip(){
    img = loadImage("https://static.vecteezy.com/system/resources/previews/009/381/233/original/red-lips-clipart-design-illustration-free-png.png");
    console.log("Lipstick changed!");
    M = false;
    draw();
}
function no1lip(){
    img = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
    console.log("Lipstick changed!");
    M = false;
    draw()
}
function no3lip(){
    img = loadImage("no3lip.png");
    console.log("Lipstick changed!");
    M = false;
    draw();
}
function no4lip(){
    img = loadImage("no4lip.png");
    console.log("Lipstick changed!");
    M = false;
    draw();
}
function no5lip(){
    img = loadImage("no5lip.png");
    console.log("Lipstick changed!");
    M = false;
    draw();
}
function gMishi(){
    img = loadImage("Goldenmoustache.png");
    console.log("Golden moustache!");
    M = false;
    draw();
}
function universalMishi(){
    img = loadImage("universalMishi.png");
    console.log("The Moustache of the Galaxy!");
    M = true;
    draw();
}
function MnM(){
    img = loadImage("MnM.png");
    console.log("M(oustache)M(onocule)s!");
    M = true;
    draw();
}
function leafM(){
    img = loadImage("leafMoustache.png");
    console.log("Too many greens ...");
    M = "leafy";
    draw();
}
function download(){
    save("FilteredPic.jpeg");
}
function modelLoaded(){
    console.log("PoseNet has been initialized ! 🥳")
}