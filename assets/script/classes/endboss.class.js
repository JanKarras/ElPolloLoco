class Endboss extends MoveableObject {
    height = 400;
    width = 250;
    y = 50;
    x = 719 * 2 + 400
    IMAGES_WALKING = [
        "assets/img/4_enemie_boss_chicken/2_alert/G5.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G6.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G7.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G8.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G9.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G10.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G11.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G12.png",
    ]

    constructor(){
        super();
        this.loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING)
        this.animate();
    }

    animate(){
        setInterval(() =>{
            this.playAnimation(this.IMAGES_WALKING);
        }, 200)
    }
}