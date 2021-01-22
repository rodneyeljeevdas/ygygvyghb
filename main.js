
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	var KeyPressed = e.keyCode;
	console.log(KeyPressed);
	if(e.shiftKey == true && KeyPressed == '80')
    {
		console.log("p and shift pressed together");
		block_image_width = block_image_width + 10;
		block_image_height = block_image_height + 10;
		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;
	}
	if(e.shiftKey == true && KeyPressed == '77')
    {
		console.log("m and shift pressed together");
		block_image_width = block_image_width - 10;
		block_image_height = block_image_height - 10;
		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;
	}

	if(KeyPressed == '38')
	{
	   up();
	   console.log("up")
	}
	if(KeyPressed == '40')
	{
	   down();
	   console.log("down")
	}
	if(KeyPressed == '37')
	{
	   left();
	   console.log("left")
	}
	if(KeyPressed == '39')
	{
	   right();
	   console.log("right")
	}
	if(KeyPressed == '87')
	{
		new_image('https://th.bing.com/th/id/OIP.ulV12577DKkd7vit9exchAHaJF?w=175&h=215&c=7&o=5&dpr=1.25&pid=1.7'); 
		console.log("w");
	}
	if(KeyPressed == '71')
	{
		new_image('https://th.bing.com/th/id/OIP.bXwB2bc3NGYlPdCav39hHQHaHa?w=163&h=180&c=7&o=5&dpr=1.25&pid=1.7'); 
		console.log("g");
	}
	if(KeyPressed == '76')
	{
		new_image('https://th.bing.com/th/id/OIP.37MXcHQq9wXAdoIx-kBOYQHaHU?w=196&h=194&c=7&o=5&dpr=1.25&pid=1.7'); 
		console.log("l");
	}
	if(KeyPressed == '84')
	{
		new_image('https://th.bing.com/th/id/OIP.8NG-wTLNVRU7mUsDPMSOrwHaJ3?w=129&h=180&c=7&o=5&dpr=1.25&pid=1.7'); 
		console.log("t");
	}
	if(KeyPressed == '82')
