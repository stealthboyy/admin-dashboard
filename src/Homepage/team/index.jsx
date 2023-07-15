import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/header";
import { mockDataTeam } from "../../data/mockData";




const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", 
         headerName: "ID"
        },
        {field: "name",
         headerName: "Name",
         flex: 1,
         cellClassName: "name-column--cell"},

        {field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
        },

        {field: "phone", 
        headerName: "Phone Number",
        flex: 1,
        },

        {field: "email", 
         headerName: "Email",
        flex: 1,
        },

        {field: "access", 
        headerName: "Access-Level",
        flex: 1,
        headerAlign: "center",
        renderCell: ({row: {access}}) => {
            return (
                <Box width="70%" m="0 auto" p="5px" display="flex" justifyContent="center" 
                backgroundColor = {
                    access === "admin"
                    ? colors.redAccent[600]
                    : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.grey[900]}
                    borderRadius="3px"
                    >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
                {access === "user" && <SecurityOutlinedIcon/>}
                {access === "manager" && <LockOpenOutlinedIcon/>}
                        
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        {access}
                    </Typography>
                </Box>
            )
        }

        },
    ]
    return (
        <Box m="20px">
            <Header title="TEAM" subTitle="Manage your Team Members."/>
            <Box m="40px 0 0 0"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root" : {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                       borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[200],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[600],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                  },
               
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[100]} !important`,
                  },


            }}>
                <DataGrid style={{fontSize: "20px"}}
                checkboxSelection ="true"
                rows={mockDataTeam}
                columns={columns}/>
            </Box>
        </Box>
    );
};

export default Team;