import React from 'react';

import {PSIDInput} from './InputPSID';
import {PWDInput} from './InputPwd';

import banner from './banner.png';
import axios from "axios";

export const newLogin =()=>{
 


    const handleSubmit=(e)=>{
        const psid = sessionStorage.getItem("PSID");
        const pwd = sessionStorage.getItem("PWD");
        //    console.log(psid);
        //    console.log(pwd);
        e.preventDefault();
            const newLogin = {
                psid:psid,
                password:pwd,
            };
            console.log(newLogin);
            let loginprofiles;
            axios
            .get("http://localhost:8080/authenticate/"+psid+"/"+pwd+"/")
            .then((res) => {
              loginprofiles = res.data;
              console.log(res);
              console.log(res.data);
              if( res.data==="Invalid PSID/Password"){
                  alert(res.data);
              } else {
                // let psid="";
                // let password="";
                const user = loginprofiles.split(",");
                sessionStorage.setItem("auth",true);
                sessionStorage.setItem("Sales_Name",user[0]);
                sessionStorage.setItem("Sales_Email",user[1]);
                window.location.href='/ApplicationStatus';
               
                
              }
            });
        };
      
        

        

    return (
        <React.Fragment>
            <img src={banner} id="banner" alt="banner"></img>
            <div className="formbox">
                <form onSubmit={handleSubmit}>
                    <h4>Login</h4>
                    <PSIDInput />
                    <PWDInput />
                    <input type="submit" className="btn btn-primary" name="Submit" />
                </form>
            </div>
            
        </React.Fragment>
    );
}