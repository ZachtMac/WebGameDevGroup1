class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
        this.score = 0;
        this.quizPlants = [];
        this.currentPlant = null;
        this.questionText = null; //store question text in a variable
        this.answerButtons = []; //store buttons in a variable
        this.nextButton = null;
    }

    preload() {
        this.load.image('background', 'assets/images/quizBackground.jpg');
        this.load.image('rose', 'assets/images/rose.jpg');
        this.load.image('daisy', 'assets/images/daisy.jpg');
        this.load.image('tulip', 'assets/images/tulip.jpg');
        this.load.image('sunflower', 'assets/images/sunflower.jpg');
        this.load.image('lily', 'assets/images/lily.jpg');
        this.load.image('orchid', 'assets/images/orchid.jpg');
        this.load.image('daffodil', 'assets/images/daffodil.jpg');
        this.load.image('carnation', 'assets/images/carnation.jpg');
        this.load.image('hydrangea', 'assets/images/hydrangea.jpg');
        this.load.image('peony', 'assets/images/peony.jpg');
        this.load.image('azalea', 'assets/images/azalea.jpg');
        this.load.image('magnolia', 'assets/images/magnolia.jpg');
        this.load.image('fuchsia', 'assets/images/fuchsia.jpg');
        this.load.image('hibiscus', 'assets/images/hibiscus.jpg');
        this.load.image('poppy', 'assets/images/poppy.jpg');
        this.load.image('lavender', 'assets/images/lavender.jpg');
        this.load.image('snapdragon', 'assets/images/snapdragon.jpg');
        this.load.image('marigold', 'assets/images/marigold.jpg');
        this.load.image('iris', 'assets/images/iris.jpg');
        this.load.image('pansy', 'assets/images/pansy.jpg');
    };

    create() {
        this.add.image(0, 0, 'background').setOrigin(0);
        this.quizPlants = getRandomPlants(10);
        this.currentPlant = this.quizPlants[0];

        this.add.text(350, 100, "Guess the plant:", {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#002b04'
        }).setOrigin(0.5);

        this.add.image(350, 350, currentPlant.name.toLowerCase()).setScale(0.3);
        
        const buttonWidth = 200;
        const buttonSpacing = 250;
        const buttonYTop = 600
        const buttonYBottom = 650
        const buttonsPerRow = 2;
        const buttonStartX = 350 - buttonSpacing * (buttonsPerRow - 1) / 2;

        currentPlant.possibleAnswers.forEach((answer, index) => {
            const rowIndex = Math.floor(index / buttonsPerRow);
            const colIndex = index % buttonsPerRow;

            const buttonX = buttonStartX + colIndex * buttonSpacing;
            const buttonY = rowIndex === 0 ? buttonYTop : buttonYBottom;

            const button = this.add.text(buttonX, buttonY, answer, {
                fontFamily: 'Arial',
                fontSize: '24px',
                color: '#ffffff',
                backgroundColor: '#336699',
                padding: { x: 10, y: 5 },
                align: 'center',
                fixedWidth: buttonWidth
            }).setOrigin(0.5);

            button.clicked = false; //added so correct and incorrect answers are highlighted correctly
            button.setInteractive();

            button.on('pointerdown', () => {
                button.clicked = true; 
                this.handleAnswer(answer, this.currentPlant.name, button);
            });
            //change color on mouse hover
            button.on(`pointerover`, () => {
                if(!button.clicked){
                    button.setStyle({ backgroundColor: `#5588CC` });
                }
            });
            //return to orgininal color when hover ends
            button.on(`pointerout`, () => {
                if(!button.clicked){
                    button.setStyle({ backgroundColor: `#336699` });
                }
            });

            this.answerButtons.push(button); //store each button in a variable (to destroy later)

        });
    }

    
}