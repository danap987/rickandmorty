import { Outlet } from "react-router-dom";
import "./Main.css";
import Router from "../Router/Router";

function Main(): JSX.Element {
    return (
        <div className="Main">
          
            <Router />
            <Outlet />
        </div>
    );
}

export default Main;