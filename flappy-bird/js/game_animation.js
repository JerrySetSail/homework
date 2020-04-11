class GameAnimation {
    constructor(game) {
        this.game = game

        this.animations = {
            idle: [],
            run: [],
            fly: [],
        }
        this.init()
    }

    init() {
        for (var i = 1; i < 4; i++) {
            var name = `b${i}`
            var t = this.game.textureByName(name)
            this.animations['fly'].push(t)
        }
        this.animationName = 'fly'
        this.texture = this.frames()[0]
        this.w = this.texture.w
        this.h = this.texture.h
        this.frameIndex = 0
        this.frameCount = 3

        this.flipX = false
        this.rotation = 0

        this.gy = 10
        this.vy = 0
        this.standbyTime = 50
    }

    static new(game) {
        return new this(game)
    }

    frames() {
        return this.animations[this.animationName]
    }

    draw() {
        var context = this.game.context
        context.save()

        var w = this.w || this.texture.width
        var h = this.h || this.texture.height
        var w2 = w / 2
        var h2 = h / 2
        context.translate(this.x + w2, this.y + h2)

        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.rotate(this.rotation * Math.PI / 100)
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)

        context.restore()
    }

    jump() {
        this.vy = -10
        this.rotation = -45
        this.standbyTime = 0
    }

    update() {
        this.standbyTime--
        log('s', this.standbyTime)
        if (this.standbyTime < 0) {

            this.y += this.vy
            this.vy += this.gy * 0.2

            var h = 550
            if (this.y > h) {
                var end = SceneEnd.new(this.game)
                this.game.replaceScene(end)
            }

            if (this.rotation < 45) {
                this.rotation += 5
            }
        }


        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }



    collide(pipe) {
        var o = this
		let res = rectIntersects(o, pipe) || rectIntersects(pipe, o)

        if (res) {
            var end = SceneEnd.new(this.game)
            this.game.replaceScene(end)
            log('collide')
        }
    }

    move(x, keyStatus) {
        this.flipX = x < 0
        this.x += x
    }

    changeAnimation(name) {
        this.animationName = name
    }

}
