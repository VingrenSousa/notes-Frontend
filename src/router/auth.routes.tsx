import {Routes, Route} from 'react-router-dom';

import SignIn from '../pages/Signin';
import SignUp from '../pages/singUp';


export default function AuthRoutes() {
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Routes>
    )
}