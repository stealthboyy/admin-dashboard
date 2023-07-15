import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/header";
import useMediaQuery from "@mui/material/useMediaQuery";

const Form = () => {
    const isNotMobile = useMediaQuery("(min-width:600px)");  //trigers the layout when the view is not a mobile device size

    const handleFormSubmit = (values) => { 
        console.log(values); 
    }
    return ( 
        <Box m={"20px"}>
            <Header 
                title={"CREATE A USER PROFILE"}
                subTitle={"Personalize Your Digital Identity: Creating Your User Profile."}
            />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationTest={checkoutTest} 
            >
               {({values, errors,touched, handleBlur,  handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit} >
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            fontSize={"20px"}
                        >
                            <TextField
                            
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="First Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        name="firstName"
                                        error={!!touched.firstName && !!errors.firstName}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{ gridColumn: "span 2" }}
                                        sx={{fontSize: "40px"}}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Last Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        name="lastName"
                                        error={!!touched.lastName && !!errors.lastName}
                                        helperText={touched.lastName && errors.lastName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        name="email"
                                        error={!!touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Contact Number"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.contact}
                                        name="contact"
                                        error={!!touched.contact && !!errors.contact}
                                        helperText={touched.contact && errors.contact}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Address 1"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address}
                                        name="address"
                                        error={!!touched.address && !!errors.address}
                                        helperText={touched.address && errors.address}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Date Of Birth"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.dateOfBirth}
                                        name="dateOfBirth"
                                        error={!!touched.dateOfBirth && !!errors.dateOfBirth}
                                        helperText={touched.dateOfBirth && errors.dateOfBirth}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                        </Box>
                    </form>
               )}
            </Formik>
        </Box>
    );
};

const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    contact: "",
    address: "",
    
  };

const checkoutTest = yup.object().shape ({
    firstName: yup.string().required("required"), //if there is no input,upon validation give a required! message.
    lastName: yup.string().required("required"),
    dateOfBirth: yup.string().required("required"),
    email: yup.string().required("required"),
    contact: yup.string().required("required"),
    address: yup.string().required("required")
});
  

export default Form;
