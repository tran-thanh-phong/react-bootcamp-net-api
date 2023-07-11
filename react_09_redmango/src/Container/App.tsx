import { useEffect } from 'react';
import './App.css';
import { Footer, Header } from '../Components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, MenuItemDetails, Login, Register, AccessDenied, Payment } from '../Pages';
import ShoppingCart from '../Pages/ShoppingCart';
import { useGetShoppingCartQuery } from '../Apis/shoppingCartApi'
import { setShoppingCart } from '../Storage/Redux/shoppingCartSlice'
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { setLoggedInUser } from '../Storage/Redux/userAuthSlice';
import { RootState } from '../Storage/Redux/store';
import { userModel } from "../Interfaces";
import React from 'react';

function App() {
  const userData: userModel = useSelector((state: RootState) => state.userAuthStore);
  const { data, isLoading } = useGetShoppingCartQuery(userData.id);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      const decodedToken = jwt_decode(localToken);
      dispatch(setLoggedInUser(decodedToken));
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      console.log("App - Menu Loaded", data);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [isLoading]);

  return (
    <div>
      <Header/>
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menuItemDetails/:menuItemId" element={<MenuItemDetails/>}/>
          <Route path='/shoppingCart' element={<ShoppingCart/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/accessDenied" element={<AccessDenied/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
