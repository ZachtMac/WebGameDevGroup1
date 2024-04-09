class SummaryScene extends Phaser.Scene {
    constructor() {
        super("summaryGame");
    }

    create() {
        // Background
        this.add.image(0, 0, 'background').setOrigin(0);

        // Display Score
        const scoreText = `Your Score: ${this.sys.game.global.score}`;
        this.add.text(350, 450, scoreText, {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#000'
        }).setOrigin(0.5);

        // New Quiz Button
        const newQuizButton = this.add.text(350, 550, 'New Quiz', {
            fontFamily: 'Arial',
            fontSize: '28px',
            color: '#fff',
            backgroundColor: '#5cb85c',
            padding: { x: 10, y: 5 },
            align: 'center'
        }).setInteractive().setOrigin(0.5);

        newQuizButton.on('pointerdown', () => {
            // Reset score or any other global variables if needed
            this.sys.game.global.score = 0;
            this.scene.start('bootGame'); // Change to your initial scene to restart the game
        });

        newQuizButton.on('pointerover', () => {
            newQuizButton.setStyle({ backgroundColor: '#77d977' });
        });

        newQuizButton.on('pointerout', () => {
            newQuizButton.setStyle({ backgroundColor: '#5cb85c' });
        });
    }
}
