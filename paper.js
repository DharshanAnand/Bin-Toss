class Paper {
constructor(x,y,r){
this.image = loadImage("paper.png")
var options ={

restitution:0.54,
friction:10,
density:1

}

this.x=x;
this.y=y;
this.r=r;
this.body = Bodies.circle(this.x, this.y,this.r/2, options);   
      World.add(world, this.body);
}

display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      angleMode(RADIANS);
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("white");
      strokeWeight(4);
      stroke("white");
      ellipse(0,0,this.r,this.r);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      pop();

    }

}


