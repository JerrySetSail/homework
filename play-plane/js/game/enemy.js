class Enemy extends GameImage {
    constructor(game) {
        var type = randomBetween(0, 4)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }

    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 250)
    }

    update() {
        this.y += this.speed
        if (this.y > 750) {
            this.setup()
        }
    }
}
