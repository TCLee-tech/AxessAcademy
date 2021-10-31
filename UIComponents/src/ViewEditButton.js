import React from "react";

import $ from 'jquery';


export const ViewEditButton = () => {
  
    const onClickViewEdit=()=>{
        var selected_Id = sessionStorage.getItem("SelectedId");
        console.log(selected_Id);
        if(selected_Id==null){
            alert("Please select the application to be edited");
            window.location.reload();
            return;
        }
        var selected_Sales = sessionStorage.getItem("SelectedSales");
        var Salesname = sessionStorage.getItem("Sales_Name");
        if(selected_Sales!==Salesname){
            alert("You cannot edit applications of others");
            sessionStorage.removeItem("selectedId")
            window.location.reload();
            return;
        }

        $()
      

    }

    return (
        <React.Fragment>
            <button type="button" className="btn btn-success" id="viewedit" data-toggle="modal" data-target='#myViewEditModal' onClick={onClickViewEdit}>
                View/Edit Form
            </button>
        </React.Fragment>
    );
}; 