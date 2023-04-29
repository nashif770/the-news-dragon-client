import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvide';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    
    if(loading){
        return <div>Loading .... </div>
    }

    else if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;


/**
 * 1. check user is logged in or not.
 * 2. if user is logged in, allow them to visit the route
 * 3. else redirect to login page
 * 4. setup the private 
 * 5. set loading
 */