var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
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
            // blocks = loadLevel(game, Number(k))
        }
    })
}

var _main = function() {


    var images = {
        'bullet': 'img/bullet1.png',
        'cloud': 'img/cloud.jpg',
        'cloud1': 'img/cloud1.png',
        'player': 'img/myPlane.gif',
        'sky': 'img/sky.jpg',
    }

    var game = Game.instance(30, images, function(g) {
        var scene = new Scene(g)
        g.runWithScene(scene)
    })
    enableDebugMode(game, true)

}

_main()
