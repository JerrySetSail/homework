//  Ball = function (game) {
//         // var img = imageFromPath('img/ball.png')
//     var o = game.imageByName('ball')

//     o.x = 220
//     o.y = 260

//     o.speedX = 5
//     o.speedY = 5
//     o.width = 30
//     o.height = 30
//     o.fired = false

//     o.trigger = function () {
//         o.fired = (!o.fired)
//     }

//     o.rebound = function () {
//         o.speedY *= -1
//     }

//     o.move = function () {
//     if (o.fired) {
//         if (o.x < 0 || o.x + o.width > 500) {
//             o.speedX *= -1
//         }

//         if (o.y < 0 || o.y + o.height > 350) {
//             o.speedY *= -1
//         }

//         o.x += o.speedX
//         o.y += o.speedY
//     }
//     }

//     o.hasPoint = function(x, y) {
//     var xIn = x >= o.x && x <= o.x + o.width
//     var yIn = y >= o.y && y <= o.y + o.height

//     return xIn && yIn
//     }

//     return o
// }

var Ball = function (game) {
    var o = game.imageByName("ball")
    o.x = 220
    o.y = 260
    o.speedX = 5
    o.speedY = 5
    o.fired = false

    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x + o.image.width > 500) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y + o.image.height > 350) {
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.fire = function () {
        o.fired = true
    }
    o.rebound = function () {
        o.speedY *= -1
    }
    o.hasPoint = function (x, y) {
        // 判断一点是否在矩形中
        return x >= o.x && x <= o.x + o.w && y >= o.y && y <= o.y + o.h
    }
    return o
}
