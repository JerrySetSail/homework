class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)

        var bg = GameImage.new(game, 'bg')
        bg.w = 345.6
        bg.h = 614.4
        this.addElement(bg)

        this.grounds = []
        for (var i = 0; i < 5; i++) {
            var g = GameImage.new(game, 'ground')
            g.x = i * 128
            g.y = 573
            this.addElement(g)
            this.grounds.push(g)
        }

        this.skipCount = 4

        var b = GameAnimation.new(game)
        b.x = 100
        b.y = 200
        this.bird = b
        this.addElement(b)

        this.setupInputs()
    }

    setupInputs() {
        var self = this
        var b = this.bird
        // self.game.registerAction('a', function(keyStatus) {
        //     b.move(-2, keyStatus)
        // })
        // self.game.registerAction('d', function(keyStatus) {
        //     b.move(2, keyStatus)
        // })
        self.game.registerAction('j', function(keyStatus) {
            b.jump(2, keyStatus)
        })
    }

    draw() {
        super.draw()
        // this.game.context.fillText('游戏开始,按k 开始：', 100,
    }

    update() {
        super.update()

        this.skipCount--
        var offset = -5

        if (this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        for (var i = 0; i < 5; i++) {
            var g = this.grounds[i]
            g.x += offset
        }
    }
}
