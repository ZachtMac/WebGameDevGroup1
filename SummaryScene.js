class SummaryScene extends Phaser.Scene {
    constructor() {
        super("summary");
    }

    create() {
        // Display summary text
        this.add.text(350, 300, 'Quiz Finished!', {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5);

        // Add a button to start a new quiz
        let quizButton = new RoundButton(this, 350, 400, 225, 90, 10, 0x483C32, 0xeeeeee, 'New Quiz', {
            fontFamily: 'Arial',
            fontSize: '24px',
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: 4,
            align: 'center',
            padding: { x: 10, y: 5 }
        });

        quizButton.on('pointerdown', () => {
            this.scene.start('bootGame'); // Restart the quiz
        });
    }
}
