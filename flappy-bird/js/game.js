class Game {
    constructor(fps, images, runCallback) {
        this.fps = fps
        this.images = images
        this.runCallback = runCallback

        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.instance = null

        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.init()
    }

    init() {
        var self = this
        window.fps = this.fps

        window.addEventListener('keydown', function(event) {
            self.keydowns[event.key] = true
        })

        window.addEventListener('keyup', function(event) {
            self.keydowns[event.key] = false
        })

        var loads = []
        var names = Object.keys(self.images)
        var g = this

        for (var i = 0; i < names.length; i++) {

            var name = names[i]
            var path = self.images[name]

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
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    replaceScene(scene) {
        var g = this
        g.scene = scene
    }

    runWithScene(scene) {
        var g = this
        g.scene = scene

        setTimeout(function() {
            g.runloop()
        }, 1000/window.fps)
    }

    run() {
        var g = this
        this.runCallback(g)
    }

    registerAction(key, callback) {
        var g = this
        g.actions[key] = callback
    }

    drawImage(img) {
        let width = img.w
        let height = img.h

        // log('img', img.x, img.y, width, height)
        this.context.drawImage(img.texture, img.x, img.y, width, height)
    }

    textureByName(name) {
        var g = this
        var img = g.images[name]
        // var image = {
        //     w: img.width,
        //     h: img.height,
        //     image: img,
        // }

        return img
    }

    runloop() {
        var g = this
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var k = actions[i]

            if (g.keydowns[k]) {
                g.actions[k]()
            }
        }

        g.scene.update()

        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        g.scene.draw()

        setTimeout(function() {
            g.runloop()
        }, 1000/window.fps)
    }
}

