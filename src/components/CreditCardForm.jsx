import { useState } from "react";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardValidity, setCardValidity] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const cardNumberPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
  const regex = new RegExp(cardNumberPattern)
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log("isValidCardNumber? : ", regex.test(value));
    if (name === "cardNumber" && regex.test(value)) {
      //Iska matlab hua ki agar maine cardNumber type kia h to ye wala if block run hoga
      setCardNumber(value);
    }
    if (name === "cardValidity") {
      setCardValidity(value);
    }
    if (name === "cardCVV") {
      setCardCVV(value);
    }
  };

  return (
    <div className="container">
      <div>
        <h1> Card Number : {cardNumber}</h1>
        <h1> Card Validity : {cardValidity}</h1>
        <h1> Card CVV : {cardCVV}</h1>
      </div>
      <form className="w-25 mx-auto mt-5">
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">
            Card Number
          </label>
          <input
            onChange={handleInputChange}
            name="cardNumber"
            type="text"
            className="form-control"
            id="cardNumber"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="validity" className="form-label">
            Validity
          </label>
          <input
            type="text"
            name="cardValidity"
            onChange={handleInputChange}
            className="form-control"
            id="validity"
          />
        </div>
        <div className="mb-3 ">
          <label className="form-label" htmlFor="cardCVV">
            CVV
          </label>
          <input
            type="text"
            name="cardCVV"
            onChange={handleInputChange}
            className="form-control"
            id="cardCVV"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreditCardForm;
