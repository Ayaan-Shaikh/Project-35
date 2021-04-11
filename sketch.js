var  dog,dogImg,happyDog;
var  database;
var  foodS;
var Food;



function preload()
{
  database=firebase.database();
dogImg=loadImage("dogImg.png")
happyDog=loadImage("dogImg1.png");
}



function setup() {
  
	createCanvas(500, 500);
 
  dog=createSprite(200,320,20,20);
  dog.addImage(dogImg, "dogImg.png");
  dog.scale=0.5

 foodS=database.ref('Food');
 foodS.on("value",readStock);
   

}


function draw() {  
 background(46, 139, 87);
 
 
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);

}


  drawSprites();
}


function readStock(data){
  foodS=data.val();
}

function writeStock(x){
 
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
   database.ref('/').update({
     Food:x
   })
} 