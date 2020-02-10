import { Pet } from './../src/animal.js';
import { Dog } from './../src/dog.js';
import { Cat } from './../src/cat.js';
import { Fish } from './../src/fish.js';
import { Plant } from './../src/plant.js';
import { Rock } from './../src/rock.js';
import { toExpression, tsImportEqualsDeclaration } from '@babel/types';


describe("Pet", ()=> {
    TestRunner("creates pet object with name and properties at full value", () => {
        pet = new Pet("Sparky");
        expect(pet).toEqual("You now have a healthy dog named Sparky");
    });
    
});