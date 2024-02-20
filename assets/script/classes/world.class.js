class World {
    charactar = new Character();
    enemies = [
        new Chicken(),new Chicken(),new Chicken()
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject("assets/img/5_background/layers/3_third_layer/1.png", 0)
    ];
    canvas;
    ctx;
    
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.addToMap(this.charactar);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.backgroundObjects);
        let self = this;
        requestAnimationFrame(function (){
            self.draw();
        })
    }

    addObjectsToMap(objects){
        for (let i = 0; i < objects.length; i++) {
            this.addToMap(objects[i]);
        }
    }

    addToMap(mo){
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}