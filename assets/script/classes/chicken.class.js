class Chicken extends MoveableObject{
    y = 370;
    height = 60;
    width = 80;
    IMAGES_WALKING = [
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ]
    constructor(){
        super().loadImage("assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png")
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.3 + Math.random() * 0.25;
        this.animate();
    }

    animate(){

        this.moveLeft();

        setInterval(() =>{
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.images[path];
            this.currentImage++;
        }, 100);


    }
}