class Character extends MoveableObject {
    x = 120;
    y = 140
    height = 300;
    speed = 10;
    IMAGES_WALKING = [
        "assets/img/2_character_pepe/2_walk/W-21.png",
        "assets/img/2_character_pepe/2_walk/W-22.png",
        "assets/img/2_character_pepe/2_walk/W-23.png",
        "assets/img/2_character_pepe/2_walk/W-24.png",
        "assets/img/2_character_pepe/2_walk/W-25.png",
        "assets/img/2_character_pepe/2_walk/W-26.png",
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
    world;
    //walking_sound = new Audio('audioPATH')

    constructor(){
        super().loadImage("assets/img/2_character_pepe/2_walk/W-21.png")
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_JUMP)
        this.applyGravity();
        this.animate();
        
    }

    animate(){

        setInterval(() =>{
            //this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x * 3 - 600){
                this.moveRight();
                //this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0){
                this.moveLeft();
                //this.walking_sound.play();
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()){
                this.jump();
            }
            this.world.camery_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() =>{
            if (this.isAboveGround()){
                this.playAnimation(this.IMAGES_JUMP);
            } else {
                if (this.world.keyboard.RIGHT  || this.world.keyboard.LEFT){
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);
    }

    
}