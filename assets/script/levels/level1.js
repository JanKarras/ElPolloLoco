let level1;
let level_length = 719 * 2 - 500;


function initLevel() {
    level1 = new Level(
        [
            //new Chicken(0),
            //new Chicken(1),
            //new Chicken(2),
            //new SmallChicken(0),
            new Endboss(3),
        ],
        [
            new Cloud()
        ],
        [
            new BackgroundObject("assets/img/5_background/layers/air.png", -719),
            new BackgroundObject("assets/img/5_background/layers/3_third_layer/2.png", -719),
            new BackgroundObject("assets/img/5_background/layers/2_second_layer/2.png", -719),
            new BackgroundObject("assets/img/5_background/layers/1_first_layer/2.png", -719),
            new BackgroundObject("assets/img/5_background/layers/air.png", 0),
            new BackgroundObject("assets/img/5_background/layers/3_third_layer/1.png", 0),
            new BackgroundObject("assets/img/5_background/layers/2_second_layer/1.png", 0),
            new BackgroundObject("assets/img/5_background/layers/1_first_layer/1.png", 0),
            new BackgroundObject("assets/img/5_background/layers/air.png", 719),
            new BackgroundObject("assets/img/5_background/layers/3_third_layer/2.png", 719),
            new BackgroundObject("assets/img/5_background/layers/2_second_layer/2.png", 719),
            new BackgroundObject("assets/img/5_background/layers/1_first_layer/2.png", 719),
            new BackgroundObject("assets/img/5_background/layers/air.png", 719 * 2),
            new BackgroundObject("assets/img/5_background/layers/3_third_layer/1.png", 719 * 2),
            new BackgroundObject("assets/img/5_background/layers/2_second_layer/1.png", 719 * 2),
            new BackgroundObject("assets/img/5_background/layers/1_first_layer/1.png", 719 * 2),
        ],
        [
            
        ]
    );
}
