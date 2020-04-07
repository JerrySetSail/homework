var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var loadLevel = function(game, n) {
    var n = n - 1
    var l = levels[n]
    var blocks = []

    for (var  i = 0; i < l.length; i++) {
        var p = l[i]
        var b = new Block(game, p)
        blocks.push(b)
    }

    return blocks
}

var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }

    window.addEventListener('keydown', function(event) {
        var k = event.key

        if (k == 'p') {
            paused = !paused
        } else if('12345678'.includes(k)) {
            blocks = loadLevel(game, Number(k))
        }
    })
}

var _main = function() {


    var images = {
        'ball': 'img/ball.png',
        'paddle': 'img/paddle.png',
        'block': 'img/block.png',
    }

    var game = Game(30, images, function(g) {
        var scene = Scene(g)
        g.runWithScene(scene)
    })
    enableDebugMode(game, true)

}

_main()
