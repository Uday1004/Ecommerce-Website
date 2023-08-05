import { useState, createContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Pages/Home";
import Footer from "./component/Footer";
import Cartpage from "./component/Pages/Cartpage";
import "./component/style/style.scss";
import Shoppage from "./component/Pages/Shoppage";
import ProductsDetail from "./component/Layout/ProductsDetail";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Exclusive from "./component/Pages/Exclusive";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DataContainer = createContext();

function App() {
  const [CartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const addtoCart = (products, num = 1) => {
    const productExit = CartItems.find((item) => item.id === products.id); //check the product is present in cart or not

    //if product is present then ADD +1
    if (productExit) {
      setCartItems(
        CartItems.map((item) =>
          item.id === products.id
            ? { ...productExit, qty: productExit.qty + num }
            : item
        )
      );
    }
    //else product is add in CART
    else {
      setCartItems([...CartItems, { ...products, qty: num }]);
    }
  };

  const decreaseitem = (products) => {
    const productExit = CartItems.find((item) => item.id === products.id);

    //if product is ==1 then we have to remove it
    if (productExit === 1) {
      setCartItems(CartItems.filter((item) => item.id !== products.id));
    }
    //else we just decrease the quantity
    else {
      setCartItems(
        CartItems.map((item) =>
          item.id === products.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  //delete by using filter out those product !== item.id
  const deleteProduct = (product) => {
    setCartItems(CartItems.filter((item) => item.id !== product.id));
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(CartItems));
  }, [CartItems]);

  useEffect(() => {
    // Retrieve user data from localStorage on initial load
    const storedUsersData = JSON.parse(localStorage.getItem("users")) || [];
    setUsersData(storedUsersData);
  }, []);


  return (
    <DataContainer.Provider
      value={{
        CartItems,
        setCartItems,
        addtoCart,
        decreaseitem,
        deleteProduct,
        selectedProduct,
        setSelectedProduct,
        loggedIn,
        setLoggedIn,
        usersData,
        setUsersData,
      }}
    >
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/signin" element={<Login/>} /> */}
          <Route
            exact
            path="/shop"
            element={loggedIn ? <Shoppage /> : <Navigate to="/login" />}
          />
          <Route exact path="/shop/:id" element={<ProductsDetail />} />
          <Route
            exact
            path="/cart"
            element={loggedIn ? <Cartpage /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/Login"
            element={!loggedIn ? <Login /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/Signup"
            element={!loggedIn ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/Exclusive"
            element={loggedIn ? <Exclusive /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </Router>
    </DataContainer.Provider>
  );
}

export default App;
