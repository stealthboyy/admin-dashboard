import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/header";
import { mockDataContacts} from "../../data/mockData";
import { useTheme } from "@mui/material";




const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", 
         headerName: "ID",
         flex: 0.5
        },
        {field: "registrationId",
         headerName: "Serial ID"},
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
          },
          {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
          },
          {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
          },
          {
            field: "email",
            headerName: "Email",
            flex: 1,
          },
          {
            field: "address",
            headerName: "Address",
            flex: 1,
          },
          {
            field: "city",
            headerName: "City",
            flex: 1,
          },
          {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
          },
    ]
    return (
        <Box m="20px" >
            <Header display="flex" justifyContent="space-between" alignItems="center"
             title="CONTACTS" subTitle="List of Team Contacts. "/>
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
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.primary[100]} !important`,
                  },

            }}>
                <DataGrid style={{fontSize: "20px"}}
                checkboxSelection ="true"
                rows={mockDataContacts }
                columns={columns}
                components={{ Toolbar: GridToolbar }}/>
            </Box>
        </Box>
    );
};

export default Contacts;