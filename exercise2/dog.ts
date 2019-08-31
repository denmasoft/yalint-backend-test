import Animal from './animal';
import Person from './person';

export default class Dog extends Animal{
	owner: Person;
    name: string;
    constructor(name?: string, age?: number, weight?: number, gender?: string){
        super(age, weight, gender);
        this.name = name;
        this.owner = null;
    }
}