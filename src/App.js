import React from "react";
import "./index.css";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Card,
  CardActions,
  CardContent,
  Grid
} from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet
} from 'react-router-dom';


export default function App() {
  return (
    
    <div style={{padding:'2px', margin:'2px'}}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Guvi
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <br />
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         XYZ Organization
        </Typography>
        <Typography variant="h5" component="div">
         
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          India
        </Typography>
        <Typography variant="body2">
         Learning is the key to success.
          <br />
          {'"☺"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <br />
   
<br />
    
    <div>
     <BrowserRouter>
        <Button variant="contained" component={Link} to="/contactus">Contact Us</Button> &nbsp;
        <Button variant="contained" component={Link} to="/adminlogin">Admin Login</Button> &nbsp;
        <Button variant="contained" component={Link} to="/studentlogin">StudentLogin</Button> &nbsp;
        <Button variant="contained" component={Link} to="/Login">Login</Button> &nbsp;
  
        <Routes>
          <Route path = "/contactus" element={<ContactUs />}></Route>
          <Route path = "/adminlogin" element={<AdminLogin />}></Route>
          <Route path = "/studentlogin" element={<StudentLogin />}></Route>
          <Route path = "/Login" element={<Login />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
 </div>  
  );
}
function ContactUs() {
 const navigate = useNavigate();
  return (
    <>
    <br />
      <form className="contactus">
      <h3 className="heading"> Contact Us </h3>
        <label>First Name :&nbsp;</label>
        <input type="text" name="firstname" /><br /><br />
        <label> Last Name :&nbsp;</label>
        <input type="text" name="lastname" /><br /><br />
        <label>Email-Id &nbsp;&nbsp;&nbsp;:&nbsp;</label>
        <input type="email" name="email" /><br /><br />
        <label>Queries &nbsp;&nbsp;:&nbsp;</label>
        <input type="text" name="query" /><br /><br />
        <label>Mobile No :&nbsp;</label>
        <input type="number" name="mobile" /><br /><br />
        <button className="submit">Submit</button>
      </form>
     
      <button onClick={() => navigate(-1)}> Back</button>&nbsp;
    <button onClick={() => navigate(1)}> Forward</button>&nbsp;
    </>
  )
}

function AdminLogin() {
  const navigate = useNavigate();
   return (
     <>
       <form className="formBorder">
       <h3 className="heading">
       Admin Login 
       </h3>
        <label>User Name :&nbsp;&nbsp;</label>
        <input type="text" name="firstname" /><br />&nbsp;<br />
        <label>Password &nbsp;&nbsp;:&nbsp;&nbsp;</label>
        <input type="password" name="password" /><br />&nbsp;<br />
        <button className="submitbutton">Submit</button>
      </form><br />&nbsp;&nbsp;&nbsp;
       <button onClick={() => navigate(-1)}> Back</button>&nbsp;
    <button onClick={() => navigate(1)}> Forward</button>&nbsp;
     </>
   )
 }

 function StudentLogin() {
  const navigate = useNavigate();
   return (
     <>
       <form className="formBorder">
       <h3 className="heading">
       Student Login
       </h3>
        <label>User Name :&nbsp;&nbsp;</label>
        <input type="text" name="firstname" /><br />&nbsp;<br />
        <label>Password &nbsp;&nbsp;:&nbsp;&nbsp;</label>
        <input type="password" name="password" /><br />&nbsp;<br />
        <button className="submitbutton">Submit</button>
      </form><br />&nbsp;&nbsp;&nbsp;
       <button onClick={() => navigate(-1)}> Back</button>&nbsp;
    <button onClick={() => navigate(1)}> Forward</button>&nbsp;
     </>
   )
 }

 function Login() {
  const navigate = useNavigate();
   return (
     <>
       <form className="formBorder">
       <h3 className="heading">
        Login 
       </h3>
        <label>User Name :&nbsp;&nbsp;</label>
        <input type="text" name="firstname" /><br />&nbsp;<br />
        <label>Password &nbsp;&nbsp;:&nbsp;&nbsp;</label>
        <input type="password" name="password" /><br />&nbsp;<br />
        <button className="submitbutton">Submit</button>
      </form><br />&nbsp;&nbsp;&nbsp;
       <button onClick={() => navigate(-1)}> Back</button>&nbsp;
    <button onClick={() => navigate(1)}> Forward</button>&nbsp;
     </>
   )
 }