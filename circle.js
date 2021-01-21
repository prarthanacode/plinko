class Circle {
    constructor(x,y) {
      var options = {
        isStatic: true

      }
      this.body = Bodies.circle(x,y,50,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      push();
      translate(this.body.position.x,this.body.position.y)
      rectMode(CENTER)
      fill("pink");
      pop();
      ellipse(pos.x, pos.y, this.radius);
      for (var j = 0; j <=width; j=j+50)
      {
          plinkos.push(new circle(j,75));
      }

      for (var j=15; j <=width-10; j=j+50)
      {
          plinkos.push(new circle(j,175))
      }

      

    }
    }; 