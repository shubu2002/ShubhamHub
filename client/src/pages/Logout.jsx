import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const  Logout = ()  => {

    const {LogoutUser} = useAuth();
    
    useEffect(() => {

    console.log("Logout component mounted");
        LogoutUser();
        
    },[]);
    return <Navigate to={"/login"}/>
};

