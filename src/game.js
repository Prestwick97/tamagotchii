import { Pet } from "./pet";

export class Game {
  constructor(pet){
    this.pet = pet;
  }

  startGame() {
    this.pet = new Pet(name);
    this.pet.foodDecDog();
  }   
}