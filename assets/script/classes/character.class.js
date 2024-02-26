class Character extends MovableObject {
    height = 300
    y = 10;
    speed = 5
    currentImageIndex = 0;
    IMAGES_WALKING = [
        "./assets/img/2_character_pepe/2_walk/W-21.png",
        "./assets/img/2_character_pepe/2_walk/W-22.png",
        "./assets/img/2_character_pepe/2_walk/W-23.png",
        "./assets/img/2_character_pepe/2_walk/W-24.png",
        "./assets/img/2_character_pepe/2_walk/W-25.png",
        "./assets/img/2_character_pepe/2_walk/W-26.png"
    ]
    IMAGES_JUMP = [
        "assets/img/2_character_pepe/3_jump/J-31.png",
        "assets/img/2_character_pepe/3_jump/J-32.png",
        "assets/img/2_character_pepe/3_jump/J-33.png",
        "assets/img/2_character_pepe/3_jump/J-34.png",
        "assets/img/2_character_pepe/3_jump/J-35.png",
        "assets/img/2_character_pepe/3_jump/J-36.png",
        "assets/img/2_character_pepe/3_jump/J-37.png",
        "assets/img/2_character_pepe/3_jump/J-38.png",
        "assets/img/2_character_pepe/3_jump/J-39.png",
    ]
    World;
    constructor() {
        super().loadImg(this.IMAGES_WALKING[0]);
        this.loadImges(this.IMAGES_WALKING);
        this.loadImges(this.IMAGES_JUMP);
        this.applyGravity();
        this.animateC();
    }

    animateC() {

        setInterval(() => {
            if (this.World.keyboard.d == true && this.x < this.World.level.level_end_X){
                this.x = this.x + this.speed
                this.otherDirection = false;
            }

            if (this.World.keyboard.a == true && this.x > 0){
                this.x = this.x - this.speed
                this.otherDirection = true;
            }
            this.World.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if(this.isAboveGround()){
                let path = this.IMAGES_JUMP[this.currentImageIndex];
                console.log(path);
                this.img = this.IMAGES_JUMP[path];
                //this.currentImageIndex++;
                //if (this.currentImageIndex == this.IMAGES_JUMP.length - 1)
                //    this.currentImageIndex = 0;
            } else {
                if (this.World.keyboard.d == true || this.World.keyboard.a == true) {
                    let path = this.IMAGES_JUMP[this.currentImageIndex];
                    this.img = this.IMAGES_JUMP[path];
                    this.currentImageIndex++;
                    if (this.currentImageIndex == this.IMAGES_JUMP.length - 1)
                        this.currentImageIndex = 0;
                }
            }

        }, 50);
    }



    jump() {

    }

}
