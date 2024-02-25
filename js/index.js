
const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

canvas.width = 1250
canvas.height = 670

const gravity = 5.5


class BackgroundImage{
    constructor ({x, y, width, height, backgroundImg}) {
        this.position = {
            x,
            y
        }
        this.width = width,
        this.height = height,
        this.image = new Image()
        this.image.src = backgroundImg

    }
    draw () {
        c.drawImage( this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

let backgroundImage = new BackgroundImage({x: 0, y:  0, width: canvas.width,
    height: canvas.height, backgroundImg: './img/skybackground.jpg'})


const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

const init = () => {
     backgroundImage = new BackgroundImage({x: 0, y:  0, width: canvas.width,
        height: canvas.height, backgroundImg: './img/skybackground.jpg'})
    
     player = new Player()
     platforms = [
        new PlatformBlock({x: 0, y: 650, width: 300, height: 40, imageUrl:  './img/platform.png'}), 
        new PlatformBlock({x: 400, y: 550, width: 300, height: 40, imageUrl: './img/platform.png'}), 
        new PlatformBlock({x: 200, y: 380, width: 200, height: 40, imageUrl: './img/platform.png'}),
        new PlatformBlock({x: 500, y: 200, width: 300, height: 40, imageUrl: './img/platform.png'}),
        new PlatformBlock({x: 900, y: 100, width: 200, height: 40, imageUrl: './img/platform.png'}),
        new PlatformBlock({x: 1200, y: 220, width: 100, height: 40, imageUrl: './img/platform.png'}),
        new PlatformBlock({x: 1500, y: 550, width: 100, height: 40, imageUrl: './img/platform.png'}),
        new PlatformBlock({x: 1800, y: 350, width: 100, height: 40, imageUrl: './img/platform.png'}),
        new PlatformBlock({x: 2200, y: 650, width: 300, height: 40, imageUrl: './img/platform.png'})
    ]
}

let scrollOffset = 0

init()

addEventListener('keydown', ({keyCode}) => { 
    switch (keyCode) {
        case 65:
            keys.left.pressed = true
            player.currentSprite = player.sprites.run.left,
            player.currentCropWidth = player.sprites.run.cropWidth;
            player.image.src = player.currentSprite;
            break
        case 68:
            keys.right.pressed = true
            player.currentSprite = player.sprites.run.right,
            player.currentCropWidth = player.sprites.run.cropWidth;
            player.image.src = player.currentSprite;
        
            break
        case 87:
            // console.log('up')
            player.velocity.y -= 200
            break
        case 83:
            // console.log('down')
            break  
    }
    console.log(keys.right.pressed)
});

addEventListener('keyup', ({keyCode}) => { 
    switch (keyCode) {
        case 65:
            // ckey up left key
            keys.left.pressed = false
            player.currentSprite = player.sprites.stand.left,
            player.currentCropWidth = player.sprites.stand.cropWidth;
            player.image.src = player.currentSprite;
            break
        case 68:
            //  right key 
            keys.right.pressed = false
            player.currentSprite = player.sprites.stand.right
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.image.src = player.currentSprite
            break
        case 87:
            // up key
           
            break
    }
});
