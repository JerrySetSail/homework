var Scene = function(game) {
    var s = {
        game: game,
    }

    var paddle = Paddle(game)
    var score = 0
    var ball = Ball(game)

    blocks = loadLevel(game, 3)
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

    s.draw = function() {
        //背景
        game.context.fillStyle = '#553'
        game.context.fillRect(0, 0, 500, 350)
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

    s.update = function() {
        if (ball.y > paddle.y) {
            var end = SceneEnd.new(game)
            game.replaceScene(end)
        }

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

    var enableDrag = false
    game.canvas.addEventListener('mousedown', function(event) {
        var e = event
        var x = e.layerX
        var y = e.layerY
        if (ball.hasPoint(x, y)) {
            enableDrag = true
        }
    })

    game.canvas.addEventListener('mousemove', function(event) {
        var e = event
        var x = e.layerX
        var y = e.layerY

        if (enableDrag) {
            ball.x = x
            ball.y = y
        }
    })

    game.canvas.addEventListener('mouseup', function(event) {
        enableDrag= false
    })

    return s
}
