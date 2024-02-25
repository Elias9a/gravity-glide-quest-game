function animation () {
    requestAnimationFrame(animation)
 
    backgroundImage.draw();
    platforms.forEach(platform => {
        platform.draw()
    })
    fireworks.forEach((firework, index) => {
        firework.update()
        firework.draw()
        if (firework.life <= 0) {
            fireworks.splice(index, 1)
        }
    });
    player.update()
    // player movement 
    if (keys.right.pressed && player.position.x < 150){
        player.velocity.x = 5
    } else if ((keys.left.pressed && player.position.x >1000) || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)){
        player.velocity.x = -5
    } else {
        player.velocity.x = 0
        platforms.forEach(platform => {
            
            if (keys.right.pressed){
                scrollOffset += 5
                platform.position.x -= 5
            } else if (keys.left.pressed && scrollOffset > 0){
                scrollOffset -= 5
                platform.position.x += 5
            } 
        })
    }

    // block collision detection
    platforms.forEach(platform => {
        
        if (
            player.position.y + player.height <= platform.position.y 
            &&
             player.position.y + player.height + player.velocity.y >= 
             platform.position.y && player.position.x + player.width >= platform.position.x
             && player.position.x <= platform.position.x + platform.width
             ) {
                player.velocity.y = 0
        }
    })  

    // winning condition
    if (scrollOffset > 16800) {
        let numberOfFireworks = 25

        for (let i = 0; i < numberOfFireworks; i++) {
            let x = Math.random() * canvas.width
            let y = Math.random() * canvas.height
            fireworks.push(new Firework(x, y))
        }
    }

     // winning condition
    if (player.position.y > canvas.height) {
        console.log('you loose')
        init()
    }   

}

animation()