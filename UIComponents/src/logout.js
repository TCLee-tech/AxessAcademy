import React from 'react';
import banner from './Banner.jpg';

export const logOut =()=>{

    const onClickLogout=()=>{
        
        sessionStorage.setItem("auth","");
        sessionStorage.setItem('Sales_Name',"Not Sign In");
        sessionStorage.clear();
        window.location.href='/login';
    }

return (
        <React.Fragment>
            <div id="Logout">
                <img src={banner} id="banner2" alt="banner"></img>
                <div className="nobox">
                        <h4>Its been a pleasure serving you</h4>
                        <button type="button" className="btn btn-primary" onClick={onClickLogout}>Confirm To Logout</button>
                </div>
            </div>
        </React.Fragment>
    )
}