import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './app.router';
import AuthRoutes from './auth.routes';
import { userAuth } from '../hooks/auth';

export default function Routes(){
    const{user}=userAuth();
    return(
        <BrowserRouter>
        {user?<AppRoutes/>: <AuthRoutes/>}
        </BrowserRouter>
    )
};   