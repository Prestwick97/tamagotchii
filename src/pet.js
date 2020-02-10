export class Pet {
    constructor(name){
        this.name = name;
        this.food = food;
        this.play = play;
        this.bath = bath;
        this.discipline = discipline;
        this.potty = potty;
        this.sleep = sleep;
        this.snuggles = snuggles;
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
}