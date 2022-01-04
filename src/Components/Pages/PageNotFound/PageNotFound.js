import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../Images/NotFound/notFound.jpg';
import './PageNotFound.css';


const imgBg = {
    width: "1300px",
    height: "500px",
    backgroundImage: `url(${notFound})`
  };

const PageNotFound = () => {
    return (
        <div style={imgBg}>
            <button type="button" class="btn btn-success" className='notfound'>
                <NavLink to="/">
                     GO HOME
                </NavLink>
            </button>
        </div>
    );
};

export default PageNotFound;