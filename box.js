class Box {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution: 0.8
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.image = loadImage("ball.png");
      this.Visibility = 255;

    }
    display(){
      var pos =this.body.position;
      if (this.body.speed<3){
     push();
     fill("brown");
     image(this.image,pos.x, pos.y, this.width, this.height);
     pop();
          }
          else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 0.05;
           pop();


          }
     
     
     
      
    
    }
  };
