import React from "react";
import axios from "axios";

export const DownloadButton = () => {

    
   
    const onClickDownload=()=>{
        var selected_Id = sessionStorage.getItem("SelectedId");
        if(selected_Id==="All"){
      
        axios
        .get("http://localhost:8080/allapplications")
        .then((response) => {
        const ApplicantList = response.data;
        
        console.log(ApplicantList);
        console.log(response);
        console.log(response.data);

        const Headers = [
            'Serial Number',
            'Customer ID',
            'Application ID',
            'Card Holder Name',
            'Application Form Status',
            'Date of Application',
            'Handled By Sales User'
        ];
            var csv = Headers.toString()+'\n';
            // const ReportAttributes = [
            //     'i',
            //     'customerId',
            //     'appId',
            //     'fullName',
            //     'status',
            //     'createDate',
            //     'salesName'
            // ];
        
            // var csv = Headers.toString() + '\n';

            console.log(ApplicantList.length);
            for (let i=0; i<ApplicantList.length; i++) {
            csv += (i+1)+","+ApplicantList[i].customerId+","+ApplicantList[i].appId+","+ApplicantList[i].fullName+","+ApplicantList[i].status+","+ApplicantList[i].createDate+","+ApplicantList[i].salesName+"\n";
            }   
            console.log(csv);
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'report.csv';
        hiddenElement.click();

        });
               }
        else{

        

        var selected_Application = JSON.parse(sessionStorage.getItem("SelectedApplication"));
        if(selected_Application==null){
            alert("Please select the application to be download");
            return;
        }
        console.log(selected_Application);
        var selected_Sales = sessionStorage.getItem("SelectedSales");
        var Salesname = sessionStorage.getItem("Sales_Name");
        if(selected_Sales!==Salesname){
            alert("You cannot download applications of others");
            return;
        }
        
        let txt;
        var r = confirm("Confirm to download application no:"+selected_Id);
        if(r){
            console.log(selected_Application.salesName);
            const Headers = [
                'Serial Number',
                'Customer ID',
                'Application ID',
                'Card Holder Name',
                'Customer Profile',
                'Application Form Status',
                'Date of Application',
                'Handled By Sales User',
                "Id Proof",
                "Address Proof",
                "Income Proof"
            ];
                var csv = Headers.toString()+'\n';
                // const ReportAttributes = [
                //     'i',
                //     'customerId',
                //     'appId',
                //     'fullName',
                //     'profile',
                //     'status',
                //     'createDate',
                //     'salesName',
                //     'idFile',
                //     'addressFile',
                //     'incomeFile'
                // ];
            
                // var csv = Headers.toString() + '\n';
                console.log(selected_Application.length);
               
                csv += "1,"+selected_Application.customerId+","+selected_Application.appId+","+selected_Application.fullName+","+selected_Application.profile+","+selected_Application.status+","+selected_Application.createDate+","+selected_Application.salesName+','+selected_Application.idFile+','+selected_Application.addressFile+','+selected_Application.incomeFile+"\n";
                
                
                
                console.log(csv);
            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'report.csv';
            hiddenElement.click();
    
           


            sessionStorage.removeItem('SelectedApplication');
            alert('Download Successful');
            window.location.reload();


        } else {
            txt="Download Cancelled."
            console.log(txt);
        }
    }

    }
    


    return (
        <React.Fragment>
                <button type="button" className="btn btn-primary" onClick={onClickDownload}>
                    Download Report
                </button>
        </React.Fragment>
    );
}; 
 
