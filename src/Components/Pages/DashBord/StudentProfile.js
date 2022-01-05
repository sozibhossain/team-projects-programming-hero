import { Link } from '@mui/material';
import React from 'react';
import StudentGeneralInfo from './StudentGeneralInfo';
import './StudentProfile.css';

const StudentProfile = () => {
    return (
        <div>
            {/* <!-- Student Profile --> */}
<div className="student-profile py-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent text-center">
            <img className="profile_img" src="https://placeimg.com/640/480/arch/any" alt=""/>
            <h3>Ishmam Ahasan Samin</h3>
          </div>
          <div className="d-flex justify-content-center">
          <div className="card-body" style={{height:"50%"}}> 
            <Link to="/generel-info" style={{padding:"20px 80px",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Student Profile</Link>
            <br/>
            <Link style={{padding:"20px 10%",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Address</Link>
            <br/>
            <Link style={{padding:"20px 10%",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Education</Link>
            <br/>
            <Link style={{padding:"20px 10%",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Enroled Course</Link>
            <br/>
          </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card shadow-sm">
          <StudentGeneralInfo></StudentGeneralInfo>
        {/* <Router>
          <Routes>
          <Route path="/generel-info" element={<StudentGeneralInfo />}></Route>
          </Routes>
        </Router> */}
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default StudentProfile;