import React from "react";
import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";

export default function OrderSummary({setOrderPhase}) {
    const {totals, optionCounts} = useOrderDetails();

    const scoopArray = Object.entries(optionCounts.scoops) // [["Chocolate", 2], ["Vanilla", 1]]
    const scoopList = scoopArray.map(([key, value]) => (
        <li key={key}>
            {value} {key}
        </li>
    ));
    

    const toppingArray = Object.keys(optionCounts.toppings) // ["M&Ms", "Gummi bears"]
    const toppingList = toppingArray.map(key => <li key={key}>{key}</li>)

    const toppingsContent = (totals.toppings !== 0 ? <><h2>Toppings: {formatCurrency(totals.toppings)}</h2>
    <ul>
        {toppingList}
    </ul> </>: <></>)
    
    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
            <ul>
                {scoopList}
            </ul>
           {toppingsContent}
            <SummaryForm setOrderPhase={setOrderPhase}/>
        </div>
    )
}