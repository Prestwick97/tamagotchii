import { Pet } from './../src/pet.js';

import { JestEnvironment } from '@jest/environment';
import { Cat } from './../src/cat.js';
// import { Fish } from './../src/fish.js';
// import { Plant } from './../src/plant.js';
// import { Rock } from './../src/rock.js';
// import { toExpression, tsImportEqualsDeclaration } from '@babel/types';



describe("Sparky", () => {
    jest.useFakeTimers();
    let sparky;
    beforeEach(function() {
        sparky = new Pet("Sparky");
    });
    afterEach(function() {
        jest.clearAllTimers();
    });

    test("creates dog object with name and properties at full value", () => {
        expect(sparky.bath).toEqual(10);
        // console.log(sparky);
        
    });
    test("food attribute reduces by 1 every 5 seconds", () => {
        sparky.foodDecDog();
        jest.advanceTimersByTime(10000);
        expect(sparky.food).toEqual(8);
        console.log(sparky);
    });
    test("food level increaeses back to 10 when user 'feeds' dog", () => {
       sparky.foodDecDog();
       jest.advanceTimersByTime(1000);
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
    test("if food property reduces to zero for type cat, cat turns into a fishwith properties at full value", () => {
        sparky.food = 0;
        sparky.foodDecDog();
        jest.advanceTimersByTime(50001);
        sparky.food = 0;
        jest.advanceTimersByTime(70001);
        expect(sparky.type).toEqual("fish");
        // console.log(sparky); // now a fish
    });

});
