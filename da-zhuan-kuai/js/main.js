var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var loadLevel = function(game, n) {
    var n = n - 1
    var l = levels[n]
    var blocks = []

    for (var  i = 0; i < l.length; i++) {
        var p = l[i]
        var b = new Block(game, p)
        blocks.push(b)
    }

    return blocks
}

var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }

    window.addEventListener('keydown', function(event) {
        var k = event.key

        if (k == 'p') {
            paused = !paused
        } else if('12345678'.includes(k)) {
            blocks = loadLevel(game, Number(k))
        }
    })
}

var _main = function() {

    enableDebugMode(game, true)

    var images = {
        'ball': 'img/ball.png',
        'paddle': 'img/paddle.png',
        'block': 'img/block.png',
    }

    var game = Game(30, images, function(g) {
        var paddle = Paddle(game)
        var score = 0
        var ball = Ball(game)
        var blocks = loadLevel(game, 3)
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
                    score += 100
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

            game.context.fillText('分数：' + score, 10, 290)
        }

    })

}

_main()
