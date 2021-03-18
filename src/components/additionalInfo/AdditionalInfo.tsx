import React, {ChangeEvent, useState} from 'react'
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {
    changeEmailAC,
    changeLastnameAC,
    changeNameAC,
    changePhoneAC,
    setDeleteUserAC
} from "../redux/table-reducer";
import {DataUsersType} from "../mock/mock-array-users";
import Modal from "react-modal";
import Grid from "@material-ui/core/Grid/Grid";
import style from "../Table.module.css";

type AdditionalInfoPropsType = {
    userNew: DataUsersType
    setUserNew:(value:DataUsersType)=>void
}

const AdditionalInfoMemo = (props: AdditionalInfoPropsType) => {
    const dispatch = useDispatch()
    let [editModeForName, setEditModeForName] = useState<boolean>(false);
    let [editModeForLastname, setEditModeForLastname] = useState<boolean>(false);
    let [editModeForEmail, setEditModeEmail] = useState<boolean>(false);
    let [editModeForPhone, setEditModePhone] = useState<boolean>(false);
    let [changeName, setChangeName] = useState(props.userNew.name)
    let [changeLastname, setChangeLastname] = useState(props.userNew.lastname)
    let [changeEmail, setChangeEmail] = useState(props.userNew.email)
    let [changePhone, setChangePhone] = useState(props.userNew.phone)


    const activatedEditMode = (editMode:Function):boolean => {
       return editMode(true);
    }
    const disActivatedEditMode = (editMode:Function,AC:Function,changeValue:string|number):boolean => {
        dispatch(AC(changeValue, props.userNew.id))
      return editMode(false);
    }
    const onHandleChange = (changeValue:Function,e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        changeValue(e.currentTarget.value)
    }

    return (
        <Modal
            isOpen={true}
            className={style.modalUser}
            contentLabel="Example Modal"
        >
            <div className={style.info}>
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <FormControl>
                            <FormGroup>
                                <div className={style.container}>
                                    <div>
                                        <h2>Selected User:</h2>
                                        <div>
                                            <span>Name: </span>
                                            {
                                                editModeForName
                                                    ?
                                                    <TextField
                                                        size={"small"}
                                                        variant="outlined"
                                                        value={changeName}
                                                        onChange={(e)=>{onHandleChange(setChangeName,e)}}
                                                        autoFocus={true}
                                                        onBlur={()=>{disActivatedEditMode(setEditModeForName,changeNameAC,changeName)}}/>

                                                    : <span>{changeName}</span>

                                            }
                                            <span onClick={()=>{activatedEditMode(setEditModeForName)}}> ✏️</span>
                                        </div>


                                    </div>
                                    <div>
                                        <span>Lastname: </span>
                                        {
                                            editModeForLastname
                                                ?
                                                <TextField
                                                    size={"small"}
                                                    variant="outlined"
                                                    value={changeLastname}
                                                    onChange={(e)=>{onHandleChange(setChangeLastname,e)}}
                                                    autoFocus={true}
                                                    onBlur={()=>{disActivatedEditMode(setEditModeForLastname,changeLastnameAC,changeLastname)}}/>
                                                : <span>{changeLastname}</span>

                                        }
                                        <span onClick={()=>{activatedEditMode(setEditModeForLastname)}}> ✏️</span>
                                    </div>
                                    <div>
                                        <span>Email: </span>
                                        {
                                            editModeForEmail
                                                ?
                                                <TextField
                                                    size={"small"}
                                                    variant="outlined"
                                                    value={changeEmail}
                                                    onChange={(e)=>{onHandleChange(setChangeEmail,e)}}
                                                    autoFocus={true}
                                                    onBlur={()=>{disActivatedEditMode(setEditModeEmail,changeEmailAC,changeEmail)}}/>
                                                : <span>{changeEmail}</span>

                                        }
                                        <span onClick={()=>{activatedEditMode(setEditModeEmail)}}> ✏️</span>
                                    </div>
                                    <div>
                                        Phone: {
                                        editModeForPhone
                                            ?
                                            <TextField
                                                size={"small"}
                                                variant="outlined"
                                                value={changePhone}
                                                onChange={(e)=>{onHandleChange(setChangePhone,e)}}
                                                autoFocus={true}
                                                onBlur={()=>{disActivatedEditMode(setEditModePhone,changePhoneAC,changePhone)}}/>
                                            : <span>{changePhone}</span>

                                    }
                                        <span onClick={()=>{activatedEditMode(setEditModePhone)}}> ✏️</span>
                                    </div>
                                </div>

                                <Button className={style.btn} color="secondary" onClick={() => {
                                    props.setUserNew({id:1,name: '', lastname: '', email: '',phone:'',gender:''})
                                    window.location.hash = "#/"
                                }}>Close and save</Button>
                                <Button onClick={() => {
                                    dispatch(setDeleteUserAC(props.userNew.id))
                                }}>Delete</Button>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </Modal>


    )
}
export const AdditionalInfo = React.memo(AdditionalInfoMemo)