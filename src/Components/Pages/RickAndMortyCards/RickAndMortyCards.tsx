import { useEffect, useState } from "react";
import "./RickAndMortyCards.css";
import axios from "axios";
import { ResultModel, ShowModel } from "../../../MODELS/ShowModel";
import ShowCard from "../ShowCard/ShowCard";

function RickAndMortyCards(): JSX.Element {
    const [results, setResults] = useState<ResultModel[]>([]);

    useEffect(() => {
        console.log(123);
        axios.get<ShowModel>('https://rickandmortyapi.com/api/character')
            .then(res => setResults(res.data.results))
            .catch(err => console.log(err));

    },[]);

    return (
        <div className="RickAndMortyCards">
			{results.map(m=><ShowCard key={`mshow`+m.id} show={m}/>)}
        </div>
    );
}

export default RickAndMortyCards;
