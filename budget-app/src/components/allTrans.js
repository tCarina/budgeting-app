import Transaction from "./transaction";
import '../styling/allTrans.css'

const Transactions = ({ transactions, total }) => {
  return (
    <div className="allTrans">
      <p className='index'>Transaction Index</p>
      <p className='total'>Total: {total} </p>
          {transactions.map((transaction, id) => {
            return <Transaction key={id} transaction={transaction} id={id} />;
          })}
     
    </div>
  );
};

export default Transactions;
