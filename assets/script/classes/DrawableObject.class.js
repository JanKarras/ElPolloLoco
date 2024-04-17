class DrawableObject {
    img;
    images = {};
    currentImage = 0;
    x = 120;
    y = 200;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.images[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character) {
           ctx.beginPath();
           ctx.lineWidth = '5';
           ctx.strokeStyle = 'blue';
           ctx.rect(this.x + 15, this.y + 110, this.width - 30, this.height - 120);
           ctx.stroke();
        }
        if (this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y + 60, this.width, this.height - 120);
            ctx.stroke();
         }
        if (this instanceof Coin){
            ctx.beginPath();
           ctx.lineWidth = '5';
           ctx.strokeStyle = 'blue';
           ctx.rect(this.x + 40, this.y + 40, this.width -80, this.height - 80);
           ctx.stroke();
        }
        if (this instanceof Bottle){
            ctx.beginPath();
           ctx.lineWidth = '5';
           ctx.strokeStyle = 'blue';
           ctx.rect(this.x + 30, this.y + 10, this.width - 40, this.height - 10);
           ctx.stroke();
        }
        if (this instanceof ThrowableObject){
            ctx.beginPath();
           ctx.lineWidth = '5';
           ctx.strokeStyle = 'blue';
           ctx.rect(this.x, this.y, this.width, this.height);
           ctx.stroke();
        }
        if (this instanceof Endboss){
            ctx.beginPath();
           ctx.lineWidth = '5';
           ctx.strokeStyle = 'blue';
           ctx.rect(this.x, this.y, this.width, this.height);
           ctx.stroke();
        }
        if (this instanceof SmallChicken){
            ctx.beginPath();
           ctx.lineWidth = '5';
           ctx.strokeStyle = 'blue';
           ctx.rect(this.x, this.y, this.width, this.height);
           ctx.stroke();
        }
     }
}