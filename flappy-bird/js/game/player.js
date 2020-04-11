class Player extends GameImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }

    setup() {
        this.speed = 10
        this.cooldown = 0
    }

    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }

    fire() {
        if (this.cooldown == 0) {
            this.cooldown = 3

            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game)
            b.x = x
            b.y = y
            this.scene.addElement(b)
        }
    }

    wreck(element) {
        if (this.collide(element)) {
            this.die()
        }
    }

    collide(element) {
        var ball = element
        var o = this
        let interval = (ball.x - o.x)
        if (interval < -ball.w) {
            return false
        }
        let yCollide = ball.y < o.y && ball.y >= (o.y - o.h)
        let xCollide = (o.x == ball.x) || (o.w >= interval)

        return yCollide && xCollide
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }
}
