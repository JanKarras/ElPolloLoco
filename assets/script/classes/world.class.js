class World{
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camery_x = 0;
    statusBars = [
        new StatusBar("haelthBar"), 
        new StatusBar("salzaBar"), 
        new StatusBar("coinBar")]
    ThrowableObjects = []
    CollectableObjects = [
        //new Coin(0),
        //new Coin(50),
        //new Coin(100),
        //new Coin(150),
        //new Coin(200),
        //new Coin(250),
        //new Coin(300),
        //new Coin(350),
        //new Coin(400),
        //new Coin(450),
        //new Bottle(0),
        //new Bottle(50),
        //new Bottle(100),
        //new Bottle(150),
        //new Bottle(200),
        //new Bottle(250),
        //new Bottle(300),
        //new Bottle(350),
        //new Bottle(400),
    ];

    bottlleSplash = []

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    run(){
        setInterval(() => {
            this.checkCollision();
        }, 200);
        setInterval(() => {
            this.checkThrowOnjects();
        }, 100)
        setInterval(() => {
            this.checkCollection();
            this.checkHitEnemy();
            this.checkBottleOutOfMap();
        }, 60)
    }

    checkHitEnemy(){
        for (let i = 0; i < this.ThrowableObjects.length; i++) {
            const bottle = this.ThrowableObjects[i];
            for (let j = 0; j < this.level.enemies.length; j++) {
                const enemy = this.level.enemies[j];
                if (bottle.isColliding(enemy)){
                    if (enemy instanceof Chicken || enemy instanceof SmallChicken){
                        enemy.chickenDead();
                    }
                    this.playSplashAnimation(bottle, 2, enemy);
                    this.ThrowableObjects.splice(i, 1);
                    i--;
                }
            }
        }
    }

    playSplashAnimation(bottle, key, enemy){
        let newBottle = new DrawableObject();
        newBottle.loadImage('assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png');
        this.bottlleSplash.push(newBottle);
        let index = this.bottlleSplash.length - 1;
        if (enemy instanceof Endboss)
            newBottle.x = bottle.x;
        else
            newBottle.x = bottle.x -20;
        if (key == 0)
            newBottle.y = 330;
        if (enemy instanceof Chicken || key == 0){
            if (newBottle.y < 358)
                newBottle.y = 320;
        }
        else
            newBottle.y = bottle.y + 10;
        for (let j = 1; j < 7; j++) {
            setTimeout(() => {
                newBottle.loadImage(`assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/${j}_bottle_splash.png`);
            }, 60 * j)
        }
        setTimeout(() => {
            this.bottlleSplash.splice(index, 1);
        }, 8 * 60)
    }

    checkBottleOutOfMap(){
       for (let i = 0; i < this.ThrowableObjects.length; i++) {
        const bottle = this.ThrowableObjects[i];
        if (bottle.y >= 358){
            this.playSplashAnimation(bottle, 0);
            this.ThrowableObjects.splice(i, 1);
            i--;
        }
       }
    }

    checkCollection(){
        for (let i = 0; i < this.CollectableObjects.length; i++) {
            let collectable = this.CollectableObjects[i];
            if (this.character.isColliding(collectable)){
                if (collectable instanceof Coin){
                    this.character.coins += 10;
                    this.statusBars[2].setPercentage(this.character.coins, 2);
                    this.CollectableObjects.splice(i, 1);
                    i--;
                }
                else if (this.character.salza < 10) {
                    this.character.salza += 1;
                    this.statusBars[1].setPercentage(this.character.salza * 10, 1);
                    this.CollectableObjects.splice(i, 1);
                    i--;
                }
            }
        }
    }
    
    checkCollision(){
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)){
                if (enemy.energy != 0){
                    this.character.hit();
                    this.statusBars[0].setPercentage(this.character.energy, 0)
                }
            }
        })
        
    }

    checkThrowOnjects(){
        if (this.keyboard.E && this.character.salza > 0){
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 150)
            this.ThrowableObjects.push(bottle)
            this.character.salza--;
            this.statusBars[1].setPercentage(this.statusBars[1].salzaPerzentage - 10, 1);
        }
    }

    setWorld(){
        this.character.world = this;
    }
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camery_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camery_x, 0);
        this.addObjectsToMap(this.statusBars)
        this.ctx.translate(this.camery_x, 0);

        this.addToMap(this.character)
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.ThrowableObjects);
        this.addObjectsToMap(this.bottlleSplash);
        this.addObjectsToMap(this.CollectableObjects);
        this.ctx.translate(-this.camery_x, 0);
        let self = this;
        if (this.character.INDEX % 7 == 6)
            return;
        requestAnimationFrame(function(){
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(o =>{
            this.addToMap(o);
        })
    }

    addToMap(mo){
        if (mo.otherDirection){
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection){
            this.flipImageBack(mo);
        }
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1
    }

    flipImageBack(mo){
        mo.x = mo.x * -1
        this.ctx.restore();
    }
}