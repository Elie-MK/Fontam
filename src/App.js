import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import IndexPages from './Components/IndexPages';
import About from './pages/aboutsScreen/About';
import Action from './pages/structuresScreen/Action';
import Contact from './pages/ContactScreen/Contact';
import Don from './pages/DonScreen/Don';
import Partner from './pages/PartnerScreen/Partner';
import Projet from './pages/ProjetScreen/Projet';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPages/>}>
            <Route index element={<Homepage/>} />
            <Route path='/a-propos-de-nous' element={<About/>} />
            <Route path='//nos-structures' element={<Action/>} />
            <Route path='/nos-projets' element={<Projet/>} />
            <Route path='/nos-partenaires' element={<Partner/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/mon-don' element={<Don/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
