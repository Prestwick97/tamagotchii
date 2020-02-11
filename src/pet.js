export class Pet {
    constructor(name){
        this.name = name;
        this.food = 10;
        this.play = 10;
        this.bath = 10;
        this.discipline = 10;
        this.potty = 10;
        this.sleep = 10;
        this.snuggles = 10;
        this.type = "dog";
    }   

    feed() {
        this.food = 10;
    }

    playWith() {
        this.play = 10;
    }

    bathe() {
        this.bath = 10;
    }

    train() {
        this.discipline = 10;
    }

    waste() {
        this.potty = 10;
    }

    rest() {
        this.sleep = 10;
    }

    love() {
        this.snuggles = 10;
    }

    foodDecDog() {
        switch(true) {
            case (this.type === "dog"):
                setInterval(() => {
                    this.food--;       
                    if(this.food <= 0) {
                    this.food = 10;
                    this.play = 10;
                    this.potty = 10;
                    this.snuggles = 10;
                    this.type = "cat";
                    delete this.discipline;
                    delete this.sleep;
                    delete this.bath;
                    clearInterval(this);
                    this.foodDecDog();
                    }
                }, 5001);
            case (this.type === "cat"):
                setInterval(() => {
                    this.food--;
                    if(this.food <= 0) {
                        this.food = 10;
                        this.bath = 10;
                        this.type = "fish"
                        delete this.play;
                        delete this.snuggles;
                        delete this.potty;
                    }
                }, 7000);
            // case (this.type = "fish"):
            //     setInterval(() => {
            //         this.food--;
            //     }, 7000);
            //     if(this.food <= 0) {
            //         this.food = 10;
            //         this.bath = 10;
            //         this.type = "fish"
            //         delete this.play;
            //         delete this.snuggles;
            //         delete this.potty;
            //     }
        }           
    
    }
}