import { useContext, useEffect } from "react"
import { DataContainer } from "../../App"
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import '../style/style.scss';


export default function Cartpage() {
    const { CartItems, setCartItems, addtoCart, decreaseitem, deleteProduct} =useContext(DataContainer);
    const TotalPrice= CartItems.reduce((price,item)=> price + item.qty * item.price ,0);

    useEffect(()=> {
        window.scrollTo(0,0);
        if(CartItems.length ===0) {
          const storedCart = localStorage.getItem("cartItem");
          setCartItems(JSON.parse(storedCart));
        }
      },[]);

  return (
    <section className="cart-item">
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    {CartItems.length===0 && <h1 className="no-items product">No Items in Cart</h1>}
                    {CartItems.map((item) =>{
                        const productqty=item.price * item.qty
                        return (
                            <div className="Cart-list" key={item.id}>
                                <Row>
                                    <Col className="image-holder" sm={3} md={1}>
                                        <img className="cartimg" src={item.imgUrl} alt="/"/>
                                    </Col>
                                    <Col sm={8} md={9}>
                                        <Row className="cart-qty justify-content-center">
                                            <Col xs={12} sm={9} className="cart-details">
                                                <h3>{item.productName}</h3>
                                                <h4>
                                                    Rs.{item.price}.00 * {item.qty}
                                                </h4>
                                                    <span>{productqty}.00</span>
                                            </Col>
                                            <Col xs={12} sm={3} className="cart-control">
                                                <button className="add plus" onClick={()=>addtoCart(item)} style={{ background:'transparent'}}>
                                                <FontAwesomeIcon icon={faPlus} />
                                                </button>
                                                <button className="mius less" onClick={()=>decreaseitem(item)} style={{background:'transparent'}}>
                                                    <FontAwesomeIcon icon={faMinus} size="xl"/>
                                                </button>
                                            </Col>
                                            <button className="delete" onClick={()=>deleteProduct(item)} style={{width:100 , border:'none'}}>
                                                <FontAwesomeIcon icon={faClose}/>
                                            </button>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        )})
                    }
                </Col>
                <Col md={4}>
                    <div className="total">
                        <h4 className="txt">Cart Summary</h4>
                        <div className="d-flex txt">
                            <h4>Total Price: </h4>
                            <h4>{TotalPrice}.00 Rs</h4>
                        </div>
                        <button className="btn btn-success" > Buy Now  <FontAwesomeIcon icon={faCreditCard} /></button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
  )
}
