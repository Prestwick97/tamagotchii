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
        switch(this.type) {
            case ("dog"):
           let doggy = setInterval(() => {
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
                    clearInterval(doggy);
                    this.foodDecDog();
                    }
                }, 5000); 
                break;
            case ("cat"):
                let kitty = setInterval(() => {
                    this.food--;
                    if(this.food <= 0) {
                        this.food = 10;
                        this.bath = 10;
                        this.type = "fish";
                        delete this.play;
                        delete this.snuggles;
                        delete this.potty;
                        clearInterval(kitty);
                        this.foodDecDog();
                    }
                }, 7000);
                break;
            case ("fish"):
                let fishy = setInterval(() => {
                    this.food--;      
                    if(this.food <= 0) {
                    this.food = 10;
                    this.type = "plant";
                    delete this.bath;
                    clearInterval(fishy);
                    this.foodDecDog();
                    }
                }, 12000);
                break;
            case("plant"):
            let planty = setInterval(() => {
                this.food--;
                if(this.food <= 0){
                    this.food = 10;
                    this.type = "rock";
                    clearInterval(planty);
                    this.foodDecDog();
                }
            }, 8640000);
            break;
            case("rock"):
            let rocky = setInterval(() => {
                this.food--;
                if(this.food <= 0){
                    this.type = "ghost";
                    delete this.food;
                    clearInterval(rocky);
                    this.foodDecDog();
                }
            }, 864000000);  
            return "your dog is a rock now" ; 
            case("ghost"):
            return "Game over shame on you!";
        }
    }           
}