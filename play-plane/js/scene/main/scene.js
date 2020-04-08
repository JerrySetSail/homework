class Scene extends BaseScene {
    constructor(game) {
        super(game)

        this.setup()
    }

    setup() {

        this.bg = GameImage.new(this.game, 'sky')
        this.cloud = GameImage.new(this.game, 'cloud')
        this.cloud.w = 100
        this.cloud.h = 80

        this.player = GameImage.new(this.game, 'player')
        this.player.x = 190
        this.player.y = 650

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
    }

    update() {
        this.cloud.y += 1
    }
}
