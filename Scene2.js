/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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
        this.add.image(0, 0, 'background').setOrigin(0);
        this.quizPlants = getRandomPlants(10);
        this.currentPlant = this.quizPlants[0];
        this.registry.set('score', 0);

        this.add.text(350, 100, "Guess the plant:", {
            fontFamily: 'Catfiles',
            fontSize: '45px',
            fill: '#008000',
            stroke: '#000',
            strokeThickness: 3
        }).setOrigin(0.5);

        this.updateQuestion();
    }
    
    handleAnswer(selectedAnswer, correctAnswer, button) {
        let correct = selectedAnswer === correctAnswer;
        if (correct) {
            let score = this.registry.get('score');
            this.registry.set('score', ++score);
        }

        button.setStyle({ backgroundColor: correct ? `#008000` : `#FF0000` }); // Green for correct, red for incorrect
        this.answerButtons.forEach(btn => btn.disableInteractive());

        if(correct) {
            console.log(`Correct! Score: ${this.registry.get('score')}`);
        } else {
            console.log(`Incorrect. The correct answer was ${correctAnswer}.`);
        }

        this.nextButton.setInteractive(); // enable next button
    }


    updateQuestion(){
        //clear the array
        this.answerButtons = [];
        const buttonWidth = 160;
        const buttonSpacing = 170;
        const buttonY = 610;

        //clear previous image and add new question image
        if(this.plantImage != null){
            this.plantImage.destroy();
            this.nextButton.destroy();
        } 
        this.plantImage = this.add.image(350, 350, this.currentPlant.name.toLowerCase()).setScale(0.3);
        
        
        this.currentPlant.possibleAnswers.forEach((answer, index) => {
            const buttonX = 100 + index * buttonSpacing;
            const button = this.add.text(buttonX, buttonY, answer, {
                fontFamily: 'Catfiles',
                fontSize: '20px',
                color: '#ffffff',
                stroke: '#000',
                strokeThickness: 2,
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

            this.nextButton = this.add.text(240, 820, 'Next Question',{
                fontFamily: `Catfiles`,
                fontSize: `24px`,
                color: `#ffffff`,
                backgroundColor: `#336699`,
                padding: {x: 10, y: 5},
                align: `center`
            });
            this.nextButton.disableInteractive(); //disable next button until answer selected

            this.nextButton.on(`pointerover`, () => {
                this.nextButton.setStyle({ backgroundColor: `#5588CC`});
            });                                                                 //hover functionality
            this.nextButton.on(`pointerout`, () => {
                this.nextButton.setStyle({ backgroundColor: `#336699`})
            });

            

            

            this.nextButton.on(`pointerdown`, () =>{
                //remove first plant from array
                this.quizPlants.shift();
        
                //check if there are still questions left
                if(this.quizPlants.length > 0){
                    this.currentPlant = this.quizPlants[0]; //load new question set
                    //clear old question buttons and text
                    this.answerButtons.forEach(text => text.destroy());
                    this.updateQuestion();
                }
                else{
                    //end quiz
                    this.scene.start('Scene3');
                }
                });

        
    }  
}