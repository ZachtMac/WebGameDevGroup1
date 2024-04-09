class Scene3 extends Phaser.Scene {
    constructor() {
        super("Scene3");
    }

    create() {
        // Background for consistency
        this.add.image(0, 0, 'background').setOrigin(0);

        // Retrieve the score from the registry
        const score = this.registry.get('score');

        // Display the score
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, `Final Score: ${score}`, {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5);

        // Create a 'Restart Quiz' button
        let restartBtn = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Restart Quiz', {
            fontFamily: 'Arial',
            fontSize: '24px',
            color: '#ffffff',
            backgroundColor: '#0000ff',
            padding: { x: 20, y: 10 },
            align: 'center'
        })
        .setInteractive()
        .setOrigin(0.5);

        // Button interaction
        restartBtn.on('pointerdown', () => this.scene.start('bootGame')); // Restart the quiz
        restartBtn.on('pointerover', () => restartBtn.setStyle({ fill: '#ff0'}));
        restartBtn.on('pointerout', () => restartBtn.setStyle({ fill: '#ffffff'}));
    }
}
