import React from 'react';
import './App.css';
import { StickyHeadTable} from "./components/TableFirst";
import {HashRouter, Route, useHistory} from 'react-router-dom';
import {UserInfo} from "./components/UserInfo";

function App() {
  return (
      <HashRouter>
        <Route path={'/table'} render={() =>  <StickyHeadTable/>}/>
        <Route path={'/user'} render={() =>  <UserInfo/>}/>
      </HashRouter>
  );
}

export default App;
