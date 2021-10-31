import React from 'react';
import Success from './check-circle.gif';

export const SuccessModal=()=>{
  
return (
    <React.Fragment>
        {/* The Modal  */}
   <div className="modal fade"  id="SuccessModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                    {/*  Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Create New</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                    {/*  Modal body */}
                        <div className="modal-body" id="modal-msg">
                            <img src={Success} alt="check-circle"/>
                            <strong>Success!</strong> New Application Added Successfully
                            </div>
                    {/*  Modal footer*/}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
         
    </React.Fragment>
)

};


