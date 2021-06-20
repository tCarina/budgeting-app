import Transaction from "./transaction";
import '../styling/allTrans.css'

const Transactions = ({ transactions, total }) => {
  return (
    <div className="allTrans">
   
          {transactions.map((transaction, ID) => {
            return <Transaction key={ID} transaction={transaction} ID={ID} />;
          })}
      <p className='total'>Total: {total} </p>
     
    </div>
  );
};

export default Transactions;
