nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 80);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex= " + nosex + " nosey= " + nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference= floor(leftwristx-rightwristx);
        console.log("leftwristx= " + leftwristx + " rightwristx= " + rightwristx + " difference =" + difference );

    }

}


function draw() {
document.getElementById("square_sides").innerHTML="Width And Height Of The Square Will Be "+ difference +"px";
    background("grey");
    fill("blue");
    stroke("red");
    square(nosex,nosey,difference);
    

}


