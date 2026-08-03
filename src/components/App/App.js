import './App.css';
import Home from '../Home/home'
import Nav from '../Nav/nav';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Videos from '../Videos/Videos.js';
import Warranty from '../Warranty/Warranty.js';
function App() {
 

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/warranty' element={<Warranty />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
