import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <h3>Budgeting App</h3>
            <Link to='/transactions'>Transactions</Link>
            <Link to='/transactions/new'>New Transaction</Link>
        </nav>
    )
}

export default NavBar; 