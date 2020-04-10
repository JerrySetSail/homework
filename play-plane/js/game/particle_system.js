class ParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }

    static new(game) {
        return new this(game)
    }

    setup() {
        this.x = 150
        this.y = 200
        this.numberOfParticles = 20
        this.particles = []
    }

    update() {
        if (this.particles.length < this.numberOfParticles) {
            var p = Particle.new(this.game)
            var s = 2
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        for(var p of this.particles) {
            p.update()
        }

        this.particles = this.particles.filter(p => p.life > 0)
    }

    draw() {
        for(var p of this.particles) {
            p.draw()
        }
    }
}
