import { Link } from 'react-router-dom'

const Transaction = ({transaction, ID}) => {
    return(
        <div>
        <section className='singleTrans'>
            <Link to={`/transactions/${ID}`}>{transaction.name}</Link>
            {transaction.date} <br/>
            {transaction.amount}
        </section>
          </div>
    )
}

export default Transaction;