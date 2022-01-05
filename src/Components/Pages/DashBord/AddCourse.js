import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';

const AddCourse = () => {

    return (
        <div>
            <center><h2>Add Course</h2></center>
            <div style={{display:'flex',justifyContent:"center"}}>
    
    <Box
sx={{
width: "50%",
maxWidth: '100%',
}}
>

<TextField style={{margin:"20px 0px"}} fullWidth label="Course Title" id="fullWidth" />
<Divider />
<TextField style={{margin:"20px 0px"}} fullWidth label="Course Title" id="fullWidth" />
<Divider />
<TextField style={{margin:"20px 0px"}} fullWidth label="Course Title" id="fullWidth" />
<Divider />
<TextField style={{margin:"20px 0px"}} fullWidth label="Course Title" id="fullWidth" />
<Divider />
<TextField style={{margin:"20px 0px"}} fullWidth label="Course Title" id="fullWidth" />
</Box>
</div>
        </div>
    );
};

export default AddCourse;