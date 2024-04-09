class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3'); // The key should match the string used in the scene array
    }

    create() {
        // Add a background image like in the other scenes, if needed
        this.add.image(0, 0, 'background').setOrigin(0);

        // Display the score from the global variable
        const scoreText = `Your Score: ${this.game.global.score}`;
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, scoreText, {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#000'
        }).setOrigin(0.5);

        // Add a 'Restart Game' button
        const restartButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Restart Game', {
            fontFamily: 'Arial',
            fontSize: '24px',
            color: '#fff',
            backgroundColor: '#5cb85c',
            padding: { x: 10, y: 5 },
            align: 'center'
        })
        .setInteractive()
        .setOrigin(0.5);

        restartButton.on('pointerdown', () => {
            this.scene.start('Scene1'); // Change this to the key of your first scene
        });

        restartButton.on('pointerover', () => {
            restartButton.setStyle({ fill: '#ff0' });
        });

        restartButton.on('pointerout', () => {
            restartButton.setStyle({ fill: '#fff' });
        });

        // If you are keeping the score in a global variable, ensure to reset it when restarting the game
        this.game.global.score = 0;
    }
}
