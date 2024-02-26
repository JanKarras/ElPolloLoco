class Endboss extends MovableObject{
    height = 400;
    width = 250;
    y = 50;
    IMAGES_ANGRY = [
        "assets/img/4_enemie_boss_chicken/2_alert/G5.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G6.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G7.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G8.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G9.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G10.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G11.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G12.png",
    ];

    constructor(){
        super().loadImg(this.IMAGES_ANGRY[0]);
        this.x = 720 * 3;
        this.animate(this.IMAGES_ANGRY, 0, 200);
    }
}