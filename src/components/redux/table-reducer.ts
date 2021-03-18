import {DataUsersType, rows} from "../mock/mock-array-users";


let initialState = {
    input: "",
    array: rows as Array<any>,


}


export function tableReducer(state: InitialStateType = initialState, action: AllACTypes): InitialStateType {
    switch (action.type) {
        case SET_NEW_ARR:
            return {...state, array: action.array}
        case SET_ADD_NEW_CONTACT:
            return {
                ...state,
                array: [action.newContact, ...state.array]
            }
        case SET_DELETE_CONTACT:
            return {...state, array: state.array.filter(tl => tl.id !== action.contactId)}
        case CHANGE_NAME_AC:
            return {...state, array: state.array.map(a => a.id === action.id ? {...a, name: action.name} : a)}
        case CHANGE_LASTNAME_AC:
            return {...state, array: state.array.map(a => a.id === action.id ? {...a, lastname: action.lastname} : a)}

        case CHANGE_EMAIL_AC:

            return {...state, array: state.array.map(a => a.id === action.id ? {...a, email: action.email} : a)}

        case CHANGE_PHONE_AC:

            return {...state, array: state.array.map(a => a.id === action.id ? {...a, phone: action.phone} : a)}

        default:
            return state
    }
}


export const setNewArrAC = (array: Array<DataUsersType>): setNewArrACType => ({type: SET_NEW_ARR, array})
export const setInputAC = (value: string): setInputACType => ({type: SET_INPUT, value})
export const setAddNewContactAC = (newContact: DataUsersType): SetAddNewContactACType => ({
    type: SET_ADD_NEW_CONTACT,
    newContact
})

export const setDeleteUserAC = (contactId: number): setDeleteContactACType => ({
    type: SET_DELETE_CONTACT,
    contactId
})
export const changeNameAC = (name: string, id: number): ChangeNameActionType => {
    return {type: CHANGE_NAME_AC, id, name}
}
export const changeLastnameAC = (lastname: string, id: number): ChangeLastnameType => {
    return {type: CHANGE_LASTNAME_AC, id, lastname}
}
export const changeEmailAC = (email: string, id: number): ChangeEmailACType => {
    return {type: CHANGE_EMAIL_AC, id, email}
}
export const changePhoneAC = (phone: string, id: number): ChangePhoneACType => {
    return {type: CHANGE_PHONE_AC, id, phone}
}



type ChangePhoneACType = {
    type: typeof CHANGE_PHONE_AC
    id: number
    phone: string
}
type ChangeEmailACType = {
    type: typeof CHANGE_EMAIL_AC
    id: number
    email: string
}
type ChangeNameActionType = {
    type: typeof CHANGE_NAME_AC
    id: number
    name: string
}
type ChangeLastnameType = {
    type: typeof CHANGE_LASTNAME_AC
    id: number
    lastname: string
}

type setDeleteContactACType = {
    type: typeof SET_DELETE_CONTACT
    contactId: number
}

type SetAddNewContactACType = {
    type: typeof SET_ADD_NEW_CONTACT
    newContact: DataUsersType

}

type setNewArrACType = {
    type: typeof SET_NEW_ARR
    array: Array<DataUsersType>
}

type setInputACType = {
    type: typeof SET_INPUT
    value: string
}

type AllACTypes =
    | setNewArrACType
    | setInputACType
    | SetAddNewContactACType
    | setDeleteContactACType
    | ChangePhoneACType
    | ChangeEmailACType
    | ChangeNameActionType
    | ChangeLastnameType


export const SET_NEW_ARR = "SET_NEW_ARR"
export const SET_INPUT = "SET_INPUT"
export const SET_ADD_NEW_CONTACT = "SET_ADD_NEW_CONTACT"
export const SET_DELETE_CONTACT = " SET_DELETE_CONTACT"
export const CHANGE_NAME_AC = "CHANGE_NAME_AC"
export const CHANGE_LASTNAME_AC = "CHANGE_LASTNAME_AC"
export const CHANGE_EMAIL_AC = "CHANGE_EMAIL_AC"
export const CHANGE_PHONE_AC = "CHANGE_PHONE_AC"


export type InitialStateType = {
    array: Array<DataUsersType>
    input: string,
}








