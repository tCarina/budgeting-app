import { Link } from "react-router-dom";
import "../styling/transaction.css";

const Transaction = ({ transaction, id }) => {
  return (
    <div className='transContainer'>
      <section className="singleTrans">
    <table>
      <Link to={`/transactions/${id}`}>
          <tbody>
            <tr>
              <td>{transaction.date}</td>
            </tr>
            <tr>
              <td>
                {" "}
                {transaction.name}
              </td>
            </tr>
            <tr>
              <td>{transaction.amount}</td>
            </tr>
          </tbody>
          </Link>
          </table>
      </section>
    </div>
  );
};

export default Transaction;
