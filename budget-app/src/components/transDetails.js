import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

import "../styling/transactionDetails.css";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransDetails = ({ deleteTrans }) => {
  let { id } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({});

  useEffect(() => {
  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${id}`);
      setTransaction(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  fetchTransaction();
}, []);

  const handleDelete = () => {
    deleteTrans(id);
    history.push("/transactions");
  };

  return (
    <section className="detailContainer">
      <div className="TransDetails">
        <h3>{transaction.name}</h3>
        <table className="singleTransTable">
          <tbody>
            <tr>
              <h5>Date: {transaction.date}</h5>
            </tr>
            <tr>
              <h5>Amount: {transaction.amount}</h5>
            </tr>
            <tr>
              <h5>From: {transaction.from}</h5>
            </tr>
          </tbody>
        </table>
           <button className='detailButton'>
          <Link to={`/transactions/${id}/edit`} className='editLink'>
          Edit
          </Link>
           </button>
        
        <button className="detailButton" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default TransDetails;
