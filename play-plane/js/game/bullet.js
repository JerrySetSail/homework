class Bullet extends GameImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speed = config.bullet_speed
    }

    update() {
        this.y -= this.speed
    }
}
