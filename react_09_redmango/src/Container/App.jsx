import './App.css';
import { Footer, Header } from '../Components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, MenuItemDetails } from '../Pages';


function App() {
  return (
    <div>
      <Header/>
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menuItemDetails/:menuItemId" element={<MenuItemDetails/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
