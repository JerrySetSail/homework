class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
        var label = GameLabel.new(game, 'hello')
        this.addElement(label)

        var ps = ParticleSystem.new(game)
        this.addElement(ps)
    }

    draw() {
        super.draw()
        // this.game.context.fillText('游戏开始,按k 开始：', 100,
    }

    update() {
        super.update()
    }
}
