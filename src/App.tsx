import React from 'react';
import './App.css';
import {CustomizedTables} from "./components/TableFirst";
import {HashRouter, Route, useHistory} from 'react-router-dom';

function App() {
  return (
      <HashRouter>
        <Route path={'/table'} render={() =>  <CustomizedTables/>}/>
        <Route path={'/table/user'} render={() =>  <CustomizedTables/>}/>
      </HashRouter>
  );
}

export default App;
