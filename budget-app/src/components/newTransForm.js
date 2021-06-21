import { useState } from "react";
import { withRouter } from "react-router-dom";
import "../styling/newForm.css";

const NewTransForm = ({ addTrans, history }) => {
  const [transaction, setTransaction] = useState({
    name: "",
    date: "",
    amount: 0,
    from: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTrans(transaction);
    history.push("/transactions");
  };

  return (
    <section className="formContainer">
      <h1>Add A New Item</h1>
      <section className="form" onSubmit={handleSubmit}>
        <form>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            value={transaction.name}
            required
            onChange={handleTextChange}
          />

          <label htmlFor="date">Date: </label>
          <input
            type="date"
            placeholder="mm-dd-yyy"
            id="date"
            value={transaction.date}
            required
            onChange={handleTextChange}
          />

          <label htmlFor="amount">Amount: </label>
          <input
            id="amount"
            value={transaction.amount}
            onChange={handleTextChange}
          />

          <label htmlFor="from" id="from">
            From:{" "}
          </label>
          <input
            id="from"
            value={transaction.from}
            required
            onChange={handleTextChange}
          />
          <div className='buttonContainer'>
          <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default withRouter(NewTransForm);
