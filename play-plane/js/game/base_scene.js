class BaseScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.debugModeEnable = true
    }

    addElement(gameImage) {
        gameImage.scene = this
        this.elements.push(gameImage)
    }

    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            this.game.drawImage(e)
        }
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    update() {
        if (this.debugModeEnable) {
            for (var i = 0; i < this.elements.length; i++){
                var e = this.elements[i]
                e.debug && e.debug()
            }
        }
        for (var i = 0; i < this.elements.length; i++){
            var e = this.elements[i]
            e.update()
        }
    }

}
