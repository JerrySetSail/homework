class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function () {
            game.replaceScene(Scene(game))
        })
    }

    draw() {
        this.game.context.fillText('游戏开始,按k 开始：', 100, 290)
    }

    update() {

    }
}
