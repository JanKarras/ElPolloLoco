class Chicken extends MovableObject{
    y = 370;
    height = 70;
    width = 70;
    currentImageIndex = 0;
    images = [
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
    ];
    constructor (){
        super().loadImg(this.images[this.currentImageIndex]);
        this.x = 720 + Math.random() * 500;
        setInterval(this.moveleft.bind(this), 1000 / 60);
        setInterval(this.changeMoveImg.bind(this), 100);
    }

    moveleft = () =>{
        if (this.x > -100)
        {
            this.x = this.x - 2;
        }
        else
            this.x = 720 + Math.random() * 500;
    }

    changeMoveImg = () =>{
        this.currentImageIndex++;
        this.loadImg(this.images[this.currentImageIndex])
        if (this.currentImageIndex == this.images.length - 1)
            this.currentImageIndex = 0;
    }
}
