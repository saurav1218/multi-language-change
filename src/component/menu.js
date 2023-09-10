import './menu.css';
import { Link } from 'react-router-dom';
const Menu = () =>{
    return(
        <div className='menu'>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Page</Link>
        </div>
    )
}
export default Menu;