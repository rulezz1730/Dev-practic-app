import {combineReducers, legacy_createStore as createStore} from "redux";
import {authReducer} from "../s2-reducers/r1-authReducer/authReducer";
import {profileReducer} from "../s2-reducers/r2-profileReducer/profileReducer";
import {registerReducer} from "../s2-reducers/r3-registerReducer/registerReducer";
import {forgotPassReducer} from "../s2-reducers/r4-recoverPassReducer/forgotPassReducer";
import {newPassReducer} from "../s2-reducers/r5-newPassReducer/newPassReducer";


export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    register: registerReducer,
    forgotPass: forgotPassReducer,
    newPass: newPassReducer
})

const store = createStore(rootReducer)

export default store