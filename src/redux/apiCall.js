import { publicRequest } from '../requestMethods';
import { loginSuccess, loginFailure, loginStart } from './userSlice';
;
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))

    } catch (error) {
        dispatch(loginFailure())
    }
}