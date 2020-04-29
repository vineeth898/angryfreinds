class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,300,300);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
    fill(255,255,255);
    textSize(22);
    text("destroy the great annie to win!",20,20);
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 300, 300);
     pop();
     textSize(100);
     fill("blue");
     text("You Won!!!!!",350,200);
   }
  }

};