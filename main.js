canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
nasa_mars_images_array=["ground.png","nasa.png","oceanbed.png","rox.png"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
background_image=nasa_mars_images_array[random_number];
console.log("background_image= " + background_image);
rover_image="rover.png";
rover_X=10;
rover_Y=10;

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_X, rover_Y, rover_width, rover_height);
}

window.addEventListener("keydown" , my_keydown);
function my_keydown (e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if (keyPressed=='40') 
    {
        down();
        console.log("down");
    }
    if (keyPressed=='37') 
    {
        left();
        console.log("left");
    }
    if (keyPressed=='39') 
    {
        right();
        console.log("right");
    }

}

function up()
{

    if (rover_Y>=0) {
        rover_Y=rover_Y-10;
        console.log("When up arrow is pressed, x = " + rover_X + " | Y = " + rover_Y );
        uploadBackground();
        uploadrover();
     }
}
function right()
{

    if (rover_X<=700) {
        rover_X=rover_X+10;
        console.log("When right arrow is pressed, x = " + rover_X + " | Y = " + rover_Y );
        uploadBackground();
        uploadrover();
     }
}
function left()
{

    if (rover_X>=0) {
        rover_X=rover_X-10;
        console.log("When left arrow is pressed, x = " + rover_X + " | Y = " + rover_Y );
        uploadBackground();
        uploadrover();
     }
}
function down()
{

    if (rover_Y<=500) {
        rover_Y=rover_Y+10;
        console.log("When down arrow is pressed, x = " + rover_X + " | Y = " + rover_Y );
        uploadBackground();
        uploadrover();
     }
}
// :D:D:D:D:D:D:D:D:D:D:D