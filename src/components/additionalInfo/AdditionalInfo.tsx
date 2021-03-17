import React from 'react'
import style from './AdditionalInfo.module.css'
import {FormControl, FormGroup} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {DataUsersType} from "../mock/mock-array-users";
import Modal from "react-modal";
import Grid from "@material-ui/core/Grid/Grid";

type AdditionalInfoPropsType = {
    userNew: DataUsersType
    // setShowAdditionalInfo: (value: boolean) => void
}

const AdditionalInfoMemo = (props: AdditionalInfoPropsType) => {
    const dispatch = useDispatch()


    return (<div>
        {props.userNew.name}
    </div>







    )
}
export const AdditionalInfo = React.memo(AdditionalInfoMemo)