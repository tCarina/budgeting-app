import Transaction from './transaction';

const Transactions = ({ transactions, ID, total }) => {

    return (
        <section className='allTrans'>
       {transactions.map((transaction, ID) => {
           return <Transaction key={ID} transaction={transaction} ID={ID} />
       })}
       <h4>Total: {total} </h4>
        </section>
    )
}

export default Transactions; 