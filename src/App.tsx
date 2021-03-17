import React from 'react';
import './App.css';
import { StickyHeadTable} from "./components/TableFirst";
import {HashRouter, Route, useHistory} from 'react-router-dom';

function App() {
  return (
      <HashRouter>
        <Route path={'/table'} render={() =>  <StickyHeadTable/>}/>
        <Route path={'/table/user'} render={() =>  <StickyHeadTable/>}/>
      </HashRouter>
  );
}

export default App;
