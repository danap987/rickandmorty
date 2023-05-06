import { ResultModel } from "../../../MODELS/ShowModel";
import "./ShowCard.css";

interface ShowCardProps
{show: ResultModel;}

function ShowCard(props:ShowCardProps): JSX.Element {
    return (
        <div className="ShowCard box">
            <p>ID: {props.show.id}</p>
            <p>Name: {props.show.name}</p>
            <p>Status: {props.show.status}</p>
            <p>Species: {props.show.species} </p>
			 <img src={props.show.image} alt="no picture availiable"/>
        </div>
    );
}

export default ShowCard;
