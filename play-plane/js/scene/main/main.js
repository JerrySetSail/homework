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
        'enemy_bullet': 'img/bullet2.png',
        'cloud': 'img/cloud.jpg',
        'cloud1': 'img/cloud1.png',
        'player': 'img/myPlane.gif',
        'sky': 'img/sky.jpg',
        'enemy0': 'img/npc0.png',
        'enemy1': 'img/npc1.png',
        'enemy2': 'img/npc2.png',
        'enemy3': 'img/npc3.png',
        'enemy4': 'img/npc4.png',
        'fire': 'img/light.png',
    }

    var game = Game.instance(30, images, function(g) {
        var scene = new Scene(g)
        // var scene = new SceneTitle(g)
        g.runWithScene(scene)
    })
    enableDebugMode(game, true)

    var es = sel => document.querySelectorAll(sel)

    var bindAll = function(sel, eventName, callback) {
        var l = es(sel)
        for (var i = 0; i < l.length; i++) {
            var input = l[i]
            input.addEventListener(eventName, function(event) {
                callback(event)
            })
        }
    }

    bindAll('.auto-slider', 'input', function(event) {
        var target = event.target
        var bindVar = target.dataset.value
        var v = target.value
        eval(bindVar + '=' + v)

        var label = target.closest('label').querySelector('.game-label')
        label.innerText = v
    })
}

_main()
