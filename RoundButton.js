/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class RoundButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, width, height, radius, fillColor, hoverColor, text, textStyle) {
        super(scene, x, y);
        
        this.background = scene.add.graphics();
        this.add(this.background);

        this.width = width;
        this.height = height;
        this.radius = radius;
        this.fillColor = fillColor;
        this.hoverColor = hoverColor;

        this.drawBackground();

        this.text = scene.add.text(0, 0, text, textStyle).setOrigin(0.5);
        this.add(this.text);

        this.setInteractive({ useHandCursor: true })
            .on('pointerover', () => this.onButtonHover())
            .on('pointerout', () => this.onButtonOut());

        scene.add.existing(this);
    }

    drawBackground() {
        this.background.clear();
        this.background.fillStyle(this.fillColor);
        this.background.fillRoundedRect(-this.width / 2, -this.height / 2, this.width, this.height, this.radius);
    }

    onButtonHover() {
        this.background.clear();
        this.background.fillStyle(this.hoverColor);
        this.background.fillRoundedRect(-this.width / 2, -this.height / 2, this.width, this.height, this.radius);
    }

    onButtonOut() {
        this.drawBackground();
    }
}