class Paper {
    constructor(x,y){
        var options = {
            isStatic:false,
            restituion:0.3,
            friction:0.1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position

        fill("brown");
        stroke("blue");
        strokeWeight(4);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y, this.radius, this.radius);
    }
}