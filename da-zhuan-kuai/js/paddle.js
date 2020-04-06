var Paddle = function() {
    var image = imageFromPath('img/paddle.png')
    var o = {
        image: image,
        x: 230,
        y: 300,
        speed: 5,
    }

    o.moveLeft = function() {
        o.x -= o.speed
    }

    o.moveRight = function() {
        o.x += o.speed
    }

    o.collide = function (ball) {
        let interval = (ball.x - o.x)
        if (interval < -ball.width) {
            return false
        }
        let yCollide = ball.y == (o.y - ball.height)
        let xCollide = (o.x == ball.x) || (o.image.width >= interval)

        return yCollide && xCollide
    }

    return o
}
