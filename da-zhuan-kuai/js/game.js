var Game = function(fps, images, runCallback) {
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')

    var g = {
        scene: null,
        canvas: canvas,
        context: context,
        actions: {},
        keydowns: {},
        images: {},
    }

    g.drawImage = function(img) {
        var image = img.image
        let width = img.width || image.width
        let height = img.height || image.height

        g.context.drawImage(image, img.x, img.y, width, height)
    }

    g.imageByName = function(name) {
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }

        return image
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

    window.fps = fps
    var runloop = function() {

        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var k = actions[i]

            if (g.keydowns[k]) {
                g.actions[k]()
            }
        }

        g.scene.update()

        context.clearRect(0, 0, canvas.width, canvas.height)
        g.scene.draw()

        setTimeout(function() {
            runloop()
        }, 1000/window.fps)
    }

    var loads = []
    var names = Object.keys(images)

    for (var i = 0; i < names.length; i++) {

        var name = names[i]
        var path = images[name]

        var img = new Image()
        img.src = path
        g.images[name] = img

        img.onload = function() {
            g.images[name] = img
            loads.push(1)

            if (loads.length == names.length) {
                g.run()
            }
        }
    }

    g.replaceScene = function(scene) {
        g.scene = scene
    }

    g.runWithScene = function(scene) {
        g.scene = scene

        setTimeout(function() {
            runloop()
        }, 1000/window.fps)
    }

    g.run = function() {
        runCallback(g)
    }

    return g
}
