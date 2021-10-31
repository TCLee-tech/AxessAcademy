import React,{useState} from "react";
import logo from './Standard_Chartered_(2021).svg.png';
import axios from "axios";
import FILE from "./files.jfif";



export const ViewEditModal = (props) => {
 
    // let selected_Id=selected_Application.appId;
    

    const [fullname,setFullname] = useState("");
    const [custId,setCustId] = useState("");
    const [pproduct,setProduct] = useState("");
    const [idp,setIdP] = useState("");
    const [id_file,setid_file]=useState(null);
    const [adp,setAdP] = useState("");
    const [address_file,setaddress_file]=useState(null);
    const [inp,setInP] = useState("");
    const [income_file,setincome_file]=useState(null);
    const [pprofile,setProfile] = useState("");
    const psalesName= sessionStorage.getItem("Sales_Name");
    
    
    

    if(!pproduct){setProduct("DigiSmart")};
    if(!pprofile){setProfile("New")};
   
    const [pstatus,setStatus]=useState("Submission Incomplete");
    console.log(setStatus);
    let pcreateDate;
    const addressFile = address_file;
    const createDate = pcreateDate;
    console.log(createDate);
    const customerId = custId;
    const fullName = fullname;
    const idFile = id_file;
    const incomeFile = income_file;
    const product = pproduct;
    const profile = pprofile;
    const salesName = psalesName;
    console.log(salesName);
    const status = pstatus;

    const updateApplicationToDB =(updateApplication) =>{
            // console.log(updateApplication);
            // let formData =new FormData();
            // formData.append('address_file',this.state.address_file)
            // formData.append('createDate',today)
            // formData.append('customerId',this.state.custId)
            // formData.append('fullName',this.state.fullname)
            // formData.append('idFile', this.state.id_file)
            // formData.append('incomeFile',this.state.income_file)
            // formData.append('product',this.state.pproduct)
            // formData.append('profile',this.state.pprofile)
            // formData.append('salesName',psalesName)
            // formData.append('status',pstatus)

            var selected_Id = sessionStorage.getItem("SelectedId");

            let updateApp;
            axios 
            .put("http://localhost:8080/updateapplicationlist/"+selected_Id+"/",updateApplication)

            .then((res)=>{
                updateApp = res.data;
                console.log(res);
                console.log(updateApp);
                setFullname("");
                setCustId("");
                setProduct("");
                setIdP("");
                setid_file("");
                setAdP("");
                setaddress_file("")
                setInP("");
                setincome_file("")
                setProfile("New");
                setStatus("Submission Incomplete");
                sessionStorage.removeItem("Idps");
                sessionStorage.removeItem("Adps");
                sessionStorage.removeItem("Inps");
                document.getElementById("idpimg").src=FILE;
                document.getElementById("adpimg").src=FILE;
                document.getElementById("inpimg").src=FILE;
                document.getElementById("application-form").reset();
                alert("Application Updated Successfully");
                window.location.reload();
            }) 
            .catch((error)=>{
                console.log('Error',error);
                alert("Error updating application to database")    
            });
         };
    
        //  function readFileDataAsBase64(e) {
        //     const file = e.target.files[0];
        
        //     return new Promise((resolve, reject) => {
        //         const reader = new FileReader();
        
        //         reader.onload = (event) => {
        //             resolve(event.target.result);
        //         };
        
        //         reader.onerror = (err) => {
        //             reject(err);
        //         };
        
        //         reader.readAsBinaryString(file);
        //     });
        // }
    
      const loadsession=()=>{
        const selected_Id = sessionStorage.getItem("SelectedID");
        console.log(selected_Id);
      }

     const populate=()=>{
        var selected_Application = JSON.parse(sessionStorage.getItem("SelectedApplication"));
        console.log(selected_Application);
        document.getElementById('sid').innerHTML=selected_Application.appId;
        setFullname(selected_Application.fullName);
        setCustId(selected_Application.customerId);
        setProduct(selected_Application.product);
        document.getElementById("product").value=selected_Application.product;
        var idimage = new Image();
        idimage = 'data:image/png;base64,'+selected_Application.idFile;
        document.getElementById("idpimg").src=idimage;
        var adimage = new Image();
        adimage = 'data:image/png;base64,'+selected_Application.addressFile;
        document.getElementById("adpimg").src=adimage;
        var inimage = new Image();
        inimage = 'data:image/png;base64,'+selected_Application.incomeFile;
        document.getElementById("inpimg").src=inimage;
        setProfile(selected_Application.profile);
        document.getElementById("profile").value=selected_Application.profile;

     }   
    const vehandleOnChangeFullname=(e)=>{
        // console.log(e);
        setFullname(e.target.value);
    }
    const vehandleOnChangeCustId=(e)=>{
        // console.log(e);
        setCustId(e.target.value);
    }
    const vehandleOnChangeProduct=(e)=>{
        // console.log(e);
        setProduct(e.target.value);
    }
    async function getAsByteArray(file) {
        var unit8array=new Uint8Array(await readFile(file))
        var fileByteArray = [];

        for (var i = 0; i < unit8array.length; i++) {
         fileByteArray.push(unit8array[i]);
        } 
        return fileByteArray;
      }

             

      function readFile(file) {
        return new Promise((resolve, reject) => {
          // Create file reader
          let reader = new FileReader()
          // Register event listeners
          reader.addEventListener("loadend", e => resolve(e.target.result))
          reader.addEventListener("error", reject)
          // Read file
          reader.readAsArrayBuffer(file)
        })
      }

    
    const vehandleOnChangeIdP=async (e)=>{
        // console.log(e);
        setIdP(e.target.value);
        let imagefile=e.target.files[0];
        const byteFile = await getAsByteArray(imagefile); 
        sessionStorage.setItem("Idps","Loaded");
        var Adps = sessionStorage.getItem("Adps");
        var Inps = sessionStorage.getItem("Inps");
        if(Adps==="Loaded" && Inps==="Loaded"){
        setStatus("Pending");}
        document.getElementById("idpimg").src=URL.createObjectURL(imagefile) ;
        
        setid_file( byteFile);
        
    }
    const vehandleOnChangeAdP=async (e)=>{
        // console.log(e);
        setAdP(e.target.value);
        let imagefile=e.target.files[0];
        const byteFile = await getAsByteArray(imagefile); 
        sessionStorage.setItem("Adps","Loaded");
        var Idps = sessionStorage.getItem("Idps");
        var Inps = sessionStorage.getItem("Inps");
        if(Idps==="Loaded" && Inps==="Loaded"){
        setStatus("Pending");}
        document.getElementById("adpimg").src=URL.createObjectURL(imagefile) ;

        setaddress_file( byteFile);

    }
    const vehandleOnChangeInP=async (e)=>{
        // console.log(e);
        setInP(e.target.value);
        let imagefile=e.target.files[0];
        const byteFile = await getAsByteArray(imagefile); 
        sessionStorage.setItem("Inps","Loaded");
        var Adps = sessionStorage.getItem("Adps");
        var Idps = sessionStorage.getItem("Idps");
        if(Adps==="Loaded" && Idps==="Loaded"){
        setStatus("Pending");}
        document.getElementById("inpimg").src=URL.createObjectURL(imagefile) ;

        setincome_file( byteFile);
  
    }
    const vehandleOnChangeProfile=(e)=>{
        // console.log(e);
        setProfile(e.target.value);
    }

    const vehandleSubmit=(e)=>{

        e.preventDefault();

        var selected_Application = JSON.parse(sessionStorage.getItem("SelectedApplication"));
        if (adp===undefined){setaddress_file(selected_Application.addressFile);} 
        else {const addressFile = address_file;console.log(addressFile);}
		const createDate = selected_Application.createDate;
        if(custId===undefined){const customerId = selected_Application.customerId;console.log(customerId);}
        else{const customerId = custId;console.log(customerId);}
		if(fullname===undefined){const fullName = selected_Application.fullName;console.log(fullName);}
        else{const fullName = fullname;console.log(fullName);}
		if(idp===undefined){setid_file(selected_Application.idFile);console.log(idFile);}
        else{const idFile = id_file;console.log(idFile);}
		if(inp===undefined){setincome_file(selected_Application.incomeFile);console.log(incomeFile);}
        else{const incomeFile = income_file;console.log(incomeFile);}
		if(product===undefined){const product = selected_Application.product;console.log(product);}
		else{const product = pproduct;console.log(product);}
        if(profile===undefined){const profile = selected_Application.profile;console.log(profile);}
		else{const profile = pprofile;console.log(profile);}
		const salesName = psalesName;
        if(idFile===null||addressFile===null||incomeFile===null){const status ="Submission Incomplete";console.log(status);}
		else{const status = "Pending";console.log(status);}

		const updateApplication={
            
            addressFile,
            createDate,
            customerId,
            fullName,
            idFile,
            incomeFile,
            product,
            profile,
            salesName,
            status
        }
        updateApplicationToDB(updateApplication);
    }
    const vehandleReset=(e)=>{
        setFullname("");
        setCustId("");
        setProduct("");
        setIdP("");
        setid_file("");
        setAdP("");
        setaddress_file("")
        setInP("");
        setincome_file("")
        setProfile("New");
        setStatus("Submission Incomplete");
        sessionStorage.removeItem("Idps");
        sessionStorage.removeItem("Adps");
        sessionStorage.removeItem("Inps");
        document.getElementById("idpimg").src=FILE;
        document.getElementById("adpimg").src=FILE;
        document.getElementById("inpimg").src=FILE;
        document.getElementById("application-form").reset();
    }   

    return (
        <React.Fragment>
            {/* <!-- The Modal --> */}
  <div className="modal fade" id="myViewEditModal" onLoad={loadsession} >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
        <img src={logo} className="logo-sm" alt="logo" />
          <h4 className="modal-title">View Edit Application <a id="sid"></a></h4>
          <button type="button" className="btn btn-light" onClick={populate}>Show Info</button>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div className="modal-body">
            <form name="form" id="application-form" onSubmit={vehandleSubmit}>
                <div className="form-group">
                    <label>
                        Full Name*:
                        <input type="text" 
                        name="fullname" 
                        id="fullname"
                        className="form-control" 
                        value={fullName}
                        onChange={vehandleOnChangeFullname} 
                        required={true}
                       />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Identity Number*:
                        <input type="text" 
                        name="custId" 
                        id="custId"
                        className="form-control" 
                        value={custId}
                        onChange={vehandleOnChangeCustId}
                        required={true}
                       />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Product*:
                        <select className="form-control" id="product" onChange={vehandleOnChangeProduct} required={true}>
                            <option value="DigiSmart">DigiSmart</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Gold">Gold</option>
                            <option value="Standard">Standard</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        ID Proof:
                        <input type="file" 
                        name="idProof" 
                        id="idProof"
                        className="form-control" 
                        value={idp}
                        onChange={vehandleOnChangeIdP}
                         />
                    </label>
                    <img src={FILE} id="idpimg" alt="id"/>
                </div>
                <div className="form-group">
                    <label>
                        Address Proof:
                        <input type="file" 
                        name="addressProof" 
                        id="addressProof"
                        className="form-control" 
                        value={adp}
                        onChange={vehandleOnChangeAdP}
                         />
                    </label>
                    <img src={FILE} id="adpimg" alt="address" />
                </div>
                <div className="form-group">
                    <label>
                        Income Proof:
                        <input type="file" 
                        name="incomeProof" 
                        id="incomeProof"
                        className="form-control" 
                        value={inp}
                        onChange={vehandleOnChangeInP}
                       />
                    </label>
                    <img src={FILE} id="inpimg" alt="income"/>
                </div>
                <div className="form-group">
                    <label>
                        Profile*:
                        <select className="form-control" id="profile" onChange={vehandleOnChangeProfile} required={true}>
                            <option value="New">---New---</option>
                            <option value="Existing">Existing</option>
                        </select>
                    </label>
                </div>
                <input type="submit" className="btn btn-primary" name="Submit" />
            </form>
        </div>
        
        {/* <!-- Modal footer --> */}
        <div className="modal-footer">
       
          <button type="button" className="btn btn-warning" onClick={vehandleReset}>Clear</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
        </div>
        
      </div>
    </div>
  </div>
  

        </React.Fragment>
    );
}; 