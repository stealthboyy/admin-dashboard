import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/header";
import { mockDataInvoices } from "../../data/mockData";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";



const Invoice = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID"
        },
        {field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
        },
        {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
          },
        {
        field: "email",
        headerName: "Mail",
        flex: 1,
        },
        {
            field: "cost",
            headerName: "Cost",
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell:(params) => {
                return (
                <Typography
                sx={{fontSize: "20px", fontWeight: "bold"}}
                  color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>)
            }},
            {
                field: "date",
                headerName: "Date",
                flex: 1,
              },
        
        
    ];
    return (
        <Box m={"20px"}>
            <Header display="flex" justifyContent="space-between" alignItems="center"
             title="INVOICE"
             subTitle="Professinal Invoices: Enhancing Payment Transactions." />  
            
            <Box    
                m="40px 0 0 0"
                height="75vh"
                sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    // borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    // backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
            }}>
        <DataGrid 
        sx={{fontSize: "20px"}}
        checkboxSelection = "true"
        rows={mockDataInvoices} 
        columns={columns} />
                
            </Box> 
        </Box>
    );
}

export default Invoice;