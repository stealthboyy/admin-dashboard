import { Box } from "@mui/material";
// import Typography from "@mui/material";
// import { useTheme }from "@mui/material";
// import { tokens } from "../../theme";
import Header from "../../components/header";

const Settings = () => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);


    return (
        <Box  m="20px">
            <Header title= "SETTINGS" subTitle={"Restore Default Settings"}/>
            <div className="settings-navbar">
                <button>Account Settings</button>
                <button>Login & Security</button>
                <button>NotificatIon Settings</button>
                <button>Interface</button>
                <button>Additional Settings</button>
            </div>

            <div>
                <p className="dp">Profile Picture</p>
                <Box className= "update-dp">
                            <img
                            alt="profile-img"
                            width="70px"
                            height="70px"
                            src= {`../../pictures/profilePicture.png`}
                            style={{ cursor: "pointer", borderRadius: "50%" }}
                            />
                            <div>
                            <button>Upload New </button>
                            <button>Remove Profile Picture</button>
                            </div>
                        </Box>

                <div>
                    
                </div>

            </div>
       
        </Box>



    );
};

export default Settings;
