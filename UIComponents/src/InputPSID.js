import React,{useState} from 'react';

export const PSIDInput =(props) =>{
    const [psid,setPSID] = useState("");
    sessionStorage.setItem("PSID",psid);
    const handleOnChangePSID=(e)=>{
        // console.log(e);
        setPSID(e.target.value);
        
    }

    return (
        <React.Fragment>
            <div className="form-group">
                        <label>
                            PSID:
                            <input type="text" 
                            name="psid" 
                            id="InputPSID"
                            className="form-control" 
                            value={psid}
                            onChange={handleOnChangePSID} />
                        </label>
                    </div>
        </React.Fragment>
        )
    }