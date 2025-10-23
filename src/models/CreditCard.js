class CreditCard {
  constructor({ cardNumber, cardHolder, expirationDate, cvv, email }) {
    this.cardNumber = cardNumber; // string, único
    this.cardHolder = cardHolder; // string
    this.expirationDate = expirationDate; // string
    this.cvv = cvv; // string
    this.email = email; // string
  }
}

export default CreditCard;