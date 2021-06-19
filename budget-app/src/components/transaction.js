import { Link } from 'react-router-dom'

const Transaction = ({transaction, ID}) => {
    return(
        <section className='singleTrans'>
            <Link to={`/transactions/${ID}`}>{transaction.name}</Link>
            
        </section>
    )
}

export default Transaction;