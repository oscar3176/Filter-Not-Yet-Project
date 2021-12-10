function preload() {

}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    canvas.set(600, 600);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Pose Net has been initialized");
}

function draw() {
    image(video, 50, 50, 500, 500);
}

function take_snapshot() {
    img_name = document.getElementById("name").value;
    save(img_name + ".png");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results(0).pose.nose.x);
        console.log("nose y = " + results(0).pose.nose.y);
    }
}