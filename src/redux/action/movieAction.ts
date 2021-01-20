export const GET_MOVIE_LSIT = "GET_MOVIE_LIST";
import axios from 'axios'

export const getMovie = (): any => {
    return (dispatch: any) => {
        axios.get('https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies')
            .then(res => {
                dispatch({
                    type: GET_MOVIE_LSIT,
                    payload: {
                        data: res.data
                    }
                })
            })
    }
}