	var Block = function (game, position) {
		var p = position
		var o = game.imageByName('block')

		log('block', o.image)
		o.x = p[0]
		o.y = p[1]
		o.health = p[2] || 1
		o.width = 30
		o.height = 10
		o.image.width = 30
		o.image.height = 10
		o.alive = true

		o.collide = function (ball) {
			return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
		}

		o.kill = function () {
			o.health--
			if (o.health <= 0) {
				o.alive = false
			}
		}

		return o
	}
