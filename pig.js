class Pig {
    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction: 3,
            dencity: 1
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }

    display() {
        var j = this.body.position;
        var angle = this.body.angle;
        push();
        
        translate(j.x, j.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0, 255, 0);
        rect(0, 0, this.width, this.height);

        pop();
    }
    
}