import Transaction from "./transaction";
import '../styling/allTrans.css'

const Transactions = ({ transactions, total }) => {
  return (
    <div className="allTrans">
      <p className='index'>Transaction Index</p>
      <p className='total'>Total: {total} </p>
          {transactions.map((transaction, ID) => {
            return <Transaction key={ID} transaction={transaction} ID={ID} />;
          })}
     
    </div>
  );
};

export default Transactions;
