
import {DataUsersType, rows} from "../mock/mock-array-users";


let initialState = {
    input: "",
    array: rows as Array<any>,



}


export function tableReducer(state: InitialStateType = initialState, action: AllACTypes):InitialStateType {
    switch (action.type) {
        case SET_NEW_ARR:
            return {...state, array: action.array}
        case SET_ADD_NEW_CONTACT:
            return {
                ...state,
                array: [action.newContact, ...state.array]
            }

        default:
            return state
    }
}

export const setAddNewContactAC = (newContact: DataUsersType): SetAddNewContactACType => ({
    type: SET_ADD_NEW_CONTACT,
    newContact
})


type SetAddNewContactACType = {
    type: typeof SET_ADD_NEW_CONTACT
    newContact: DataUsersType

}

type setNewArrACType = {
    type: typeof SET_NEW_ARR
    array: Array<DataUsersType>
}


type AllACTypes =
    | setNewArrACType
    | SetAddNewContactACType


export const SET_NEW_ARR = "SET_NEW_ARR"
export const SET_ADD_NEW_CONTACT = "SET_ADD_NEW_CONTACT"


export type InitialStateType = {
    array: Array<DataUsersType>
    input: string,
}








