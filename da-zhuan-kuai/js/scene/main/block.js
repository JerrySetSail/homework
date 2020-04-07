var Block = function(game, position) {
    var p = position
    var o = game.imageByName('block')

    o.x = p[0]
    o.y = p[1]
    o.width = 50
    o.height = 20
    o.health = p[2] || 1
    o.alive = true

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
