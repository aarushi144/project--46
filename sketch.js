
var asteroid1 ,asteroid2 , asteroid3 , asteroidGroup ;
var astronaut  ,astronautimg
var asteroidimg , asteroidimg2 ,bgimg

var gameState = 0 ;
var earth , earthImg
var score = 0 ; 

function preload(){
 
 astronautimg = loadImage ("astronaut.png")
asteroidimg = loadImage("asteroid2.png");
 bgimg = loadImage("bg.jpeg")
 earthImg = loadImage("earth.png");

}


function setup() {
	createCanvas(800, 700);
 
  astronaut  = createSprite(200,240, 50 , 50 );
  astronaut.addImage(astronautimg);
  astronaut.scale = 0.5
 asteroidGroup = new Group ();
 earth = createSprite (400 , 650 , 500 ,600)
 earth.addImage(earthImg)
 earth.scale = 0.3

}


function draw() {

  background(bgimg);
  
 
  if (gameState === 0 ){
    text ("press space key to start the game " ,400 ,400 );
    if (keyDown("space")){
      gameState = 1 ; 
      
    }
    }
    else
   if (gameState === 1 ){
    

  Asteroids(50 ,50);

  if(keyDown("up")){
    astronaut.x = 0 
    astronaut.y -= 10 
  
  }
  if(keyDown("down")){
    astronaut.x = 0 
    astronaut.y +=10 
   
   
  }
  if(keyDown("left")){
    astronaut.x -= 10 
    astronaut.y  = 0 
  
  }

  if(keyDown("right")){
    astronaut.x += 10 
    astronaut.y  = 0 
  
    
  }
  

    // earth = createSprite (400 , 650 , 200 ,200)
  //  earth.addImage(earthimg)
  // for(var i = 0 ; i<asteroidGroup.length ; i++){
  //   if (astronaut.isTouching(asteroidGroup[i]));
  //     asteroidGroup[i].destroy();
  //     asteroidGroup.splice(i,1)

  //     }
        
  if(astronaut.isTouching(asteroidGroup)){
    asteroid.destroy()
  }


    
    if(asteroidGroup.isTouching(earth)){
      gameState = 3 ; 
  
    }

  drawSprites();
   }
   else if (gameState === 3){
    text("mission failed" , 300 , 300);
   }
 
}


