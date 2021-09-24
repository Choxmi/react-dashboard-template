import { useContext } from "react";
import GlobalContext from "../../global";

const Card = (props) => {
    const { card_color } = useContext(GlobalContext);
    return <div className={`card ${card_color}`}>
        {props.children}
    </div>
}

export default Card;