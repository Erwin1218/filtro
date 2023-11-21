noseX = 0;
noseY = 0;
eyeX = 0;
eyeY = 0;

function preload() {
clown_nose = loadImage('https://i.postimg.cc/L8Sbrvfb/tumblr-o4pam02-Ub-S1r6obhzo1-400.gif');
}

function setup() {

canvas= createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
   console.log('modelo cargado');
   

}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
        noseX = results[0].pose.leftEye.x-15;
        noseY = results[0].pose.leftEye.y-15;
        eyeX = results[0].pose.rightEye.x-15;
       eyeY = results[0].pose.rightEye.y-15;

    }
}

function draw() {
    image(video,0,0,300,300);
    image(clown_nose, noseX, noseY, 35, 35);
    image(clown_nose, eyeX, eyeY, 35, 35);


 
}

function take_snapshot(){    
 
save('mi_nariz_de_payaso.png');

}