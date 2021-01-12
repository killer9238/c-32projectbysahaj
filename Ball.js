class Ball{
    constructor(x,y,radius){
        var option={
            restituituion:0.8,
            frictuion:1.0,
            density:1
    }
    this.body = Bodies.circle(x,y,radius,option);
    this.radius=radius;
    this.image=loadImage("polygon.png")
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
        //rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)     
        pop();     
    }
}