
canvas =document.getElementById ("my canvas");
ctx= canvas.getContext("2d")
window.aadEventListener

greencar_width=75 ;
greencar_height= 100;
<img id ="car" url="car2.png"  width = "800" height ="30px"> </img> ;
canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d");
greencar_image_width= 100 ;
greencar_image_height= 90 ;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


greencar_x = 5;
greencar_y =225 ;
function add() {
background_imgTag =new Image ();
background_imgTag.onload = uploadBackground ;
background_imgTag.src=background_image;
greencar_imgTag= new Image ();
background_imagTag.onload =uploadBackground;	
backbround_imagTag.src=background_image

greencar_imgTag =new Image () ;
greencar_imgTag.onload = uplodgreencar;
greencar_imgTag.src = greencar_image ;
}	

function uploadBackground() {
ctx.drawImage(backbround_imagTag, 0,0, canvas.width, canvas.height,);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width , greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

	function up(){
		if (car2.png_y >=0)
		car2.png_y = car2.png_y- 10  
		 uploadBackground();
		 uploadrover(); 
		
		}

function down(){

	if (car2.png_y <=500)
	car2.png_y= car2.png_y + 10  
	uploadBackground();
	uploadrover(); 
}

function left()
{
if(car2.png_x >=0)
car2.png_x = car2.png_x +10
uploadBackground();
uploadgreencar();	
}

function right(e)
{
	if( car2.png_x<=500)
	car2.png_x = car2.png_x -10
	uploadBackground();
	uploadgreencar();
}
