import Scale from './scale';

export default class AllPurposeScale implements Scale{
	weigh(object: any): number {
        return object.weight*0.453592;//converts to KG
	}
}