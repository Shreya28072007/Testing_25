class Dustbin{
    constructor(x,y,width,height){

        var options={
            isStatic:true,
            density:0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/dustbingreen.png");
        
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("white");
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.width,this.height);
    }

}