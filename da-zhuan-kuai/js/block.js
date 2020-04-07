
var Block = function(position) {
    var image = imageFromPath('img/block.png')
    var p = position
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        width: 50,
        height: 20,
        health: p[2] || 1,
        alive: true,
    }


    o.kill = function() {
        o.health--
        if (o.health <= 0) {
            o.alive = false
        }
    }

    o.collide = function (ball) {
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }


    return o
}
