import util from 'util'; // provides utility functions for formatting and printing debug messages

class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  [util.inspect.custom]() { // a symbol used to customize the output of console.log() for an object
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
