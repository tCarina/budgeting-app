import { Link } from 'react-router-dom'
import '../styling/navBar.css'


const NavBar = () => {
    return (
        <div className='navContainer'>
        <nav>
            <p>Budget App</p>
            <div className='buttons'>
            <Link to='/transactions/new' className='redirect'>New Transaction</Link>
            <Link to='/transactions' className='redirect'>All Transactions</Link>
            </div>
        </nav>
        </div>
    )
}

export default NavBar; 