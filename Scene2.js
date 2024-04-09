class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
        this.score = 0;
        this.quizPlants = [];
        this.currentPlant = null;
        this.questionText = null; //store question text in a variable
        this.answerButtons = []; //store buttons in a variable
        this.nextButton = null;
        this.plantImage = null;
    }

    preload() {
        this.load.image('background', 'assets/images/quizBackground.jpg');
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



        // this.add.text(400, 150, this.currentPlant.name, {
        //     fontFamily: 'Arial',
        //     fontSize: '48px',
        //     color: '#ffffff'
        // }).setOrigin(0.5);

        this.plantImage = this.add.image(350, 350, this.currentPlant.name.toLowerCase()).setScale(0.3);
        this.updateQuestion();

            this.nextButton = this.add.text(500, 600, 'Next Question',{
            fontFamily: `Arial`,
            fontSize: `24px`,
            color: `#ffffff`,
            backgroundColor: `#336699`,
            padding: {x: 10, y: 5},
            align: `center`
        });

        this.nextButton.disableInteractive(); //disable next button until answer selected

        //change color on mouse hover
        this.nextButton.on(`pointerover`, () => {
            this.nextButton.setStyle({ backgroundColor: `#5588CC`});
        });                                                                 //hover functionality
       this.nextButton.on(`pointerout`, () => {
            this.nextButton.setStyle({ backgroundColor: `#336699`})
        });

         //next button pressed
        this.nextButton.on(`pointerdown`, () =>{
        //remove first plant from array
        this.quizPlants.shift();

        //check if there are still questions left
        if(this.quizPlants.length > 0){
            this.currentPlant = this.quizPlants[0]; //load new question set
            //clear old question buttons and text
            this.questionText.destroy();
            this.answerButtons.forEach(text => text.destroy());
            this.updateQuestion();
        }
        else{
            this.scene.start('quizSummary', { score: this.score });
}
        });

        
    

        
        
        // const buttonSpacing = 100;
        // const buttonY = 300;
        // this.currentPlant.possibleAnswers.forEach((answer, index) => {
        //     const buttonX = 200 + index * buttonSpacing;
        //     const button = this.add.text(buttonX, buttonY, answer, {
        //         fontFamily: 'Arial',
        //         fontSize: '24px',
        //         color: '#ffffff',
        //         backgroundColor: '#336699',
        //         padding: { x: 10, y: 5 },
        //         align: 'center'
        //     }).setOrigin(0.5);
            
        //     button.setInteractive();
        //     //change color on mouse hover
        //     button.on(`pointerover`, () => {
        //         button.setStyle({ backgroundColor: `#5588CC` });
        //     });
        //     //return to orgininal color when hover ends
        //     button.on(`pointerout`, () => {
        //         button.setStyle({ backgroundColor: `#336699` });
        //     });
        //     button.on('pointerdown', () => {
        //         this.handleAnswer(answer, this.currentPlant.name);
        //     });
        // });
    }
    handleAnswer(selectedAnswer, correctAnswer, button) {
        if (selectedAnswer === correctAnswer) {
            this.score++;
            console.log(`Correct! Score: ${this.score}`);
            button.setStyle({ backgroundColor: `#008000`}); // make button green
            this.nextButton.setInteractive();

        } else {
            console.log(`Incorrect! Score: ${this.score}`);
            button.setStyle({ backgroundColor: `#FF0000` }); //make button red
            //find correct answer button and make it green
            this.answerButtons.forEach((answerButton) =>{
                if(answerButton.text === correctAnswer) {
                    answerButton.setStyle({ backgroundColor: `#008000` })
                    this.nextButton.setInteractive();
                }
            });
        }



        //disable buttons until next question
        this.answerButtons.forEach((answerButton) =>{
            answerButton.clicked = false;
            answerButton.disableInteractive();
        });

        // Proceed to the next question or end the quiz
        // Implement logic for this based on game flow
    }

    updateQuestion(){
        //clear the array
        this.answerButtons = [];
        this.questionText = this.add.text(400, 150, this.currentPlant.name, {
            fontFamily: 'Arial',
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);
        this.plantImage.destroy(); //clear previous image

        const buttonWidth = 200;
        const buttonSpacing = 250;
        const buttonYTop = 600
        const buttonYBottom = 650
        const buttonsPerRow = 2;
        const buttonStartX = 350 - buttonSpacing * (buttonsPerRow - 1) / 2;
        const buttonY = 300;

        this.plantImage = this.add.image(350, 350, this.currentPlant.name.toLowerCase()).setScale(0.3);
        
        this.currentPlant.possibleAnswers.forEach((answer, index) => {
            const buttonX = 200 + index * buttonSpacing;
            const button = this.add.text(buttonX, buttonY, answer, {
                fontFamily: 'Arial',
                fontSize: '24px',
                color: '#ffffff',
                backgroundColor: '#336699',
                padding: { x: 10, y: 5 },
                align: 'center',
                fixedWidth: buttonWidth
            }).setOrigin(0.5);

            this.currentPlant.possibleAnswers.forEach((answer, index =>{
                const rowIndex = Math.floor(index / buttonsPerRow);
                const colIndex = index % buttonsPerRow;
                const buttonX = buttonStartX + colIndex * buttonSpacing;
                const buttonY = rowIndex === 0 ? buttonYTop : buttonYBottom;
            }));
            

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