class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction :0.5,
            density : 1.2
        }
        this.paperObject = Bodies.circle(x,y,radius,options);
        World.add(world,this.paperObject);
        this.radius = radius;
        this.paperimg = loadImage("paper.png");
        
    }

    display() {
        var pos = this.paperObject.position;
        push();
        translate(pos.x,pos.y);
        fill("purple");
        imageMode(CENTER);
        image(this.paperimg,0,0,100,100);
        pop();
    }
}