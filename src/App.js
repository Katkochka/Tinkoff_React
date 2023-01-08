import React from 'react';
import { Header } from './component/header';
import { List } from './component/film-list';
import { Footer } from './component/footer';
import Add from './pages/add-film';

import Film from './pages/film';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return(
    <div>
        <Header />
        <div className = {'row'} style= {{marginTop:'8px'}}>
            <div className = {'col-3'} style= {{marginLeft:'8px'}}>
                <List/>
            </div>
            <Router>
            <Routes>
              <Route exact path="/" element={<Footer />}/>
              <Route exact path="/film" element={<Film />}/>
              <Route exact path="/add-film" element={<Add />}/>
            </Routes>
          </Router>
        </div>
    </div>

    

  );
}

export default App;
