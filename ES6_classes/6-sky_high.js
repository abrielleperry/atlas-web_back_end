import Building from './5-building';

class SkyHighBuilding extends Building { // declares new class SkyHighBuilding that extends Building
  constructor(sqft, floors) {
    super(sqft); // calls constructor of parent class Building
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() { // allows external code to access the value of the _floors property
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
export default SkyHighBuilding;
