class Sand {
    constructor(x, y) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 4, options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4)
      stroke("black")
      fill("brown");
      ellipse(0, 0, 4);
      pop();
    }
  };