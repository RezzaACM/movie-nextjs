export const GET_SEARACH_VALUE = "GET_SEARCH_VALUE";

export const search = (value: string): any => {
    return (dispatch) => {
        dispatch({
            type: GET_SEARACH_VALUE,
            payload: {
                value: value
            }
        })
    }
}