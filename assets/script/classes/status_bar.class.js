class StatusBar extends DrawableObject {
   IMAGES = []
   IMAGES_HEALTHBAR = [
      'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
      'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
      'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
      'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
      'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
      'assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
   ]
   IMAGES_COINS = [
      'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
      'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
      'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
      'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
      'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
      'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
   ]
   IMAGES_SALZA = [
      'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
      'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
      'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
      'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
      'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
      'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
   ]
   name;
   percentage = 100;
   coinPercentage = 0;
   salzaPerzentage = 2;

   constructor(name) {
      super();
      this.width = 200;
      this.height = 60;
      this.x = 40;
      this.name = name;
      if (this.name == 'haelthBar'){
         this.IMAGES = this.IMAGES_HEALTHBAR;
         this.y = 0;
      } else if (this.name == 'salzaBar'){
         this.IMAGES = this.IMAGES_SALZA;
         this.y = 50;
      } else if (this.name == 'coinBar'){
         this.IMAGES = this.IMAGES_COINS;
         this.y = 100;
      }
      this.loadImages(this.IMAGES);
      if (this.name == 'haelthBar'){
         this.setPercentage(100, 0);
      } else if (this.name == 'salzaBar'){
         this.setPercentage(20, 1);
      } else if (this.name == 'coinBar'){
         this.setPercentage(0 , 2);
      }
   }

   setPercentage(percentage, key) {
      if (this.name == "haelthBar" && key == 0){
         this.percentage = percentage;
         let path = this.IMAGES[this.resolveImageIndex(percentage)];
         this.img = this.images[path];
      } else if (this.name == 'salzaBar' && key == 1){
         this.salzaPerzentage = percentage;
         let path = this.IMAGES[this.resolveImageIndex(percentage)];
         this.img = this.images[path];
      } else if (this.name == 'coinBar' && key == 2){
         this.coinPercentage = percentage;
         let path = this.IMAGES[this.resolveImageIndex(percentage)];
         this.img = this.images[path];
      }
   }

   resolveImageIndex(percentage) {
      if (percentage >= 100)
         return 5;
      else if (percentage >= 80)
         return 4
      else if (percentage >= 60)
         return 3
      else if (percentage >= 40)
         return 2
      else if (percentage >= 20)
         return 1
      else
         return 0
   }
}