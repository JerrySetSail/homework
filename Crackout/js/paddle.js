var Paddle = function (game) {

	var o = game.imageByName('paddle')

	o.x = 200
	o.y = 300
	o.speed = 10
	o.width = 70
	o.height = 17

	o.moveLeft = function () {
		if (o.x > 0) {
			o.x -= o.speed
		}
	}
	o.moveRight = function () {
		if ((o.x + o.width) < document.getElementById('id-canvas').width) {
			o.x += o.speed
		}
	}
	
	o.collide = function (ball) {
		let interval = (ball.x - o.x)
		if (interval < -ball.width) {
			return false
		}
		let yCollide = ball.y == (o.y - ball.height)
		let xCollide = (o.x == ball.x) || (o.width >= interval)
		return yCollide && xCollide
	}
	return o
}
