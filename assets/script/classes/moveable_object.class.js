class MovableObject{
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    speed = 2;
    xNeg = -100;
    xPos = 720 + Math.random() * 500;
    currentImageIndex = 0;
    images = [];
    otherDirection = false;

    loadImg(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImges(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.images[path] = img;
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
}
