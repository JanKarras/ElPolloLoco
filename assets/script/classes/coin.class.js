class Coin extends DrawableObject {
    constructor(x){
        super().loadImage("assets/img/8_coin/coin_2.png");
        this.y = 250;
        this.width = 120
        this.height = 120
        this.x = 200 + x;
    }

    getRandomNumber(){
        return (10);
    }
}