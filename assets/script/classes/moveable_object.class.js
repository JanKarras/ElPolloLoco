class MovableObject{
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    currentImageIndex = 0;
    images = [];

    loadImg(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImges(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.images[path] = img;
        });
    }

    moveRight(){

    }
}
