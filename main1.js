noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('Model Loaded');
}

function gotPoses(results)
{
   if(results.length > 0)

   {
      console.log("result");
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
     

      leftWristX = result[0].pose.leftWrist.x; // will pick our leftwrist movement
      leftWristX = result[0].pose.leftWrist.x; //will pick our rigthwrist movement
      difference = floor(leftWristX - leftWristY);

   }
}

function draw() {
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}