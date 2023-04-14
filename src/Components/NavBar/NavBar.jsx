import { NavLink } from "react-router-dom";

const navLinks = [
    {
        href:"home", name:"home",
    },
    {
        href:"tweets", name:"tweets"
    }
]


const NavBar = () => {
    return ( 
        <nav>
            {navLinks.map(({ href, name }) => <NavLink to={href} key={name}>{name}</NavLink>)}
        </nav>
     );
}
 
export default NavBar;