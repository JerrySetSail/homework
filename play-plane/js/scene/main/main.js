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
        'enemy0': 'img/npc0.png',
        'enemy1': 'img/npc1.png',
        'enemy2': 'img/npc2.png',
        'enemy3': 'img/npc3.png',
        'enemy4': 'img/npc4.png',
    }

    var game = Game.instance(30, images, function(g) {
        var scene = new Scene(g)
        g.runWithScene(scene)
    })
    enableDebugMode(game, true)

}

_main()
