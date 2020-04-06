var Ball = function() {

    var image = imageFromPath('img/ball.png')
    var o = {
        image: image,
        x: 245,
        y: 265,
        width: 30,
        height: 30,
        speedX: 5,
        speedY: 5,
        fired: false,
    }

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
