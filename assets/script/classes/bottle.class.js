class Bottle extends DrawableObject{
    constructor(x){
        super().loadImage("assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
        this.width = 80
        this.height = 80
        this.y = 350;
        this.x = 200 + x
    }
}