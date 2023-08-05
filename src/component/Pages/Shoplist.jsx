import { Row } from "react-bootstrap";
import { useEffect } from "react";
import Product from "../Layout/Product";

const Shoplist = ({productItems,addtoCart}) => {
    useEffect(()=> {
    },[productItems])
    if(productItems.length ===0) {
        return (
            <h1 className="not-found">Product Not Found !!</h1>
        );
    }
    else {
        return (
            <Row className="justify-content-center">
                {productItems.map((productItem) => {
                return (
                    <Product key={productItem.id} title={null} productItem={productItem} addtoCart={addtoCart}/>
                )
                })}
            </Row>
        );
    }
}
export default Shoplist;