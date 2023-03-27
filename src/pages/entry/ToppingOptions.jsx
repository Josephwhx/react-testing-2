import Col from 'react-bootstrap/Col';
import { useOrderDetails } from '../../contexts/OrderDetails';

export default function ToppingOption({name, imagePath}){
    const {updateItemCount} = useOrderDetails();

    const checkHandler = (event) => {
        return updateItemCount(name, event.target.checked ? 1 : 0, "toppings")
    }
    
    return (
        <Col xs={12} sm={6} md={4} lg={3} style={{textAlign: 'center'}}>
            <img 
            style={{width: '75%'}}
            src={`http://localhost:3030/${imagePath}`}
            alt={`${name} topping`}
            />
            <input
            type="checkbox"
            id={name}
            defaultChecked={false}
            onChange={checkHandler}
            />
            <label htmlFor={name}>{name}</label>
        </Col>
    )
}