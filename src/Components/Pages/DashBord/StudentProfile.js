import { Link } from '@mui/material';
import React from 'react';
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
            <Link style={{padding:"20px 80px",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Student Profile</Link>
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
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
          </div>
          <div className="card-body pt-0">
            <table className="table table-bordered">
              <tr>
                <th width="30%">Roll</th>
                <td width="2%">:</td>
                <td>125</td>
              </tr>
              <tr>
                <th width="30%">Academic Year	</th>
                <td width="2%">:</td>
                <td>2020</td>
              </tr>
              <tr>
                <th width="30%">Gender</th>
                <td width="2%">:</td>
                <td>Male</td>
              </tr>
              <tr>
                <th width="30%">Religion</th>
                <td width="2%">:</td>
                <td>Group</td>
              </tr>
              <tr>
                <th width="30%">blood</th>
                <td width="2%">:</td>
                <td>B+</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default StudentProfile;