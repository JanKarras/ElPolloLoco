class Cloud extends MovableObject {
    y = 0;
    height = 250;
    xNeg = -450;
    xPos = 720;
    speed = 0.2

    constructor (){
        super().loadImg("assets/img/5_background/layers/4_clouds/1.png")
        this.x = Math.random() * 500;
        this.width = 500;
        setInterval(this.moveleft.bind(this), 1000 / 60);
    }
}
