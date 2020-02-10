import { Pet } from './../src/pet.js';

import { JestEnvironment } from '@jest/environment';
import { Cat } from './../src/cat.js';
// import { Fish } from './../src/fish.js';
// import { Plant } from './../src/plant.js';
// import { Rock } from './../src/rock.js';
// import { toExpression, tsImportEqualsDeclaration } from '@babel/types';


describe("Pet", ()=> {

    
});

describe("Sparky", () => {
    jest.useFakeTimers();
    let sparky;
    beforeEach(function() {
        sparky = new Pet("Sparky");
        sparky.newDog();
        sparky.namePet("Sparky");
    });
    afterEach(function() {
        jest.clearAllTimers();
    });

    test("creates dog object with name and properties at full value", () => {
        sparky.namePet("Sparky");
        expect(sparky.bath).toEqual(10);
        console.log(sparky);
        
    });
    test("food attribute reduces by 1 every 5 seconds", () => {
        sparky.foodDecDog();
        jest.advanceTimersByTime(10001);
        expect(sparky.food).toEqual(8);
    });
    test("food level increaeses back to 10 when user 'feeds' dog", () => {
       sparky.foodDecDog();
       jest.advanceTimersByTime(10001);
       sparky.feed();
       expect(sparky.food).toEqual(10);
    });
    test("if food property of Dog is reduced to 0, Dog turns into cat with properties at full value", () => {
        sparky.food = 0;
        sparky.foodDecDog();
        jest.advanceTimersByTime(50001);
        console.log(sparky);
        expect(sparky.type).toEqual("cat");
    });

});
