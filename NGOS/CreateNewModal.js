import React,{useState} from "react";

import axios from "axios";
import FILE from "./files.jfif";

import logo from './Standard_Chartered_(2021).svg.png';

export const CreateNewModal = (props) => {
  
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
    const today = new Date();
    

    if(!pproduct){setProduct("DigiSmart")};
    if(!pprofile){setProfile("New")};
   
    const [pstatus,setStatus]=useState("Submission Incomplete");
    console.log(setStatus);
   
		const addressFile = address_file;
		const createDate = today;
		const customerId = custId;
		const fullName = fullname;
		const idFile = id_file;
		const incomeFile = income_file;
		const product = pproduct;
		const profile = pprofile;
		const salesName = psalesName;
		const status = pstatus;

    const AddApplicationToDB =(newApplication) =>{
            console.log(newApplication);
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



            let addApp;
            axios 
            .post("http://localhost:8080/createapplicationlist",newApplication)

            .then((res)=>{
                addApp = res.data;
                console.log(res);
                console.log(addApp);
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
                alert("New Application Added Successfully");
                window.location.reload();
                
            }) 
            .catch((error)=>{
                console.log('Error',error);
                alert("Error adding new application to database")    
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
    
    const handleOnChangeFullname=(e)=>{
        // console.log(e);
        setFullname(e.target.value);
    }
    const handleOnChangeCustId=(e)=>{
        // console.log(e);
        setCustId(e.target.value);
    }
    const handleOnChangeProduct=(e)=>{
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

    
    const handleOnChangeIdP=async (e)=>{
        // console.log(e);
        setIdP(e.target.value);
        let imagefile=e.target.files[0];
        const byteFile = await getAsByteArray(imagefile); 
        sessionStorage.setItem("Idps","Loaded");
        var Adps = sessionStorage.getItem("Adps");
        var Inps = sessionStorage.getItem("Inps");
        if(Adps==="Loaded" && Inps==="Loaded"){
        setStatus("Pending");}
        document.getElementById("cidpimg").src=URL.createObjectURL(imagefile) ;
        
        setid_file( byteFile);
        
    }
    const handleOnChangeAdP=async (e)=>{
        // console.log(e);
        setAdP(e.target.value);
        let imagefile=e.target.files[0];
        const byteFile = await getAsByteArray(imagefile); 
        sessionStorage.setItem("Adps","Loaded");
        var Idps = sessionStorage.getItem("Idps");
        var Inps = sessionStorage.getItem("Inps");
        if(Idps==="Loaded" && Inps==="Loaded"){
        setStatus("Pending");}
        document.getElementById("cadpimg").src=URL.createObjectURL(imagefile) ;

        setaddress_file( byteFile);

    }
    const handleOnChangeInP=async (e)=>{
        // console.log(e);
        setInP(e.target.value);
        let imagefile=e.target.files[0];
        const byteFile = await getAsByteArray(imagefile); 
        sessionStorage.setItem("Inps","Loaded");
        var Adps = sessionStorage.getItem("Adps");
        var Idps = sessionStorage.getItem("Idps");
        if(Adps==="Loaded" && Idps==="Loaded"){
        setStatus("Pending");}
        document.getElementById("cinpimg").src=URL.createObjectURL(imagefile) ;

        setincome_file( byteFile);
  
    }
    const handleOnChangeProfile=(e)=>{
        // console.log(e);
        setProfile(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
		const newApplication={
            
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
         
        AddApplicationToDB(newApplication);
        
    }

    const handleReset=(e)=>{
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
        document.getElementById("cidpimg").src=FILE;
        document.getElementById("cadpimg").src=FILE;
        document.getElementById("cinpimg").src=FILE;
        document.getElementById("application-form").reset();
    }   

    return (
        <React.Fragment>
            {/* <!-- The Modal --> */}
  <div className="modal fade" id="myCreateNewModal">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
        <img src={logo} className="logo-sm" alt="logo" />
          <h4 className="modal-title">Create New</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div className="modal-body">
        
            <form name="form" id="application-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Full Name*:
                        <input type="text" 
                        name="fullname" 
                        id="fullname"
                        className="form-control" 
                        value={fullName}
                        onChange={handleOnChangeFullname} 
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
                        onChange={handleOnChangeCustId}
                        required={true}
                       />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Product*:
                        <select className="form-control" id="product" onChange={handleOnChangeProduct} required={true}>
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
                        onChange={handleOnChangeIdP}
                         />
                    </label>
                    <img src={FILE} id="cidpimg" alt="idproof"/>
                </div>
                <div className="form-group">
                    <label>
                        Address Proof:
                        <input type="file" 
                        name="addressProof" 
                        id="addressProof"
                        className="form-control" 
                        value={adp}
                        onChange={handleOnChangeAdP}
                         />
                    </label>
                    <img src={FILE} id="cadpimg" alt="addressproof"></img>
                </div>
                <div className="form-group">
                    <label>
                        Income Proof:
                        <input type="file" 
                        name="incomeProof" 
                        id="incomeProof"
                        className="form-control" 
                        value={inp}
                        onChange={handleOnChangeInP}
                       />
                    </label>
                    <img src={FILE} id="cinpimg" alt="incomeproof" ></img>
                </div>
                <div className="form-group">
                    <label>
                        Profile*:
                        <select className="form-control" id="profile" onChange={handleOnChangeProfile} required={true}>
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
          <button type="button" className="btn btn-warning" onClick={handleReset}>Clear</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
        </div>
        
      </div>
    </div>
  </div>
  
     
        </React.Fragment>
    );
      
}; 
