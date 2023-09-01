// import { Box } from "@mui/material";
// import Typography from "@mui/material";
// import { useTheme }from "@mui/material";
// import { tokens } from "../../theme";
// import Header from "../../components/header";
import { useState } from "react";

const Settings = () => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
        const [name, setName] = useState('John Doe');
        const [email, setEmail] = useState('johndoe@example.com');
        const [password, setPassword] = useState('');
      
        const handleNameChange = (event) => {
          setName(event.target.value);
        };
      
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
        };
      
        const handlePasswordChange = (event) => {
          setPassword(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Implement logic to update user's account settings
        };
      
        return (
          <div className="account-settings">
            <h2 className="account-settings-title">Account Settings</h2>
            <form className="account-settings-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name:</label>
                <input className="form-input" type="text" value={name} onChange={handleNameChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Email:</label>
                <input className="form-input" type="email" value={email} onChange={handleEmailChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Password:</label>
                <input className="form-input" type="password" value={password} onChange={handlePasswordChange} />
              </div>
              <button className="form-button" type="submit">Save Changes</button>
            </form>
          </div>
        );
      };
      

    // return (
    //     <Box  m="20px">
    //         <Header title= "SETTINGS" subTitle={"Restore Default Settings"}/>
    //         <div className="settings-navbar">
    //             <button>Account Settings</button>
    //             <button>Login & Security</button>
    //             <button>NotificatIon Settings</button>
    //             <button>Interface</button>
    //             <button>Additional Settings</button>
    //         </div>
    //     </Box>



    // );


export default Settings;
