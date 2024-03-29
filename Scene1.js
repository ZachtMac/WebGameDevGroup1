class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
        this.fontLoaded = false;
    };
    
    

    preload() {
        this.load.image('background', 'assets/images/quizBackground.jpg');
        WebFont.load({
            custom: {
                families: ['Catfiles'],
                urls: ['http://localhost/assets/styles/font.css']
            },
            active: () => {
                this.fontLoaded = true;
                this.events.emit('fontloaded', true);
            }
        })
    };

    create() {
        this.add.image(0, 0, 'background').setOrigin(0);

        this.events.once('fontloaded', () => {
            this.loadText();
        });
        if (!this.fontLoaded) {
            console.warn('Loading...');
        }
    }

    loadText() {
        
        let titleText = this.add.text(120, 280, 'Plant Quiz!', { 
            fontFamily: 'Catfiles', 
            fontSize: '70px',
            fill: '#008000',
            stroke: '#000',
            strokeThickness: 4
        });
        


        let playButton = new RoundButton(this, 350, 480, 225, 90, 10, 0x483C32, 0xeeeeee, 'Play', {
            fontFamily: 'Catfiles',
            fontSize: '32px',
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: 4,
            align: 'center',
            padding: { x: 10, y: 5 }
        });

        playButton.on('pointerdown', () => this.scene.start('playGame'));
    }
}
