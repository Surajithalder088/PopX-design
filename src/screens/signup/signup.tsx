import { useState } from "react"
import { Link } from "react-router-dom"

const Signup = () => {
const [name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[phone,setPhone]=useState("")
const[company,setCompany]=useState("")
const[agency,setAgency]=useState("")

const emailSet=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setEmail(e.target.value)

}
const nameSet=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setName(e.target.value)

}
const phoneSet=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setPhone(e.target.value)

}
const passwordSet=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setPassword(e.target.value)

}
const companySet=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setCompany(e.target.value)

}
const radioSet=(e:React.ChangeEvent<HTMLInputElement>)=>{
setAgency(e.target.value)
}
const signinHandler=()=>{
 if( email==="" ||password===""||name==="" ||phone===""){
  alert("all fields are required")
  return
 }
 console.log(email,name,phone,password,company);
 
}

  return (
    <>
    <div className="content">
    <p className="headingS">
      Create your<br/>PopX account
    </p>
    <div className="form">
    <div className="input-container">
       
        <input value={name} onChange={nameSet} type="string" className="input"placeholder="Enter Email address"/>
         <label className="label">Full Name<span>*</span></label>
        </div>
        <div className="input-container">
       
        <input value={phone} onChange={phoneSet} type="string" className="input"placeholder="Enter Email address"/>
         <label className="label">Phone number<span>*</span></label>
        </div>
        <div className="input-container">
       
        <input value={email} onChange={emailSet} type="email" className="input"placeholder="Enter Email address"/>
         <label className="label">Email address<span>*</span></label>
        </div>
        <div className="input-container">
       
        <input value={password} onChange={passwordSet} type="password" className="input"placeholder="Enter Email address"/>
         <label className="label">password<span>*</span></label>
        </div>
        <div className="input-container">
       
        <input value={company} onChange={companySet} type="string" className="input"placeholder="Enter Email address"/>
         <label className="label">Company name</label>
        </div>
        </div>

        <p className="agency">Are you an Agency?<span>*</span></p>
        <div className="radio">
          <div className="radioIn">
        <input type="radio" value="yes" name="agency" checked={agency==="yes"} onChange={radioSet}/> 
        <label>Yes</label></div>
        <div className="radioIn">
         <input type="radio" value="no" name="agency" checked={agency==="no"} onChange={radioSet}/>
         <label>No</label>
         </div>
         </div>

         <div className="buttonS">
       {
        email==="" ||password===""||name==="" ||phone===""?(
            <button className="login-b" onClick={signinHandler}>Create Account</button>
        ):(
          <Link to='/profile'> <button className="login-b1" onClick={signinHandler}>Create Account</button></Link>
        )
       }
       
        </div>
    </div>
    </>
  )
}

export default Signup