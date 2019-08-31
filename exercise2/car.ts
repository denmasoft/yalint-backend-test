import Vehicle from './vehicle';
import Color from './colorEnum';
import SmartCarInterface from './smartInterface';
import Person from './person';

export default class Car extends Vehicle implements SmartCarInterface{
    constructor(color?: Color, doors?: number, wheels?: number, weight?: number){
        super(color, doors, wheels, weight);
    }
    sitInFrontSeats(persons: Person[]){
        return persons;
    }
    sitInBackSeats(everyone: any[]){
        return everyone;
    }
}