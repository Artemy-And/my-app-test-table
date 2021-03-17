
import {rows} from "../mock/mock-array-users";


let initialState = {
    input: "",
    array: rows as Array<any>,



}


export function tableReducer(state: InitialStateType = initialState) {


}












export type InitialStateType = {
    array: Array<defArrType>
    input: string,

}
export type defArrType = {
    "id": number,
    "name": string,
    "email": string,
    "tel": string

}







