class BaseScene {
    constructor(game) {
        this.game = game
    }

    draw() {

    }

    static new(game) {
        var i = new this(game)
        return i
    }

    update() {
       
    }

}
