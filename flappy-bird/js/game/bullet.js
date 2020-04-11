class Bullet extends GameImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
        this.setup()
    }

    setup() {
    }

    setup() {
        this.speed = config.bullet_speed
    }

    update() {
        this.y -= this.speed

        if (this.y <= -this.h) {
            this.die()
        }
    }
}
