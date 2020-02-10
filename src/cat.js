import { Pet } from './../src/pet.js'

export class Cat extends Pet {
    constructor(name, food, play, potty, snuggles, type) {
        super(name);
        this.food = food;
        this.play = play;
        this.potty = potty;
        this.snuggles = snuggles;
        this.type = type;
    }

    newCat() {
        this.name = name;
        this.food = 10;
        this.play = 10;
        this.potty = 10;
        this.snuggles = 10;
        this.type = "cat";
    } 

    foodDec() {
        setInterval(() => {
            this.food--;
        }, 7000);
    }

}