class SummaryScene extends Phaser.Scene {
    constructor() {
        super({ key: 'summaryGame' });
    }

    create() {
        // For debugging purposes, start with an empty scene.
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Summary Scene', { font: '16px Arial', fill: '#ffffff' }).setOrigin(0.5);
    }
}
