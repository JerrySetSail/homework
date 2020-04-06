// class Game {
// 	constructor(fps, images, runCallback) {
// 		this.fps = fps
// 		this.images = images
// 		this.runCallback = runCallback

// 		this.scene = null
// 		this.actions = {}
// 		this.keydowns = {}
// 		this.canvas = document.querySelector('#id-canvas')
// 		this.context = this.canvas.getContext('2d')

// 		var self = this
// 		window.addEventListener('keydown', function(event) {
// 			self.keydowns[event.key] = true
// 		})

// 		window.addEventListener('keyup', function(event) {
// 			self.keydowns[event.key] = false
// 		})

// 		this.init()
// 	}

// 	static instance(...args) {
// 		this.i = this.i || new this(...args)
// 		return this.i
// 	}


// 	imageByName(name) {
// 		var g = this
// 		var img = g.images[name]

// 		var image = {
// 			w: img.width,
// 			h: img.height,
// 			image: img,
// 		}
// 		return image
// 	}

// 	registerAction(key, callback) {
// 		this.actions[key] = callback
// 	}

// 	runWithScene(scene) {
// 		var g = this
// 		g.scene = scene
// 		setTimeout(function() {
// 			g.runloop()
// 		}, 1000/window.fps)
// 	}

// 	runloop() {
// 		var actions = Object.keys(this.actions)
	
// 		for (var i = 0; i < actions.length; i++) {
// 			var key = actions[i]
// 			if (this.keydowns[key]) {
// 				this.actions[key]()
// 			}
// 		}

// 		this.update()
// 		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
// 		this.draw()

// 		setTimeout(() => {
// 			this.runloop()
// 		}, 1000 / window.fps)
// 	}

// 	replaceScene(scene) {
// 		this.scene = scene
// 	}

// 	__start(scene) {
// 		this.runCallback(this)
// 	}

// 	drawImage(img) {
// 		this.context.drawImage(img.image, img.x, img.y)
// 	}

// 	update() {
// 		this.scene.update()
// 	}

// 	draw() {
// 		this.scene.draw()
// 	}

// 	init() {
// 		var g = this
// 		var loads = []
// 		//load imgs
// 		var names = Object.keys(g.images)
// 		for (var i = 0; i < names.length; i++ ) {
// 			let name = names[i]
// 			// log('name', name, g.imageByName(name))
// 			var path = g.images[name]
// 			let img = new Image()
// 			img.src = path
// 			img.onload = function() {
// 				g.images[name] = img
// 				loads.push(1)
// 				if (loads.length == names.length) {
// 					g.__start()
// 				}
// 			}
// 		}
// 	}

// }

class Game {
	constructor(fps, images, runCallback) {
		log('hi-game-c')
		window.fps = fps
		this.images = images
		this.runCallback = runCallback
		//
		this.scene = null
		this.actions = {}
		this.keydowns = {}
		this.canvas = document.getElementById('id-canvas')

		log('canvas', this.canvas)
		this.context = this.canvas.getContext('2d')
		//events
		var self = this
		window.addEventListener('keydown', event => {
			this.keydowns[event.key] = true
		})
		window.addEventListener('keyup', function (event) {
			self.keydowns[event.key] = false
		})

		this.init()
	}

	static instance(...args) {
		this.i = this.i || new this(...args)
		return this.i
	}

	drawImage(img) {
		this.context.drawImage(img.image, img.x, img.y)
	}

	//update
	update() {
		this.scene.update()
	}

	//draw
	draw() {
		this.scene.draw()
	}

	registerAction(key, callback) {
		this.actions[key] = callback
	}

	runloop() {
	var actions = Object.keys(this.actions)
	for (var i = 0; i < actions.length; i++) {
		var key = actions[i]
		if (this.keydowns[key]) {
			//如果按键被按下,调用注册的action
			this.actions[key]()
		}
	}

	//update
	this.update()
	//clear
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
	//draw
	this.draw()

	setTimeout(() => {
	//events
		this.runloop()//相当于使用了递归函数
		}, 1000 / window.fps)
	}

	init() {
		//预先载入所有图片
		var loads = []
		var names = Object.keys(this.images)
		for (var i = 0; i < names.length; i++) {
			let name = names[i]
			var path = this.images[name]
			let img = new Image()
			img.src = path
			img.onload = () => {
				this.images[name] = img
				loads.push(1)
				if (loads.length === names.length) {
					this.__start()
				}
			}
		}
	}

	imageByName(name) {
		var img = this.images[name]
		var image = {
			w: img.width,
			h: img.height,
			image: img,
		}

		return image
	}

	runWithScene(scene) {
		this.scene = scene
		//运行程序
		setTimeout(() => {
			this.runloop()
		}, 1000 / fps)
	}

	replaceScene(scene) {
		this.scene = scene
	}

	__start() {
		this.runCallback(this)
	}
}
