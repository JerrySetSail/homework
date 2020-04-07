var Ball = function(game) {

    var image = imageFromPath('img/ball.png')
    var o = game.imageByName('ball')

    o.image = image
    o.x = 245
    o.y = 265
    o.width = 30
    o.height = 30
    o.speedX = 5
    o.speedY = 5
    o.fired = false

    o.move = function() {
        if (o.fired) {
            if (o.x < 0 || o.x + o.width > 500) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y + o.height > 350) {
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }

    o.rebound = function () {
        o.speedY *= -1
    }

    o.fire = function() {
        o.fired = true
    }

    return o
}
