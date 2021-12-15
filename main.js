var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
nasa_mars_images_array = ["nasa_img_1.jfif","nasa_img_2.jpg","nasa_img_3.jpg","nasa_img_4.jpg"];
random_number = Math.floor(Math.random()*4);
background_img = nasa_mars_images_array[random_number];
rover_img = "rover.png";
function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_img;
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38")
    {
        up();
        console.log("up");
    }
    if (keyPressed == "40")
    {
        down();
        console.log("down");
    }
    if (keyPressed == "37")
    {
        left();
        console.log("left");
    }
    if (keyPressed == "39")
    {
        right();
        console.log("right");
    }
}
function up()
{
    if(rover_y>=3)
    {
        rover_y=rover_y-10;
        console.log("When up arrow is pressed = " + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down()
{
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("When down arrow is pressed = " + rover_x + "-" + rover_y)
        uploadBackground();
        uploadRover();
    }
}
function left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("When left arrow is pressed = " + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right()
{
    if(rover_x<=690)
    {
        rover_x+=10;
        console.log("When right arrow is pressed = " + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
