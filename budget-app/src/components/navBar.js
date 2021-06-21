import { Link } from 'react-router-dom'
import '../styling/navBar.css'


const NavBar = () => {
    return (
        <div className='navContainer'>
        <nav>
            <p>Budget App</p>
            <button><Link to='/transactions/new' className='newTransLink'>New Transaction</Link></button>
        </nav>
        </div>
    )
}

export default NavBar; 