import { Route, Routes } from "react-router-dom";
import "./Router.css";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import RickAndMortyCards from "../../Pages/RickAndMortyCards/RickAndMortyCards";
import RickAndMortyTable from "../../Pages/RickAndMortyTable/RickAndMortyTable";
import P404 from "../../Pages/P404/P404";

function Router(): JSX.Element {
    return (
        <div className="Router">
			<Routes>
                <Route path="/" element={<App/>} />
                <Route index element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/rick-and-morty-c" element={<RickAndMortyCards/>} />
                <Route path="/rick-and-morty-t" element={<RickAndMortyTable/>} />
                <Route path="*" element={<P404/>} />
            </Routes>



        </div>
    );
}

export default Router;
