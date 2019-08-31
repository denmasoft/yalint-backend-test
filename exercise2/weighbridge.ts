import Scale from './scale';
import Vehicle from './vehicle';

export default class Weighbridge implements Scale{
	
	weigh(object: Vehicle): number {
        return object.weight;//KG
	}
}