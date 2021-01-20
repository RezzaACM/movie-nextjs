import { type } from "os";
import { types } from "util";
import { GET_SEARACH_VALUE } from "../action/searchAction";

const initialState = {
    value: ""
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARACH_VALUE:
            return {
                ...state,
                value: action.payload.value
            }
        default:
            return state
    }
}