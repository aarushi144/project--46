function Asteroids( width, height ){
           if(frameCount% 70 === 0){
            asteroid = createSprite( random(200,550),0, width, height);
            asteroid.velocityY = 5
           asteroid.addImage(asteroidimg)
           asteroid.scale = 0.15
           asteroidGroup.push(asteroid)
           }
      

    }
