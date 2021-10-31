import React,{useState} from 'react';

export const PWDInput =(props) =>{
    const [pwd,setPWD] = useState("");
    sessionStorage.setItem("PWD",pwd);
    const handleOnChangePWD=(e)=>{
        // console.log(e);
        setPWD(e.target.value);
        
    }

    return (
        <React.Fragment>
            <div className="form-group">
                        <label>
                            Password:
                            <input type="password" 
                            name="pwd" 
                            id="InputPWD"
                            className="form-control" 
                            value={pwd}
                            onChange={handleOnChangePWD} />
                        </label>
                    </div>
        </React.Fragment>
        )
    }