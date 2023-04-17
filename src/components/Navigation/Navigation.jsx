import { NavLink } from "react-router-dom"
import './Navigation.css';

const Navigation = () => (
    <div className="navigation">
        <NavLink className="nav-item" to="/">Screen 1</NavLink>
        <NavLink className="nav-item" to="/screen-2">Screen 2</NavLink>
    </div>
)

export default Navigation;
