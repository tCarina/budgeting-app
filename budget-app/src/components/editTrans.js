import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const EditTransaction = ({ updateTrans }) => {
  let { id } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    name: "",
    date: "",
    amount: 0,
    from: "",
  });

  const fetchTransaction = async () => {
    const res = await axios.get(`${API}/transactions/${id}`);
    setTransaction(res.data);
  };
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };
  useEffect(() => {
    fetchTransaction();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateTrans(transaction, id);
    history.push(`/transactions/${id}`);
  };

  return (
    <section className="formContainer">
      <h1>Edit This Transaction</h1>
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
          <div className="buttonContainer">
            <button type="submit" className='submitButton'>Submit</button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default EditTransaction;
