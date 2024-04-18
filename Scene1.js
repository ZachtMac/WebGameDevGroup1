class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
        this.fontLoaded = false;
    }
    
    
    preload() {
        var host = location.hostname
        this.load.image('background', 'assets/images/quizBackground.jpg');
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

        //this.events.once('fontloaded', () => {
            this.loadText();
        //});
        if (!this.fontLoaded) {
            console.warn('Loading...');
        }
        this.loadText();

        this.loadGeoLocation();
    }

    loadText() {
        
        let titleText = this.add.text(120, 280, 'Plant Quiz!', { 
            fontFamily: 'Arial', 
            fontSize: '70px',
            fill: '#008000',
            stroke: '#000',
            strokeThickness: 4
        });
        


        let playButton = new RoundButton(this, 350, 480, 225, 90, 10, 0x483C32, 0xeeeeee, 'Play', {
            fontFamily: 'Arial',
            fontSize: '32px',
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: 4,
            align: 'center',
            padding: { x: 10, y: 5 }
        });

        playButton.on('pointerdown', () => this.scene.start('playGame'));
    }

    async getUserLocation() {
        return new Promise((resolve, reject) => {
            if ("geolocation" in navigator) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  resolve(position.coords);
                },
                (error) => {
                  reject(new Error('Geolocation error: ' + error.message));
                }
              );
            } else {
              reject(new Error("Geolocation not available"));
            }
          });
      }

    async loadGeoLocation() {
        try {
            // Display loading text
            const loadingText = this.add.text(100, 650, 'Loading User Info...', {
                fontFamily: 'Catfiles',
                fontSize: '24px',
                fill: '#ffffff',
                stroke: '#000',
                strokeThickness: 2
            });
    
            // Fetch user's geolocation
            const coords = await this.getUserLocation();
            if (!coords) {
                throw new Error('Geolocation not available');
            }
            const weatherData = await this.getWeather(coords.latitude, coords.longitude);
    
            // Remove loading text once API call is completed
            loadingText.destroy();
    
            // Display welcome message with weather information
            const welcomeText = `Welcome Gardener!\n\nCurrent Temperature: ${weatherData.current.temperature_2m}°F\nFeels Like: ${weatherData.current.apparent_temperature}°F\nPrecipitation: ${weatherData.current.precipitation} inch/s\nCloud Cover: ${weatherData.current.cloud_cover}%`;
            this.add.text(100, 650, welcomeText, {
                fontFamily: 'Catfiles',
                fontSize: '24px',
                fill: '#ffffff',
                stroke: '#000',
                strokeThickness: 2
            });
        } catch (error) {
            console.error('Error loading geolocation and weather data:', error);
        }
    }
      
    async getWeather(latitude, longitude) {
        try {
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,is_day,precipitation,cloud_cover&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York`;
        
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();

            return data;
          } catch (error) {
            console.error('There was a problem fetching the weather data:', error);
            throw error;
          }
      }


}
