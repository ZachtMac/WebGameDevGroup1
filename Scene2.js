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
    };
    create() {
        this.add.image(0, 0, 'background').setOrigin(0);
        this.quizPlants = getRandomPlants(10);
        this.currentPlant = this.quizPlants[0];

        this.add.text(400, 100, "Guess the plant:", {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5);

        // this.add.text(400, 150, this.currentPlant.name, {
        //     fontFamily: 'Arial',
        //     fontSize: '48px',
        //     color: '#ffffff'
        // }).setOrigin(0.5);

        
            this.nextButton = this.add.text(500, 600, 'Next Question',{
            fontFamily: `Arial`,
            fontSize: `24px`,
            color: `#ffffff`,
            backgroundColor: `#336699`,
            padding: {x: 10, y: 5},
            align: `center`
        });
        this.nextButton.setInteractive();
        this.nextButton.on(`pointerover`, () => {
            this.nextButton.setStyle({ backgroundColor: `#5588CC`});
        });
       this.nextButton.on(`pointerout`, () => {
            this.nextButton.setStyle({ backgroundColor: `#336699`})
        });

         //next button pressed
        this.nextButton.on(`pointerdown`, () =>{
        //remove first plant from array
        this.quizPlants.shift();

        //check if there are still questions left
        if(this.quizPlants.length > 0){
            this.currentPlant = this.quizPlants[0]; //set new question set
            //clear old question buttons and text
            this.questionText.destroy();
            this.answerButtons.forEach(text => text.destroy());
            this.updateQuestion();
        }
        else{
            //end quiz
        }
        });


    

        
        this.updateQuestion();
        
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
    handleAnswer(selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
            this.score++;
            console.log(`Correct! Score: ${this.score}`);
        } else {
            console.log(`Incorrect! Score: ${this.score}`);
        }

        // Proceed to the next question or end the quiz
        // Implement logic for this based on game flow
    }

    updateQuestion(){

        this.questionText = this.add.text(400, 150, this.currentPlant.name, {
            fontFamily: 'Arial',
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const buttonSpacing = 100;
        const buttonY = 300;
        this.currentPlant.possibleAnswers.forEach((answer, index) => {
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
            //change color on mouse hover
            button.on(`pointerover`, () => {
                button.setStyle({ backgroundColor: `#5588CC` });
            });
            //return to orgininal color when hover ends
            button.on(`pointerout`, () => {
                button.setStyle({ backgroundColor: `#336699` });
            });
            button.on('pointerdown', () => {
                this.handleAnswer(answer, this.currentPlant.name);
            });
            this.answerButtons.push(button); //store each button in a variable (to destroy later)

        });
    }

    
}