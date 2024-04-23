class Chicken extends MoveableObject{
    y = 370;
    height = 60;
    width = 80;
    isDead = false
    IMAGES_WALKING = [
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ]
    constructor(nb){
        super().loadImage("assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png")
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500 + 200 * nb;
        this.speed = 0.3 + Math.random() * 0.25;
        this.animate();
    }

    animate(){

        this.moveLeft();

        setInterval(() =>{
            if (this.energy != 0)
                this.playAnimation(this.IMAGES_WALKING)
        }, 100);

        setInterval(() => {
            if (this.energy != 0){
                this.moveLeft();
            }
        }, 1000 / 60);

    }

    chickenDead(){
        this.energy = 0;
        this.loadImage("assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png")
        this.isDead = true;
    }
}