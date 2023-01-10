import React, {useState} from 'react';
import {Header} from './component/header';
import {List} from './component/film-list';
import Add from './pages/add-film';
import Edit from './pages/edit-film';
import style from './style.module.scss'

import Film from './pages/film';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <Router>
          <div className={'col-3'} style={{marginLeft: '8px'}}>
            <List />
          </div>
          <Routes>
            <Route exact path="/film/:id" element={<Film />} />
            <Route exact path="/film/:id/edit" element={<Edit />}/>
            <Route exact path="/add-film" element={<Add />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
