class Endboss extends MoveableObject {
    height = 400;
    width = 250;
    y = 50;
    x = 719 * 2 + 400
    speed = 0.5
    isDead = false
    IMAGES_ALERT = [
        "assets/img/4_enemie_boss_chicken/2_alert/G5.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G6.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G7.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G8.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G9.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G10.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G11.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G12.png",
    ]
    IMAGES_WALK = [
        'assets/img/4_enemie_boss_chicken/1_walk/G1.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G2.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G3.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G4.png',
    ]

    IMAGES_ATTACK = [
        'assets/img/4_enemie_boss_chicken/3_attack/G13.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G14.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G15.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G16.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G17.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G18.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G19.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G20.png',
    ]

    IMAGES_HURT = [
        'assets/img/4_enemie_boss_chicken/4_hurt/G21.png',
        'assets/img/4_enemie_boss_chicken/4_hurt/G22.png',
        'assets/img/4_enemie_boss_chicken/4_hurt/G23.png',
    ]

    IMAGES_DEAD = [
        'assets/img/4_enemie_boss_chicken/5_dead/G24.png',
        'assets/img/4_enemie_boss_chicken/5_dead/G25.png',
        'assets/img/4_enemie_boss_chicken/5_dead/G26.png',
    ]

    constructor(){
        super();
        this.loadImage(this.IMAGES_ALERT[0])
        this.loadImages(this.IMAGES_ALERT)
        this.loadImages(this.IMAGES_WALK)
        this.loadImages(this.IMAGES_ATTACK)
        this.loadImages(this.IMAGES_DEAD)
        this.loadImages(this.IMAGES_HURT)
        this.animate();
    }

    alertId
    Walkid
    attackId
    MiveRightId
    hurtId
    INDEX = 0;
    gameEnd = false
    isWalking = false
    isAttacking = false;

    animate(){
        this.alertId = setInterval(() =>{
            this.playAnimation(this.IMAGES_ALERT);
        }, 200)
    }

    triggerEnboss(){
        this.isWalking = true;
        clearInterval(this.alertId);
        clearInterval(this.attackId);
        clearInterval(this.hurtId);
        this.Walkid = setInterval(() =>{
            this.playAnimation(this.IMAGES_WALK);
        }, 200)
        if (!this.MiveRightId){
            this.MiveRightId = setInterval(() => {
                if (this.energy != 0){
                    this.moveLeft();
                }
            }, 1000 / 60);
        }
    }

    attack(){
        clearInterval(this.Walkid);
        this.attackId = setInterval(() =>{
            this.playAnimation(this.IMAGES_ATTACK);
        }, 200)
        setTimeout(() => {
            this.triggerEnboss();
        }, 8 * 200 )
    }

    hurt(){
        clearInterval(this.Walkid);
        this.hurtId = setInterval(() => {
            this.playAnimation(this.IMAGES_HURT);
        }, 200)
        setTimeout(() => {
            this.triggerEnboss();
        }, 3 * 200 )
    }

    chickenDead(){
        if (this.energy <= 0){
            clearInterval(this.alertId);
            clearInterval(this.attackId);
            clearInterval(this.hurtId);
            clearInterval(this.Walkid);
            clearInterval(this.MiveRightId);
            let id = setInterval(() => {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    clearInterval(id);
                    this.gameEnd = true;
                }, 2 * 200 - 1)
            }, 200)
        }
    }
}
