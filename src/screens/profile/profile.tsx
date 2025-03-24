

const Profile = () => {
  return (
    <>
    <div className="content">
      <div className="tab">
        Account Settings
      </div>
      <div className="main">
        <div className="profile">
          <div className="pic">
            <img className="img1" src="/face.png" alt="profile" />
            <img className="img2" src="/camera.png" alt="profile" />
          </div>
          <div className="data">
           <p> <span className="name">Marry doe</span><br/>
            marry@gmail.com</p>
          </div>
        </div>
        <div className="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Reprehenderit eum vitae dolores, commodi delectus eligendi at corporis deleniti nulla eos.</div>
      </div>
    </div>
    </>
  )
}

export default Profile