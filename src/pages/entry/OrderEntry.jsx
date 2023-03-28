import Options from "./Options";
import { formatCurrency } from "../../utilities";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { Button } from "react-bootstrap";

export default function OrderEntry({setOrderPhase}){
    const {totals} = useOrderDetails();
    
    return <div>
        <h1>Design Your Sundae!</h1>
        <Options optionType='scoops'/>
        <Options optionType='toppings'/>
        <h2>Grand total: ${formatCurrency(totals.scoops + totals.toppings)}</h2>
        <Button onClick={()=> setOrderPhase("review")}>Order Sundae!</Button>
    </div>;
}