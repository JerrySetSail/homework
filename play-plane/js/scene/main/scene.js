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


        this.player = Player.new(game)
        this.player.x = 190
        this.player.y = 650

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
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

    checkIsWreckEnemy(bullet) {
        for(var e of this.enemies) {
            e.wreck(bullet)
        }
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
        this.handleElements()
    }

    handleElements() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            var name = e.constructor.name

            if (e.isAlive() === false) {
                if (name == 'Enemy') {
                    var ps = ParticleSystem.new(this.game)
                    this.addElement(ps)
                    ps.x = e.x
                    ps.y = e.y
                } else if(name == 'Player') {
                    var end = SceneEnd.new(this.game)
                    this.game.replaceScene(end)
                }

                this.delElement(i)

                continue
            }

            if (name == 'Bullet') {
                this.checkIsWreckEnemy(e)
            }

            if (name == 'EnemyBullet' || name == 'Enemy') {
                this.player.wreck(e)
            }
        }
    }
}
