class Scene3 extends Phaser.Scene {
    constructor() {
        super("Scene3");
    }

    preload(){
        WebFont.load({
            custom: {
                families: ['Catfiles'],
                urls: [`./assets/styles/font.css`]
            },
            active: () => {
                this.fontLoaded = true;
                this.events.emit('fontloaded', true);
            }
        });
    }

    create() {
        // Background for consistency
        this.add.image(0, 0, 'background').setOrigin(0);

        // Retrieve the score from the registry
        const score = this.registry.get('score');

        // Display the score
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, `Final Score: ${score}`, {
            fontFamily: 'Catfiles',
            fontSize: '48px',
            color: '#ffffff',
            stroke: '#000',
            strokeThickness: 3
        }).setOrigin(0.5);

        let restartBtn = new RoundButton(this, 350, 590, 280, 130, 10, 0x483C32, 0xeeeeee, 'Restart Quiz!', {
            fontFamily: 'Catfiles',
            fontSize: '32px',
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: 4,
            align: 'center',
            padding: { x: 10, y: 5 }
        });

        // Button interaction
        restartBtn.on('pointerdown', () => this.scene.start('bootGame')); // Restart the quiz
    }
}
