class EnemyBullet extends GameImage {
    constructor(game) {
        super(game, 'enemy_bullet')
        this.setup()
    }

    setup() {
        this.w = 5
        this.h = 5
    }

    setup() {
        this.speed = config.bullet_speed
    }

    update() {
        this.y += this.speed

        if (this.y <= -this.h) {
            this.die()
        }
    }
}
