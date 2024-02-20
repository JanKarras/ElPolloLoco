class Chicken extends MovableObject{

    constructor (){
        super().loadImg("assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png")
        this.x = 200 + Math.random() * 500;
    }

    moveLeft(){

    }
}