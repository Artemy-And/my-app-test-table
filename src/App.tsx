import React, {useCallback, useState} from 'react';
import './App.css';
import { TableMain} from "./components/TableMain";
import {HashRouter, Route} from 'react-router-dom';
import {AdditionalInfo} from "./components/additionalInfo/AdditionalInfo";
import {NewUser} from "./components/newUser/NewUser";
import {DataUsersType} from "./components/mock/mock-array-users";
import {setAddNewContactAC} from "./components/redux/table-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./components/redux/Store";

function App() {
    const dispatch = useDispatch()
    const array = useSelector<RootStateType, Array<DataUsersType>>(state => state.table.array)
    let [modal, setModal] = useState<boolean>(false)
    const [userNew, setUserNew] = useState<DataUsersType>({
        id:1,
        name: '',
        lastname: '',
        gender: '',
        email:'',
        phone:''
    })

    const addNewUser = useCallback((user: DataUsersType) => {
        let newUser = {id: Math.floor(Math.random()*100000), name: user.name, lastname: user.lastname,gender:user.gender,email:user.email,phone:user.phone};
        dispatch(setAddNewContactAC(newUser))
    }, [array])


  return (
      <HashRouter>
          <Route path={'/addNewUser'} render={() => <NewUser userNew={userNew} setUserNew={setUserNew} addNewUser={addNewUser} setModal={setModal} modal={modal}/>}/>
        <Route path={'/'} render={() =>  <TableMain setUserNew={setUserNew}/>}/>
        <Route path={'/user'} render={() =>  <AdditionalInfo userNew={userNew} setUserNew={setUserNew}/>}/>

      </HashRouter>
  );
}

export default App;
