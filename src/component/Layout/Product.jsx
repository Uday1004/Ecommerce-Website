/* Home Top Product backenend functionality to add product in cart and show pop 
and local storage in json format */

import { useContext ,useState} from "react";
import { Col } from "react-bootstrap";
import "./Product.css"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DataContainer } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";




const Product = ({ title, productItem, addtoCart }) => {
    const { setSelectedProduct } = useContext(DataContainer);
    const router = useNavigate();
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const handleClick = () => {
        setSelectedProduct(productItem);
        localStorage.setItem(`selectedproduct-${productItem.id}`, JSON.stringify(productItem));
        router(`/shop/${productItem.id}`);
    }

    const handleAdd = (productItem) => {
        addtoCart(productItem);
        toast.success("Product has added to cart");
    }

    return (
        <Col md={2} sm={4} xs={8} className="product mtop">
            <img loading="lazy" onClick={() => handleClick()} src={productItem.imgUrl} alt="" />
            <div className="product-addtoCart">
                <label>{count}</label> <br/>
            </div>
            <div className="product-details">
                <h3 onClick={() => handleClick()}>
                    {productItem.productName}
                </h3>
                <div className="rate">
                <FontAwesomeIcon icon={faStar} style={{color: "#fbdf50",}}/>
                <FontAwesomeIcon icon={faStar} style={{color: "#fbdf50",}}/>
                <FontAwesomeIcon icon={faStar} style={{color: "#fbdf50",}}/>
                <FontAwesomeIcon icon={faStar} style={{color: "#fbdf50",}}/>
                <FontAwesomeIcon icon={faStar} style={{color: "#fbdf50",}}/>
                </div>
                <div className="price">
                    <h4>Rs.{productItem.price}</h4>
                    <button aria-label="Add" type="submit" className="add" onClick={() => handleAdd(productItem)}>
                    {/* <label>{count}</label> <br /> */}
                    <FontAwesomeIcon icon={faPlus} onClick={increment}/>
                    </button>
                </div>
            </div>
        </Col>

    );
};

export default Product;