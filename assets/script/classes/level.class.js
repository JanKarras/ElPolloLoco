class Level{
    enemies
    clouds
    backgroundObjects
    level_end_X = 719* 3 - 200;

    constructor(enemies, clouds, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}