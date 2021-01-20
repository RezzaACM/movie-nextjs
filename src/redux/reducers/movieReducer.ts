import { GET_MOVIE_LSIT } from "../action/movieAction";

interface InitalState {
    data: Array<any>,
    error: boolean
}

const initalState: InitalState = {
    data: [],
    error: false
}

export const movieReducers = (state = initalState, action) => {
    switch (action.type) {
        case GET_MOVIE_LSIT:
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }

}
