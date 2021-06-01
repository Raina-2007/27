class Bob{
    constructor(x,y){
        var options = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
            isStatic : false
        }
          this.body = Bodies.circle(x,y,50,options);
          this.radius = 50
          World.add(world, this.body);
    }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("purple")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,50,50);
        pop();
      }
} 
