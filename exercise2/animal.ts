export default class Animal {
	age: number;
	weight: number; //pounds
    gender: string;
    constructor(age?: number, weight?: number, gender?: string){
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
}