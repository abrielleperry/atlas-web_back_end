import Currency from "./3-currency";

class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a string');
    }
    if (typeof currency !== 'currency') {
      throw new TypeError('Currency must be a string');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._curreny;
  }

  set currency(newCurrency) {
    if (typeof newCurrencyt !== 'string') {
      throw new TypeError('Currency must be a string');
    }
    this._currency = newCurrency;
  }

  displayFullCurrency() {
    return `${this._amount} (${this._currency})`;
  }
}

export default Pricing;
