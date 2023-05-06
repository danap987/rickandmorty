import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            

            <Link to={"home"}>Home 🏘️</Link>
            <Link to={"about"}>About</Link>
            <Link to={"rick-and-morty-c"}>Rick and Morty cards</Link>
            <Link to={"rick-and-morty-t"}>Rick and Morty table</Link>
        </div>
    );
}

export default Menu;