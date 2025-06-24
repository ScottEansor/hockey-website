import { Link } from "react-router-dom";

export default function NavLink({ to, children}){
    return <li className="nav-item">
        <Link to={to} className='nav-link'>{children}</Link>
    </li>
}