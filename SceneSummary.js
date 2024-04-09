class SceneSummary extends Phaser.Scene {
    constructor() {
        super("quizSummary");
    }

    init(data) {
        this.score = data.score; // Data passed from Scene2
    }

    preload() {
        // Preload any additional assets for the summary screen if necessary
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0);
        
        this.add.text(this.cameras.main.centerX, 200, 'Quiz Summary', {
            fontFamily: 'Arial',
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(this.cameras.main.centerX, 300, `Your Score: ${this.score}`, {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5);

        let newQuizButton = this.add.text(this.cameras.main.centerX, 400, 'New Quiz', {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff',
            backgroundColor: '#228B22',
            padding: { x: 20, y: 10 },
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        newQuizButton.on('pointerdown', () => {
            this.scene.start('bootGame'); // This will restart the game from Scene1
        });

        // Optional: Add hover effect for the button
        newQuizButton.on('pointerover', () => {
            newQuizButton.setStyle({ fill: '#16a085' });
        });

        newQuizButton.on('pointerout', () => {
            newQuizButton.setStyle({ fill: '#ffffff' });
        });
    }
}
