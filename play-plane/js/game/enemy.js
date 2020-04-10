class Enemy extends GameImage {
    constructor(game) {
        var type = randomBetween(0, 4)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }

    setup() {
        this.speed = randomBetween(1, 4)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 250)
        this.cooldown_config = 50
        this.cooldown = 30
    }

    update() {
        this.cooldown--
        this.y += this.speed
        if (this.y > 750) {
            this.setup()
        }
        this.fire()
    }

    fire() {
        if (this.cooldown == 0) {
            this.cooldown = this.cooldown_config

            var x = this.x + this.w / 2
            var y = this.y
            var b = EnemyBullet.new(this.game)
            b.x = x
            b.y = y
            this.scene.addElement(b)
        }
    }

    wreck(bullet) {
        if (this.collide(bullet)) {
            this.die()
        }
    }

    collide(bullet) {
        var ball = bullet
        var o = this
        let interval = (ball.x - o.x)
        if (interval < -ball.w) {
            return false
        }
        let yCollide = ball.y < o.y && ball.y >= (o.y - o.h)
        let xCollide = (o.x == ball.x) || (o.w >= interval)

        return yCollide && xCollide
    }
}
