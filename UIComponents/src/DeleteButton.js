import React from "react";
import axios from "axios";



export const DeleteButton = () => {

    const onClickDelete=()=>{
        
        var selected_Application = JSON.parse(sessionStorage.getItem("SelectedApplication"));
        if(selected_Application==null){
            alert("Please select the application to be deleted");
            return;
        }
        console.log(selected_Application);
        var selected_Sales = sessionStorage.getItem("SelectedSales");
        var Salesname = sessionStorage.getItem("Sales_Name");
        if(selected_Sales!==Salesname){
            alert("You cannot delete applications of others");
            return;
        }
        var selected_Id = sessionStorage.getItem("SelectedId");
        let txt;
        var r = confirm("Confirm to delete application no:"+selected_Id);
        if(r){
            axios
            .delete("http://localhost:8080/"+selected_Id+"/")
            .then(res => console.log(res.data));
            
            sessionStorage.removeItem('SelectedApplication');
            alert("Application deleted");
            window.location.reload();


        } else {
            txt="Process Cancelled."
            console.log(txt);
        }

    }


    return (
        <React.Fragment>
            <button type="button" className="btn btn-danger" onClick={onClickDelete}>
                Delete Application
            </button>
        </React.Fragment>
    );
}; 