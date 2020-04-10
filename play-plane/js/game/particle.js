class Particle extends GameImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }

    static new(game) {
        return new this(game)
    }

    setup() {
        this.life = 20
    }

    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.w = 20
        this.h = 20
    }

    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        var factor = 0.02
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
}
