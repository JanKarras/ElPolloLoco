class Chicken extends MovableObject{
    y = 370;
    height = 70;
    width = 70;
    currentImageIndex = 0;
    IMAGES_WALKING = [
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
    ];
    constructor (){
        super().loadImg(this.IMAGES_WALKING[this.currentImageIndex]);
        this.x = 720 + Math.random() * 500;
        this.speed = 2 + Math.random() * 0.25;
        setInterval(this.moveleft.bind(this), 1000 / 60);
        this.animate(this.IMAGES_WALKING, 0, 100);
    }
}
