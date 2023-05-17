import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Menu.css";
import CustomLink from "../../CustomLink/CustomLink";


function Menu(): JSX.Element {
   
    return (
        <div className="Menu">
            

            <CustomLink to={"home"}>Home 🏘️</CustomLink>
            <CustomLink to={"about"}>About</CustomLink>
            <CustomLink to={"rick-and-morty-c"}>Rick and Morty cards</CustomLink>
            <CustomLink to={"rick-and-morty-t"}>Rick and Morty table</CustomLink>
        </div>
    );
}

export default Menu;