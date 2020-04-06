var Game = function() {
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

    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }

    setInterval(function() {

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

    }, 1000/30)

    return g
}
