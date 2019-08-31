import Color from './colorEnum';

export default class Vehicle{
    color: Color;
    doors: number;
    wheels: number;
    weight: number;//KG
    constructor(color?: Color, doors?: number, wheels?: number, weight?: number){
        this.color = color;
        this.doors = doors;
        this.weight = weight;
        this.wheels = wheels;
    }
}