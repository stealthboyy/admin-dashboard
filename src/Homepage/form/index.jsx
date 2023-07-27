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
                validationSchema={checkoutTest} 
            >
               {({values, errors,touched, handleBlur,  handleChange, handleSubmit}) => (
                    <form 
                     onSubmit={handleSubmit} >
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{"& > div": { gridColumn: isNotMobile ? undefined : "span 2" }  }}
                        >
                            <TextField
                                        size="Normal"
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
                                        sx={{ gridColumn: "span 2"}}
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

            <Button 
            variant="contained"
            onClick = {() => {alert("PLEASE FILL THE FORM ACCURATELY.")}}
            sx= {{marginTop: "25px" }}
            color = "success">
                SUBMIT FORM
            </Button>
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
    firstName: yup.string().required("Required"), //if there is no input,upon validation give a required! message.
    lastName: yup.string().required("Required"),
    dateOfBirth: yup.string().required("Required"),
    email: yup.string().email("invalid email").required("Required"),
    contact: yup.string().required("Required"),
    address: yup.string().required("Required")
});
  

export default Form;
