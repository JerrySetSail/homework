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
        b1: 'img/b1.png',
        b2: 'img/b2.png',
        b3: 'img/b3.png',

        bg: 'img/background.png',
        ground: 'img/fence.png',
        b3: 'img/b3.png',
        pipe: 'img/pipe.png',
    }

    var game = Game.instance(30, images, function(g) {
        // var scene = new Scene(g)
        var scene = new SceneTitle(g)
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

    var bindEvents = function() {

        bindAll('.auto-slider', 'input', function(event) {
            var target = event.target
            var bindVar = target.dataset.value
            var v = target.value
            eval(bindVar + '.value =' + v)

            var label = target.closest('label').querySelector('.game-label')
            label.innerText = v
        })
    }

    var templateControl = function(key, item) {
        var t = `
        <div class="slide-bars">
            <label>
                <input class='auto-slider' type='range'
max='300'
                    value='${item.value}'
                    data-value='config.${key}'
                >
                ${item._comment}：<span class="game-label"></span>
            </label>
        </div>`

        return t
    }

    var insertControls = function() {
        var keys = Object.keys(config)
        var div = e('.game-controls')
        for (var k of keys) {
            var item = config[k]
            var html = templateControl(k, item)
            div.insertAdjacentHTML('beforeend', html)
        }
    }

    insertControls()
    bindEvents()
}

_main()
