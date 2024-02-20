class Cloud extends MovableObject {
    y = -25;
    height = 250;

    constructor (){
        super().loadImg("assets/img/5_background/layers/4_clouds/1.png")
        this.x = Math.random() * 500;
        this.width = 500;
    }
}