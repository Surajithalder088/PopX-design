import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
    

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const valSet=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)

  }
  const valPas=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)

  }

  const loginHandler=async()=>{
    if(email==="" || password===""){
      alert("Please fill all the fields")
      return
    }
    console.log(email,password);
    
    
  }
  
  return (
    <>
   <div className="content">
  
    <p className="heading">
      Signin to your<br/>
      PopX account
    </p>
    <div className="body-login">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </div>
        <div className="input-container">
       
        <input value={email} onChange={valSet} type="email" className="input"placeholder="Enter Email address"/>
         <label className="label">Email Address</label>
        </div>
        <div className="input-container">
       
       <input value={password} onChange={valPas} type="password" className="input" placeholder="Enter Password"/>
        <label className="label">Password</label>
       </div>

       <div className="button">
       {
        email==="" ||password===""?(
            <button className="login-b" onClick={loginHandler}>Login</button>
        ):(
          <Link to='/profile'> <button className="login-b1" onClick={loginHandler}>Login</button></Link>
        )
       }
       
        </div>
      
   </div>
   </>
  )
}

export default Login