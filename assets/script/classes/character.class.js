class Character extends MovableObject {
    height = 300
    y = 150
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
    World;
    constructor() {
        super().loadImg(this.IMAGES_WALKING[0]);
        this.loadImges(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.World.keyboard.d == true){
                this.x = this.x + this.speed
                this.otherDirection = false;
            }

            if (this.World.keyboard.a == true){
                this.x = this.x + this.speed
                this.otherDirection = true;
            }
        }, 1000 / 60);

        setInterval(() => {

            if (this.World.keyboard.d == true || this.World.keyboard.a == true) {
                let path = this.IMAGES_WALKING[this.currentImageIndex];
                this.img = this.images[path];
                this.currentImageIndex++;
                if (this.currentImageIndex == this.IMAGES_WALKING.length - 1)
                    this.currentImageIndex = 0;
            }
        }, 50);
    }



    jump() {

    }

}
