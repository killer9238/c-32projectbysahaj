class Ground{
    constructor(){
        var option ={
            isStatic:true
        }
          this.ground=Bodies.rectangle(450390,900,20,option)
          World.add(world,this.ground)
    }
        display(){
         //  storkeWeight(2)
            fill("black")
            rectMode(CENTER)
            rect(this.ground.position.x,this.ground.position.y,900,20)
        }
}
