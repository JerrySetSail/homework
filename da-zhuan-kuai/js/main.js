var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var loadLevel = function(n) {
    var n = n - 1
    var l = levels[n]
    var blocks = []

    for (var  i = 0; i < l.length; i++) {
        var p = l[i]
        var b = new Block(p)
        blocks.push(b)
    }

    return blocks
}

var enableDebugMode = function(enable) {
    if (!enable) {
        return
    }

    window.addEventListener('keydown', function(event) {
        var k = event.key

        if (k == 'p') {
            paused = !paused
        } else if('12345678'.includes(k)) {
            blocks = loadLevel(Number(k))
        }
    })
}

var _main = function() {

    enableDebugMode(true)

    var paddle = Paddle()
    var ball = Ball()
    var game = Game(30)
    var blocks = loadLevel(3)
    paused = false

    game.registerAction('a', function () {
        paddle.moveLeft()
    })

    game.registerAction('d', function () {
        paddle.moveRight()
    })

    game.registerAction('f', function () {
        ball.fire()
    })


    game.update = function() {
        if (! paused) {
            ball.move()
        }
        if (paddle.collide(ball)) {
            ball.rebound()
        }

        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
           
            if (block.alive && block.collide(ball)) {
                ball.rebound()
                block.kill()
            }
        }
    }

    game.draw = function() {
        game.drawImage(paddle)
        game.drawImage(ball)

        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]

            if (block.alive) {
                game.drawImage(block)
            }
        }
    }

}

_main()
