// import { Pet } from './../src/pet.js';
import { Dog } from './../src/dog.js';
import { JestEnvironment } from '@jest/environment';
// import { Cat } from './../src/cat.js';
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
        sparky = new Dog("Sparky");
        sparky.newDog();
    });
    afterEach(function() {
        jest.clearAllTimers();
    });

    test("creates dog object with name and properties at full value", () => {
        sparky.namePet("Sparky");
        expect(pet.bath).toEqual(10);
        console.log(sparky);
        
    });
    test("food attribute reduces by 1 every 5 seconds", () => {
        Jest.advanceTimersByTime(10001);
        expect(sparky.food).toEqual(8);
    });
});
