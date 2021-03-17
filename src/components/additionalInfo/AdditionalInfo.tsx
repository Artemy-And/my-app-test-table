import React, {ChangeEvent, useCallback, useState} from 'react'
// import style from './AdditionalInfo.module.css'
import {Button, Checkbox, FormControl, FormGroup, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {changeEmailAC, changeNameAC, changePhoneAC, setAddNewContactAC} from "../redux/table-reducer";
import {DataUsersType} from "../mock/mock-array-users";
import Modal from "react-modal";
import Grid from "@material-ui/core/Grid/Grid";
import style from "../Table.module.css";

type AdditionalInfoPropsType = {
    userNew: DataUsersType
    // setShowAdditionalInfo: (value: boolean) => void
}

const AdditionalInfoMemo = (props: AdditionalInfoPropsType) => {
    const dispatch = useDispatch()
    let [editModeForName, setEditModeForName] = useState<boolean>(false);
    let [editModeForEmail, setEditModeEmail] = useState<boolean>(false);
    let [editModeForPhone, setEditModePhone] = useState<boolean>(false);
    let [editModeForStatus, setEditModeStatus] = useState<boolean>(false);
    let [changeName, setChangeName] = useState(props.userNew.name)
    let [changeLastname, setChangeLastname] = useState(props.userNew.lastname)
    let [changeEmail, setChangeEmail] = useState(props.userNew.email)
    let [changePhone, setChangePhone] = useState(props.userNew.phone)
    let [changeGender, setChangeGender] = useState(props.userNew.gender)

    const activatedEditModeName = () => {
        setEditModeForName(true);
    }
    const activatedEditModeEmail = () => {
        setEditModeEmail(true);
    }
    const activatedEditModePhone = () => {
        setEditModePhone(true);
    }
    const activatedEditModeStatus = () => {
        setEditModeStatus(true);
    }


    const disActivatedEditMode1 = () => {
        setEditModeForName(false);
        dispatch(changeNameAC(changeName, props.userNew.id))

    }
    const disActivatedEditMode2 = () => {
        setEditModeEmail(false);
        dispatch(changeEmailAC(changeEmail, props.userNew.id))

    }
    const disActivatedEditMode3 = () => {
        setEditModePhone(false);
        dispatch(changePhoneAC(changePhone, props.userNew.id))

    }
    const disActivatedEditMode4 = () => {
        setEditModeStatus(false);
        // dispatch(changeStatusAC(changeStatus, props.additionalInfoObj.id))

    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeName(e.currentTarget.value)
    }
    const changeTitleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeEmail(e.currentTarget.value)
    }
    const changeTitlePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setChangePhone(e.currentTarget.value)
    }
    // const changeTitleStatus = (e: ChangeEvent<HTMLInputElement>) => {
    //     setChangeStatus(e.currentTarget.value)
    // }

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
                                <div>
                                    Выбран пользователь:
                                    {
                                        editModeForName
                                            ?
                                            <TextField
                                                size={"small"}
                                                variant="outlined"
                                                value={changeName}
                                                onChange={changeTitle}
                                                autoFocus={true}
                                                onBlur={disActivatedEditMode1}/>

                                            : <span>{changeName}</span>

                                    }
                                    <span onClick={activatedEditModeName}>✏️</span>
                                </div>
                                <div>
                                    Email :
                                    {
                                        editModeForEmail
                                            ?
                                            <TextField
                                                size={"small"}
                                                variant="outlined"
                                                value={changeEmail}
                                                onChange={changeTitleEmail}
                                                autoFocus={true}
                                                onBlur={disActivatedEditMode2}/>
                                            : <span>{changeEmail}</span>

                                    }
                                    <span onClick={activatedEditModeEmail}>✏️</span>
                                </div>
                                <div>
                                    Phone : {
                                    editModeForPhone
                                        ?
                                        <TextField
                                            size={"small"}
                                            variant="outlined"
                                            value={changePhone}
                                            onChange={changeTitlePhone}
                                            autoFocus={true}
                                            onBlur={disActivatedEditMode3}/>
                                        : <span>{changePhone}</span>

                                }
                                    <span onClick={activatedEditModePhone}>✏️</span>
                                </div>
                                {/*<div>*/}
                                {/*    Status : {*/}
                                {/*    editModeForStatus*/}
                                {/*        ?*/}
                                {/*        <TextField*/}
                                {/*            size={"small"}*/}
                                {/*            variant="outlined"*/}
                                {/*            value={changeStatus}*/}
                                {/*            onChange={changeTitleStatus}*/}
                                {/*            autoFocus={true}*/}
                                {/*            onBlur={disActivatedEditMode4}/>*/}
                                {/*        : <span onDoubleClick={activatedEditModeStatus}>{changeStatus}</span>*/}
                                {/*}*/}
                                {/*</div>*/}
                                <Button className={style.btn} color="secondary" onClick={() => {
                                    // UpdateUser()
                                    window.location.hash = "#/"
                                    // props.setShowAdditionalInfo(false)
                                }}>Close and save</Button>

                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </Modal>




    )
}
export const AdditionalInfo = React.memo(AdditionalInfoMemo)