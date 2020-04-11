class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = config.pipe_space.value
        this.pipeXGap = config.pipe_x_space.value
        this.columnsOfPipe = 3

        for (var i = 0; i < this.columnsOfPipe; i++) {
            var p1 = GameImage.new(game, 'pipe')
            p1.flipY = true
            p1.x = 500 + i * 200
            var p2 = GameImage.new(game, 'pipe')
            p2.x = p1.x
            this.resetPipePosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }

    static new(game) {
        return new this(game)
    }

    resetPipePosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }

    debug() {
        this.pipeSpace = config.pipe_space.value
        this.pipeXGap = config.pipe_x_space.value
    }

    update() {
        for (var i = 0; i < this.pipes.length / 2; i += 2) {
            var p1 = this.pipes[i]
            var p2 = this.pipes[i + 1]
            p1.x -= 5
            p2.x -= 5
            
            if (p1.x < -100) {
                p1.x += this.pipeXGap * this.columnsOfPipe
            }

            if (p2.x < -100) {
                p2.x += this.pipeXGap * this.columnsOfPipe
                this.resetPipePosition(p1, p2)
            }
        }
    }

    draw() {
        var context = this.game.context
        for (var p of this.pipes) {

            context.save()

            var w = p.w || p.texture.width
            var h = p.h || p.texture.height
            var w2 = w / 2
            var h2 = h / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1

            context.scale(scaleX, scaleY)

            context.rotate(p.rotation * Math.PI / 100)
            context.translate(-w2, -h2)

            context.drawImage(p.texture, 0, 0)

            context.restore()
        }
    }
   
}
