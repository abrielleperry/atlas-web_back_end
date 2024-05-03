class Airport {
  constructor(name, code) {
    this._name = name; // 'this' automatically refers to the new object instance
    this._code = code;
  }

  toString() {
    return `${this._name} (${this._code})`;
  }
}

export default Airport;
