class Cloud extends MovableObject {
    y = 0;
    height = 250;

    constructor (){
        super().loadImg("assets/img/5_background/layers/4_clouds/1.png")
        this.x = Math.random() * 500;
        this.width = 500;
        setInterval(this.moveCloud.bind(this), 1000 / 60);
    }

    moveCloud = () =>{
        if (this.x > -450)
            this.x = this.x - 0.15;
        else
            this.x = 720;
    }
}
