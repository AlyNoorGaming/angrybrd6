class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }

    for(var i=0; i<this.trajectory.length; i++){
      image(this.image2, this.trajectory[i][0], this.trajectory[i][1]);
    }

  }
}
//position = [110,200]
//position = [115,6767];
//position = [34,56];
//position = [50,60];

//trajectory = [[110,200], [115,6767] , [34,56] , [50,60]]