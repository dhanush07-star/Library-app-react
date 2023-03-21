import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BookInfo from "./Pages/BookInfo"
import Books from "./Pages/Books";
import { books } from "./data";
import Cart from "./Pages/Cart";


function App() {
  const [cart,setCart] = useState([]);

  // function addToCart(book){
  //   const dupeItem = cart.find(item => +item.id === +book.id)
  //   if(dupeItem){
  //     setCart(cart.map((item)=>{
  //       if(item.id === dupeItem.id){
  //         return{
  //           ...item,
  //           quantity:item.quantity +1,
  //         };
  //       }else{
  //         return item;
  //       }
  //     }))
  //   }
  //   else{
  //     setCart([...cart,{...book,quantity:1}])
  //   }
  // }

  function addToCart(book){
    setCart([...cart,{...book,quantity:1}])
  }
  
  function changeQuantity(book,quantity){
    setCart(cart.map(item=>{
      if(item.id === book.id){
        return{
          ...item,quantity: +quantity,
        }
      }else{
        return item
      }
    }))
  }

  useEffect(()=>{
    console.log(cart)
  },[cart])


  const removeItem = (item) => {
    setCart(cart.filter((book) => book.id !== item.id));
  };

  const numberOfItems = () => {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  };

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/books" exact Component={() => <Books books={books} />} />
        <Route path="/books/:id" exact Component={() => <BookInfo books={books} addToCart={addToCart}  cart={cart}  />} />
        <Route path="/cart" exact Component={() => <Cart books={books} cart={cart}  changeQuantity={changeQuantity}  removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;