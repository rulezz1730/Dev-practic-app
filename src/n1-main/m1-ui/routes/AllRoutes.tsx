import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import App from "../App";
import Profile from "../../../n2-features/f1-auth/a3-profile/p1-profile/Profile";
import Login from "../../../n2-features/f1-auth/a1-login/Login";
import Register from "../../../n2-features/f1-auth/a2-register/Register";
import PasswordRecoveryPage from "../../../n2-features/f1-auth/a3-profile/p2-passwordRecovery/PasswordRecoveryPage";
import EnterNewPasswordPage from "../../../n2-features/f1-auth/a3-profile/p3-enterNewPassowrd/EnterNewPasswordPage";
import ReusedComponentsPage from "../../../n2-features/f0-test/t1-reused/ReusedComponentsPage";
import NotFound404 from "../../../n2-features/f2-error/e1-notFound404/NotFound404";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/forgot-password' element={<PasswordRecoveryPage/>}/>
                <Route path='/new-password' element={<EnterNewPasswordPage/>}/>
                <Route path='/reused-components' element={<ReusedComponentsPage/>}/>
                <Route path="/*" element={<NotFound404/>}/>
            </Routes>
        </div>
    );
};

export default AllRoutes;