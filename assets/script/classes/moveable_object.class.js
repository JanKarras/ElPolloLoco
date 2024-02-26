class MovableObject{
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    speed = 2;
    xNeg = -100;
    xPos = 720 + Math.random() * 500;
    IMAGES_WALKING = [];
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;


    isAboveGround(){
        return this.y < 140;
    }

    applyGravity(){
        setInterval(() => {
            if (this.y < 140)
            {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    loadImg(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImges(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.IMAGES_WALKING[path] = img;
        });
    }

    moveleft = () =>{
        if (this.x > this.xNeg)
            this.x = this.x - this.speed ;
        else
            this.x = this.xPos;
    }

    moveRight(){

    }

    animate(IMAGES, currentImageIndex, interval){
        setInterval(() => {
            this.loadImg(IMAGES[currentImageIndex])
            currentImageIndex++;
            if (currentImageIndex == IMAGES.length)
                currentImageIndex = 0;
        }, interval);
    }
}
