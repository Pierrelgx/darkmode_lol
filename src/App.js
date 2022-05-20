import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import ThemeContextProvider from './Context/ThemeContext';

if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches){
    alert("woh, je suis en dark mode ahah")
}

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>

      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profil/:id' element={<Profile />} />
        <Route path='*' element={<NotFound   />} />

      </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;


