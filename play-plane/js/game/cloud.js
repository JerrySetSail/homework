class Cloud extends GameImage {
    constructor(game) {
        super(game, 'cloud')
        this.setup()
    }

    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 250)
    }

    update() {
        this.speed = config.cloud_speed
        this.y += this.speed
        if (this.y > 750) {
            this.setup()
        }
    }
}
