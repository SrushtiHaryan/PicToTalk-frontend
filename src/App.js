
import './App.css';
import Navbar from './component/Navbar/Navbar'
import TranslationPage from './pages/TranslationPage/TranslationPage';
import DictionaryPage from './pages/DictionaryPage/DictionaryPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<TranslationPage/>}/>
        <Route path='/dictionary' element={<DictionaryPage/>}/>
        
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
