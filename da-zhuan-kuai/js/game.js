var Game = function(fps) {
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')

    var g = {
        canvas: canvas,
        context: context,
        actions: {},
        keydowns: {},
    }

    g.drawImage = function(img) {
        var image = img.image
        let width = img.width || image.width
        let height = img.height || image.height

        g.context.drawImage(image, img.x, img.y, width, height)
    }

    window.addEventListener('keydown', function(event) {
        g.keydowns[event.key] = true
    })

    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false
    })

    document.querySelector('#fps-range').addEventListener('input', function(event) {
        var val = Number(event.target.value)
        window.fps = val
    })

    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }

    window.fps = 30
    var runloop = function() {

        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var k = actions[i]

            if (g.keydowns[k]) {
                g.actions[k]()
            }
        }

        g.update()
        context.clearRect(0, 0, canvas.width, canvas.height)
        g.draw()

        setTimeout(function() {
            runloop()
        }, 1000/window.fps)
    }

    setTimeout(function() {
        runloop()
    }, 1000/window.fps)

    return g
}
