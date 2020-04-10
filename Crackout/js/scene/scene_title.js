class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
    }

    draw() {
        this.game.context.fillText('按 k 开始游戏', 10, 250)
    }
}
