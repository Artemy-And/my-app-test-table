import React, {ChangeEvent, useCallback} from "react";
import Modal from "react-modal";
import style from "../Table.module.css";
import Grid from "@material-ui/core/Grid/Grid";
import {Button, Checkbox, FormControl, FormGroup, TextField} from "@material-ui/core";
import {DataUsersType, GenderType} from "../mock/mock-array-users";


type NewContactPropsType = {
    userNew: DataUsersType
    setUserNew: ({}: DataUsersType) => void
    addNewUser: (user: DataUsersType) => void
    setModal: (value: boolean) => void
    modal: boolean
}


// id:number
// name: string;
// lastname: string;
// gender: string;
// email: string;
// phone:number

const NewUserMemo = (props: NewContactPropsType) => {
    let onChangeTextFieldName = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setUserNew({
            ...props.userNew,
            name: e.target.value
        })
    }, [props.userNew])
    let onChangeTextFieldLastname = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setUserNew({
            ...props.userNew,
            lastname: e.target.value
        })
    }, [props.userNew])

    let onChangeTextFieldEmail = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setUserNew({
            ...props.userNew,
            email: e.target.value
        })
    }, [props.userNew])
    let onChangeTextFieldPhone = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setUserNew({
            ...props.userNew,
            phone: e.target.value
        })
    }, [props.userNew])

    let onChangeTextFieldGender = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, groupName: GenderType) => {
        props.setUserNew({
            ...props.userNew,
            gender: groupName
        })
    }, [props.userNew])

    let addUserClick = useCallback(() => {
        props.addNewUser(props.userNew)
        props.setModal(false)
        props.setUserNew({id:1,name: '', lastname: '', email: '',phone:'',gender:''})
    }, [props.userNew])

    const closeButtonClick = () => {
        window.location.hash = "#/"
        // props.setModal(false)
        props.setUserNew({id:1,name: '', lastname: '', email: '',phone:'',gender:''})
    }

    let buttonDisabled = (props.userNew.name.length > 0) && props.userNew.lastname.length > 0 && props.userNew.email.length > 0 && props.userNew.phone.length > 0 ? false : true
    let checkboxDisabled = props.userNew.gender.length > 1 ? true : false






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
                                <TextField type={'text'}
                                           variant="outlined"
                                           margin="normal"
                                           placeholder={"Name"}
                                           value={props.userNew.name}
                                           onChange={onChangeTextFieldName}/>
                                <TextField type={'text'}
                                           variant="outlined"
                                           margin="normal"
                                           placeholder={"Lastname"}
                                           value={props.userNew.lastname}
                                           onChange={onChangeTextFieldLastname}/>
                                <TextField type={'text'}
                                           variant="outlined"
                                           margin="normal"
                                           placeholder={"Email"}
                                           value={props.userNew.email}
                                           onChange={onChangeTextFieldEmail}/>
                                <TextField type={'text'}
                                           variant="outlined"
                                           margin="normal"
                                           placeholder={"Phone"}
                                           value={props.userNew.phone}
                                           onChange={onChangeTextFieldPhone}/>
                                <span>
                                        <Checkbox
                                            disabled={checkboxDisabled}
                                            value={props.userNew.gender}
                                            onChange={(e) => {
                                                onChangeTextFieldGender(e, 'male')
                                            }}/>Man</span>
                                <span> <Checkbox value={props.userNew.gender}
                                                 disabled={checkboxDisabled}
                                                 onChange={(e) => {
                                                     onChangeTextFieldGender(e, 'female')
                                                 }}/>Women</span>



                                <Button variant="contained"
                                        color="primary"
                                        disabled={buttonDisabled}
                                        onClick={addUserClick}>
                                    ADD
                                </Button>
                                <Button variant="contained" color="secondary" onClick={closeButtonClick}>Close</Button>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </Modal>
    )
}
export const NewUser = React.memo(NewUserMemo)