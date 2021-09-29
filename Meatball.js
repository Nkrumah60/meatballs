class Meatball {
    constructor(x, y, w, h) {
      let options = {
        restitution: 2,
      friction: 1.0,
      density: 1.0,
      frictionAir: 1.9,
      isStatic: false
      };
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.image = loadImage("Meatball.png");
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
  
    
     destroy() {
 
  
    //velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: 0, y:0.000001});
    
     }
     
    display() {
      let pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("white");
      imageMode(CENTER);
      image(this.image,0,0, this.w, this.h)
      noStroke();
      pop();


    }
  }