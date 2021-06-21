import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'


import { apiURL } from '../util/apiURL'
const API = apiURL()

const TransDetails = ({}) => {
    let { ID } = useParams()
    let history = useHistory()
    const [transaction, setTransaction] = useState({})
    
    const fetchTransaction = async () => {
    try {
      let res = await axios.get(`${API}/transactions/${ID}`)  
        setTransaction(res.data)
    } catch (err){
        console.log(err);
    }
}

useEffect(() => {
    fetchTransaction()
}, [])

return(
    <section className='detailContainer'>
        <div className='TransDetails'>
        <h3>{transaction.name}</h3>
        <h5>Date: {transaction.date}</h5>
        <h5>Amount: {transaction.amount}</h5>
        <h5>From: {transaction.from}</h5>
        </div>
    </section>
)

}

export default TransDetails;