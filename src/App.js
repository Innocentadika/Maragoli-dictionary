import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Page from './components/page/page.component'
import Loader from './components/loader/loader'
import './App.css';

function App() {
  return (
    <Fragment>
    <Routes>
      <Route index element={<Page />} />
      <Route path='/dictionery' element={<Loader />} />

    </Routes>
    </Fragment>
  );
}
  
export default App;