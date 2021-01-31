var dog, dogIMG, happyDog;
var database;
var foodS, foodStock;

function preload(){
	dogIMG = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  dog = createSprite(50, 50, 250,250);
  dog.addImage(dogIMG);
  dog.scale= 0.125;
  
}


function draw() {  
  background(197,245,196)

  drawSprites();
  //add styles here

}



