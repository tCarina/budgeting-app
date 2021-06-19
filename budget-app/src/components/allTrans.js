import Transaction from './transaction';

const Transactions = ({ transactions, ID }) => {

    return (
        <section className='allTrans'>
       {transactions.map((transaction, ID) => {
           return <Transaction key={ID} transaction={transaction} ID={ID} />
       })}
        </section>
    )
}

export default Transactions; 