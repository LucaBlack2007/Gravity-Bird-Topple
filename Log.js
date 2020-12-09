class Log {

    constructor(x, y, height, angle) {
        
        var options = {
            restitution: 0.1,
            friction: 3,
            dencity: 1
        }
        
        this.body = Bodies.rectangle(x, y, 20, height, options);

        this.height = height;
        this.width = 20;
        Matter.Body.setAngle(this.body, angle);

        World.add(world, this.body);
        
    }

    display() {
        var j = this.body.position;
        var angle = this.body.angle;
        push();
        
        translate(j.x, j.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255, 0, 0);
        stroke("white");
        strokeWeight(4);
        rect(0, 0, this.width, this.height);
    
        pop();
    }
}