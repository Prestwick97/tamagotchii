import { Pet } from './../src/pet.js'

export class Dog extends Pet {
    constructor(name, food, play, bath, discipline, potty, sleep, snuggles, type) {
        super(name);
        this.food = food;
        this.play = play;
        this.bath = bath;
        this.discipline = discipline; 
        this.potty = potty;
        this.sleep = sleep;
        this.snuggles = snuggles;
        this.type = type;
    }

    newDog() {
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

    foodDec() {
        setInterval(() => {
            this.food--;
        }, 5000);
    }

    newCat() {

    }


}