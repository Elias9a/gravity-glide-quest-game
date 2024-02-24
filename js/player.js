const imagePaths = {
    spriteStandRight: './img/spriteStandRight.png',
    spriteStandLeft: './img/spriteStandLeft.png',
    spriteRunRight: './img/spriteRunRight.png',
    spriteRunLeft: './img/spriteRunLeft.png'
};

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 66,
        this.height = 150,
        this.frames = 0,
        this.sprites = {
            stand :{
                right: imagePaths.spriteStandRight,
                left: imagePaths.spriteStandLeft,
                cropWidth: 177,
                width: 66
            },
            run: {
                right: imagePaths.spriteRunRight,
                left: imagePaths.spriteRunLeft,
                cropWidth: 341,
                width: 127.66
            }
        }
        this.currentSprite = this.sprites.stand.right,
        this.currentCropWidth = 177,
        this.image = new Image(),
        this.image.src = this.currentSprite
        
    }
  
    draw() {
        c.drawImage( this.image, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.frames++
        if(this.frames > 60 && (this.currentSprite === this.sprites.stand.right || 
            this.currentSprite === this.sprites.stand.left)) 
        this.frames = 0
        else if(this.frames > 30 && (this.currentSprite === this.sprites.run.right || 
            this.currentSprite === this.sprites.run.left)) 
        this.frames = 0
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y <= canvas.height) 
            this.velocity.y = gravity
    }
}

let player = new Player()