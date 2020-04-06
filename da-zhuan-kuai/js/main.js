var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var _main = function() {

    var paddle = Paddle()
    var ball = Ball()
    var game = Game()

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
        ball.move()
        if (paddle.collide(ball)) {
            ball.rebound()
        }
    }

    game.draw = function() {
        game.drawImage(paddle)
        game.drawImage(ball)
    }

}

_main()
