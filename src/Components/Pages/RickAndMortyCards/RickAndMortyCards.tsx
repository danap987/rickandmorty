import { useEffect, useState } from "react";
import "./RickAndMortyCards.css";
import axios from "axios";
import { ResultModel, ShowModel } from "../../../MODELS/ShowModel";
import ShowCard from "../ShowCard/ShowCard";

function RickAndMortyCards(): JSX.Element {
    const [results, setResults] = useState<ResultModel[]>([]);
    const [filterCard, setFilterCard] = useState<string> (``);

    useEffect(() => {
        console.log(123);
        axios.get<ShowModel>('https://rickandmortyapi.com/api/character')
            .then(res => setResults(res.data.results))
            .catch(err => console.log(err));

    },[]);

    return (
        <div className="RickAndMortyCards">

<label>
      Pick a Genre:
      <select name="selectedGenre" defaultValue=" "  
          onChange={event => setFilterCard(event.target.value)}>
        <option value="">All</option>
        <option value="Alien">species-Alien</option>
        <option value="Human">species- Human</option>
        <option value="Unknown">species/status-Unknown</option>
        <option value="Alive">status-Alive</option>
        <option value="Dead">status-dead</option>
    
      </select>
    </label>
			{results.filter(f => f.species.includes(filterCard) || f.status.includes(filterCard) || filterCard === '').map(f=><ShowCard key={`mshow`+f.id} show={f}/>)}
        </div>
    );
}

export default RickAndMortyCards;
