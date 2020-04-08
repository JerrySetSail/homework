class BaseScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    addElement(gameImage) {
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
       
    }

}
