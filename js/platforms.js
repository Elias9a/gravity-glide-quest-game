class PlatformBlock{
    constructor ({x, y, width, height, imageUrl}) {
        this.position = {
            x,
            y
        }
        this.width = width,
        this.height = height,
        this.image = new Image()
        this.image.src = imageUrl

    }
    draw () {
        c.drawImage( this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

let  platforms = [
    new PlatformBlock({x: 0, y: 650, width: 300, height: 40, imageUrl:  './img/platform.png'}), 
    new PlatformBlock({x: 400, y: 550, width: 300, height: 40, imageUrl: './img/platform.png'}), 
    new PlatformBlock({x: 200, y: 380, width: 200, height: 40, imageUrl: './img/platform.png'}),
    new PlatformBlock({x: 500, y: 200, width: 300, height: 40, imageUrl: './img/platform.png'}),
    new PlatformBlock({x: 900, y: 100, width: 200, height: 40, imageUrl: './img/platform.png'}),
    new PlatformBlock({x: 1200, y: 220, width: 100, height: 40, imageUrl: './img/platform.png'}),
    new PlatformBlock({x: 1500, y: 350, width: 100, height: 40, imageUrl: './img/platform.png'}),
    new PlatformBlock({x: 2000, y: 650, width: 300, height: 40, imageUrl: './img/platform.png'})
]