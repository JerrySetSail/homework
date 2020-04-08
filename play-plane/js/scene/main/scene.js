class Scene extends BaseScene {
    constructor(game) {
        super(game)

        this.setup()
        this.setupInputs()
    }

    setup() {
        var game = this.game
        this.numberOfEnemies = 10

        this.bg = GameImage.new(this.game, 'sky')
        this.cloud = Cloud.new(game)
        this.cloud.w = 100
        this.cloud.h = 80

        this.bullet = Bullet.new(game)

        // this.player = GameImage.new(this.game, 'player')
        this.player = Player.new(game)
        this.player.x = 190
        this.player.y = 650

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
        this.addElement(this.bullet)
        this.addEnemies()
    }

    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++){
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }

    setupInputs() {
        var g = this.game
        var s = this

        g.registerAction('a', function() {
            s.player.moveLeft()
        })

        g.registerAction('d', function() {
            s.player.moveRight()
        })

        g.registerAction('w', function() {
            s.player.moveUp()
        })

        g.registerAction('s', function() {
            s.player.moveDown()
        })

        g.registerAction('j', function() {
            s.player.fire()
        })
    }

    update() {
        super.update()
        this.cloud.y += 1
    }
}
