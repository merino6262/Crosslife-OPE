import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import News from './Pages/News';
import Categoria from './Pages/Categoria';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/noticia/:id" element={<News />}/>
          <Route path="/categoria/:categoria" element={<Categoria />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
