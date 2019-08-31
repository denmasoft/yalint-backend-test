import Person from "./person";
import Dog from "./dog";
import Car from "./car";
import Color from "./colorEnum";
import AllPurposeScale from "./AllPurposeScale";
import Weighbridge from "./weighbridge";

/**
 * Exercise 2
 *
 * Please render the given scenario into code.
 *
 * - A Person named Josh(26 years old, 120 pounds, male) is the owner of his Dog Timmy(5 years, 15 pounds, male).
 * - Josh is entering his Vehicle, a Car(4 wheels, red, Smart, 3 doors), in the front seat. He is putting his Dog in the back of the car, as front seats are only to be used by Humans.
 * - Josh takes his Car to a Weighbridge, a special Scale that can only be used by Vehicles. Tim and Josh stay in the Car, the Scale displays 2500KG.
 * - After weighting the Car, including them being passenger, Josh decides to weight himself. Since the weightbridge can only be used by Vehicles he decides to go for the "all purpose" Scale next to it. The Scale displays the weight in KG.
 * - He is also weighting his Dog.
 *
 */

export default class Exercise2 {
    constructor() {
        this.run();
    }

    public run(): void {
		let person = new Person("Josh", 26, 120, 'm');
		let dog = new Dog("Timmy", 5, 15, "m");
		dog.owner = person;
		person.pets.push(dog);
		let vehicle = new Car(Color.Red, 3, 4);
		vehicle.sitInBackSeats([dog]);
		vehicle.sitInFrontSeats([person]);
		let allPurposeScale = new AllPurposeScale();
		allPurposeScale.weigh(person);
		allPurposeScale.weigh(dog);
		let weightbridge = new Weighbridge();
		weightbridge.weigh(vehicle);
	}
}