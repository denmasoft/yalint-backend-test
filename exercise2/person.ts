import Animal from './animal';

export default class Person{
	name: string;
	age: number;
	weight: number; //pounds
    gender: string;
    pets: Animal[];
    constructor(name?: string, age?:number, weight?: number, gender?: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.pets = [];
    }
}