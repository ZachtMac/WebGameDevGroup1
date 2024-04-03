class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {
        this.load.image('background', 'assets/images/quizBackground.jpg');
    };

    create() {
        this.add.image(0, 0, 'background').setOrigin(0);
        let quizPlants = getRandomPlants(10);
        const currentPlant = quizPlants[0];

        this.add.text(400, 100, "Guess the plant:", {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(400, 150, currentPlant.name, {
            fontFamily: 'Arial',
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const buttonSpacing = 100;
        const buttonY = 300;
        currentPlant.possibleAnswers.forEach((answer, index) => {
            const buttonX = 200 + index * buttonSpacing;
            const button = this.add.text(buttonX, buttonY, answer, {
                fontFamily: 'Arial',
                fontSize: '24px',
                color: '#ffffff',
                backgroundColor: '#336699',
                padding: { x: 10, y: 5 },
                align: 'center'
            }).setOrigin(0.5);
            
            button.setInteractive();
            button.on('pointerdown', () => {
                this.handleAnswer(answer, currentPlant.name);
            });
        });
    }

    handleAnswer(selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
            console.log("Correct!");
        } else {
            console.log("Incorrect!");
        }

        // Proceed to the next question or end the quiz
        // Implement logic for this based on game flow
    }

    
}