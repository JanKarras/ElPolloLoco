class MoveableObject extends DrawableObject {
   speed = 0.15;
   otherDirection = false
   speedY = 0;
   acceleration = 2.5;
   energy = 100;
   lastHit = 0;

   applyGravity() {
      setInterval(() => {
         if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY = this.speedY - this.acceleration;
         }
      }, 1000 / 25)
   }

   isAboveGround() {
      if (this instanceof ThrowableObject){
         return true;
      } else
      return (this.y < 140);
   }
   
   moveRight() {
      this.x += this.speed;
   }

   moveLeft() {
      this.x -= this.speed;
   }

   playAnimation(images) {
      let i = this.currentImage % images.length;
      let path = images[i];
      this.img = this.images[path];
      this.currentImage++;
      return this.currentImage;
   }

   jump() {
      this.speedY = 30;
   }

   isColliding(mo) {
      if (this instanceof Character){
         if (mo instanceof Coin)
            return this.x + 15 + this.width -30 > mo.x + 40 && this.y + 110 + this.height - 120 > mo.y +40 && this.x + 15 < mo.x + 40 && this.y + 110 < mo.y + 40 + mo.height -80;
         if (mo instanceof Bottle)
            return this.x + 15 + this.width -30 > mo.x + 30 && this.y + 110 + this.height - 120 > mo.y +10 && this.x + 15 < mo.x + 30 && this.y + 110 < mo.y + 10 + mo.height -10;
         if (mo instanceof Chicken)
            return this.x + 15 + this.width -30 > mo.x && this.y + 110 + this.height - 50 > mo.y +60 && this.x + 15 < mo.x && this.y + 110 < mo.y + 60 + mo.height -120;
         if (mo instanceof Endboss)
            return this.x + 15 + this.width -30 > mo.x && this.y + 110 + this.height - 50 > mo.y +60 && this.x + 15 < mo.x && this.y + 110 < mo.y + 60 + mo.height -120;
         if (mo instanceof SmallChicken)
            return this.x + 15 + this.width -30 > mo.x && this.y + 110 + this.height - 50 > mo.y +60 && this.x + 15 < mo.x && this.y + 110 < mo.y + 60 + mo.height -120;
      } else {
         if (mo instanceof Chicken)
            return this.x + this.width > mo.x + 20 && this.y + this.height > mo.y && this.x - 50 < mo.x && this.y < mo.y + mo.height;
         if (mo instanceof Endboss)
            return this.x + this.width > mo.x + 20 && this.y + this.height > mo.y && this.x < mo.x && this.y  < mo.y +  mo.height;
         if (mo instanceof SmallChicken)
            return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x -20 < mo.x && this.y  < mo.y +  mo.height;
      }
   }

   hit(enemy) {
      if (enemy instanceof Endboss)
         this.energy -= 20;
      else
         this.energy -= 5;
      if (this.energy < 0)
         this.energy = 0;
      else
         this.lastHit = new Date().getTime();
   }

   isDead() {
      return this.energy == 0;
   }

   isHurt() {
      let timePassed = new Date().getTime() - this.lastHit
      timePassed = timePassed / 1000;
      return (timePassed < 1);
   }
}