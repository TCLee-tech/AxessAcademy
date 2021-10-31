import React,{useState,useEffect} from "react";
import axios from "axios";
import { DownloadButton } from "./DownloadButton";
import { CreateButton} from "./CreateButton";
import { ViewEditButton} from "./ViewEditButton";
import { ViewEditModal} from "./ViewEditModal";
import { CreateNewModal} from "./CreateNewModal";
import {DeleteButton} from "./DeleteButton";


export const ApplicationList = () => {
  
  const [applicants,setApplicants] =useState([]);
 

   const getApplicantList = () =>{
     axios
     .get("http://localhost:8080/allapplications")
     .then((response) => {
      const ApplicantList = response.data;
      setApplicants(ApplicantList.sort((a, b) => (a.appId > b.appId) ? 1 : -1));
      sessionStorage.setItem("AllApplications",JSON.stringify(ApplicantList));
      console.log(response);
      console.log(response.data);
   });
  };

   useEffect(()=>{
     getApplicantList();
   },[]);

  
  
  // let UserName;

  // UserName= sessionStorage.getItem("Sales_Name");
  let precheck="off";

  const onChangeAll=(e)=>{
    // let checked = e.target.value;
    if(precheck==="off"){
      sessionStorage.setItem("SelectedId","All");
      precheck="off";
      } else {
        sessionStorage.setItem("SelectedId","");
        precheck="on";
      }
    }

    
  

  const onChangeRadio=(index)=>{
    const buttonIndex= index;
    
    if(buttonIndex!=null){
          let application=[];
          application=applicants[buttonIndex];
          console.log(application);
          console.log(application.appId);
          sessionStorage.setItem("SelectedApplication",JSON.stringify(application));
          sessionStorage.setItem("SelectedSales",applicants[buttonIndex].salesName);
          sessionStorage.setItem("SelectedId",applicants[buttonIndex].appId);
    }
    // var selected_Id = sessionStorage.getItem("SelectedID");
    console.log(buttonIndex);
  

  } 
  return (
   <React.Fragment>
       <div className="container">
        <table className="table table-striped">
            <thead id="lgscrn">
              <tr>
                <th scope="col" className="cbox"><input type="checkbox" id="all" onClick={onChangeAll}></input></th>
                <th scope="col" className="sn">#</th>
                <th scope="col" className="cid">Cust_ID</th>
                <th scope="col" className="appid">A#</th>
                <th scope="col" className="chname">Card Holder Name</th>
                <th scope="col" className="afs">Application Form Status</th>
                <th scope="col" className="age">Date of Application</th>
                <th scope="col" className="su">Handled By Sales User</th>
              </tr>
            </thead>
            </table>
            <div className="container-table">
              
              <table className="table table-striped">
                <thead id="smscrn">
                  <tr>
                    <th scope="col" className="cbox"></th>
                    <th scope="col" className="sn">#</th>
                    <th scope="col" className="cid">Cust_ID</th>
                    <th scope="col" className="appid">A#</th>
                    <th scope="col" className="chname">Card Holder Name</th>
                    <th scope="col" className="afs">Application Form Status</th>
                    <th scope="col" className="age">Date of Application</th>
                    <th scope="col" className="su">Handled By Sales User</th>
                  </tr>
                </thead>
              <tbody>

              {applicants.map((applicant,index)=>(
              <tr  key={index+1}>
                <td className="cbox"><input type="radio" name="applicationSelect" value={applicant.appId} onClick={() => onChangeRadio(index)}></input></td>
                <td className="sn">{index+1}</td>
                <td className="cid">{applicant.customerId}</td>
                <td className="appid">{applicant.appId}</td>
                <td className="chname">{applicant.fullName}</td>
                <td className="afs">{applicant.status}</td>
                <td className="age">{applicant.createDate}</td>
                <td className="su">{applicant.salesName}</td>
              </tr>
              ))}
              
          </tbody>
        </table>
        </div>
    {/* <button type="button" className="btn btn-success" >View/Edit Form</button> */}
    <ViewEditButton/>            
    {/* <button type="button" className="btn btn-light" >Create New</button> */}
    <CreateButton/>
    {/* <button type="button" className="btn btn-secondary" >Download Report</button> */}
    <DownloadButton/>
    <DeleteButton/>
  
    </div>
    <ViewEditModal/>
    <CreateNewModal/>
    </React.Fragment>
  );
}


