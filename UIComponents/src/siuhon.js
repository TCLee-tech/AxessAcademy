import React from "react";
import axios from "axios";

const download_csv = () => {

    var ApplicantList = [];

    axios.get("http://localhost:8080/getreport").then(response => {
        ApplicantList = (response.data);
        console.log(ApplicantList);

    const Headers = [
        'Customer ID',
        'Serial Number',
        'Application ID',
        'Card Holder Name',
        'Application Form Status',
        'Age of Application',
        'Handled By Sales User'
    ];    

    const ReportAttributes = [
        'cid',
        'sino',
        'appid',
        'name',
        'status',
        'age',
        'agent'
    ];

    var csv = Headers.toString() + '\n';
    for (let i=0; i<ApplicantList.length; i++) {
        for(let j=0; j<ReportAttributes.length; j++){
            csv += ApplicantList[i][ReportAttributes[j]] + ',';
        };
        csv += '\n';
    };
 
    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'report.csv';
    hiddenElement.click();
});
}

export const DownloadButton = () => {
    return (
        <React.Fragment>
            <button type="button" className="btn btn-primary" onClick={download_csv}>
                Download Report
            </button>
        </React.Fragment>
    );
};