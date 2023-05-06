import { useEffect, useState } from "react";
import "./RickAndMortyTable.css";
import { ResultModel, ShowModel } from "../../../MODELS/ShowModel";
import axios from "axios";

function RickAndMortyTable(): JSX.Element {

    const tableHeaders = [ "ID", "Name","Status", "Species", "image"];

    const [results, setResults] = useState<ResultModel[]>([]);

    const [filterSow, setFilterShow]= useState<string> (``);

    useEffect(() => {
        console.log(123);
        axios.get<ShowModel>('https://rickandmortyapi.com/api/character')
            .then(res => setResults(res.data.results))
            .catch(err => console.log(err));

    },[]);

    return (
        <div className="RickAndMortyTable displayList">

<input type="search"  placeholder="search by status or species"
          onChange={event => setFilterShow(event.target.value)}></input>
			

            <table>
                <thead>
                    <tr>
                       
                        {tableHeaders.map(str => <th key={str}>{str}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {/* mapping from remote server the tables data: */}
                    {results.filter(f => f.species.includes(filterSow) || f.status.includes(filterSow) || filterSow === '').map(m =>
                        <tr key={'m'+m.id}>
                            <td>{m.id}</td>
                            <td>{m.name}</td>
                            <td>{m.status}</td>
                            <td>{m.species}</td>
                           
                            <td>
                                <img src={m.image} alt={m.name} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
}

export default RickAndMortyTable;
