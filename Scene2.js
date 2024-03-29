class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {
        this.load.image('background', 'assets/images/quizBackground.jpg');
    };

    create() {
        this.add.image(0, 0, 'background').setOrigin(0);
    }
}