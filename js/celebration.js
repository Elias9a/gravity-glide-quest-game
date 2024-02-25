class Firework {
    constructor(x, y) {
        this.position = {
            x,
            y
        }
      
        this.radius = 3;
        this.color = `hsl(${Math.random() * 360}, 50%, 50%)`
        this.velocity = {
            x: Math.random() * 6 - 3,
            y: Math.random() * -15 - 10 
        };
        this.gravity = 0.2
        this.life = 100
    }

    update() {
        this.velocity.y += this.gravity
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.life--
    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

let fireworks = [];