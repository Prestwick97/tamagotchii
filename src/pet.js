export class Pet {
    constructor(name, food, play, bath, discipline, potty, sleep, snuggles){
        this.name = name;
        this.food = food;
        this.play = play;
        this.bath = bath;
        this.discipline = discipline;
        this.potty = potty;
        this.sleep = sleep;
        this.snuggles = snuggles;
    }   

namePet(name) {
    this.name = name;
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

foodDecDog() {
    setInterval(() => {
        this.food--;
    }, 5000);
    if(this.food <= 0) {
        this.food = 10;
        this.play = 10;
        this.potty = 10;
        this.snuggles = 10;
        this.type = "cat";
        delete this.discipline;
        delete this.sleep;
        delete this.bath;
        // this.foodDecCat();
        return "Your dog is now a CAT"
    }
}

foodDecCat() {
    setInterval(() => {
        this.food--;
    }, 7000);
}

}