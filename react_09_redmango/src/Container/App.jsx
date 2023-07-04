import { useEffect } from 'react';
import './App.css';
import { Footer, Header } from '../Components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, MenuItemDetails } from '../Pages';
import ShoppingCart from '../Pages/ShoppingCart';
import { useGetShoppingCartQuery } from '../Apis/shoppingCartApi'
import { setShoppingCart } from '../Storage/Redux/shoppingCartSlice'
import { useDispatch } from 'react-redux';

function App() {
  const { data, isLoading } = useGetShoppingCartQuery("b7ae37bf-09b1-4b47-9ce1-c96031d2920");
  const dispatch = useDispatch();

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
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
