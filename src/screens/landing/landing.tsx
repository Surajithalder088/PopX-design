import { Link } from "react-router-dom"



const Landing = () => {
  return (
    <div className="landing">
      <div className="contentl">
        <p className="headingl">
          Welcome to PopX
        </p>
        <div className="body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </div>
        <div className="button">
         <Link to='/signup'> <button className="b1">Create Account</button></Link>
        </div>
        <div className="button">
         <Link to='/login'> <button className="b2">Already Registered ?Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Landing