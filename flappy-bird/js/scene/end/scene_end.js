class SceneEnd extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function () {
            game.replaceScene(Scene.new(game))
        })
    }

    draw() {
        this.game.context.fillText('游戏结束,按r 重新开始', 100, 290)
    }

    update() {

    }
}
