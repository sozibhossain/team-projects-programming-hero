import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import AddBlog from './AddBlog';
import AddCourse from './AddCourse';
import Address from './Address';
import Education from './Education';
import Enroled from './Enroled';
import StudentGeneralInfo from './StudentGeneralInfo';
import './StudentProfile.css';

const StudentProfile = () => {
//   const GeneralInformation = () => <StudentGeneralInfo/>
// const Profile = () => <h1>Profile</h1>;
// const Settings = () => <h1>Settings</h1>;
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
            <Link to="/" style={{padding:"20px 80px",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Student Profile</Link>
            <br/>
            <Link to="dashboard/address" style={{padding:"20px 10%",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Address</Link>
            <br/>
            <Link to="dashboard/education" style={{padding:"20px 10%",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Education</Link>
            <br/>
            <Link to="dashboard/enroled" style={{padding:"20px 10%",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Enroled Course</Link>
            <br/>
            <Link to="dashboard/addCourses" style={{padding:"20px 10%",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Add Course</Link>
            <br/>
            <Link to="dashboard/addBlog" style={{padding:"20px 10%",backgroundColor:"#800080", width:"100%",textDecoration:"none",cursor:"pointer",color:"white",display:"block",textAlign:"center"}}>Add Blog</Link>
            <br/>
          </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card shadow-sm">
        <Routes>
        <Route path="/" element={<StudentGeneralInfo />} />
        <Route path="dashboard/address" element={<Address />} />
        <Route path="dashboard/education" element={<Education />} />
        <Route path="dashboard/enroled" element={<Enroled />} />
        <Route path="dashboard/addCourses" element={<AddCourse />} />
        <Route path="dashboard/addBlog" element={<AddBlog />} />
      </Routes>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default StudentProfile;