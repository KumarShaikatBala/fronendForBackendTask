"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import axios from "@/axios/axiosInstance";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {FormControl, InputLabel} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Registration() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPasword] = useState();
    const router = useRouter();
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        const updatedErrors = {};
        if (name !== "") {
            updatedErrors.name = "";
        } else {
            updatedErrors.name = "Input your name";
        }

        if (email !== "") {
            updatedErrors.email = "";
        } else {
            updatedErrors.email = "Input your email";
        }

        if (password !== "") {
            updatedErrors.password = "";
        } else {
            updatedErrors.password = "Input your password";
        }

        if (confirmPassword !== "") {
            updatedErrors.confirmPassword = "";
        } else {
            updatedErrors.confirmPassword = "Input your confirm password";
        }

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            ...updatedErrors,
        }));
    }, [name, password, confirmPassword]);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Provide your first name"),
        email: Yup.string().email("Provide a valid email address"),
        password: Yup.string().required("Provide a password"),
        confirmPassword: Yup.string().required("Provide a confirm password").oneOf([Yup.ref("password"), null], "Passwords must match")
    });
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await validationSchema.validate(
                {name, password, confirmPassword, email},
                {abortEarly: false}
            );
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("password_confirmation", confirmPassword);
            const response = await axios.post("register/", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
         if (response.data.status) {
                toast.success("Registration successful");
                router.push("/login");
            }
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = {};
                error.inner.forEach((err) => {
                    errors[err.path] = err.message;
                    toast(err.message);
                });
                setFormErrors(errors);
            } else {
                toast.error("error");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Container maxWidth="xs"
                       className="bg-white p-4 rounded-md shadow-lg overflow-auto max-h-full">
                <CssBaseline/>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5" className=" text-[30px] mt-2 font-semibold">
                        Registration
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{mt: 2}}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    size="medium"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Name"
                                    name="name"
                                    autoComplete="text"
                                    autoFocus
                                    value={name || ""}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    error={!!formErrors.name}
                                    helperText={formErrors.name && formErrors.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    size="medium"
                                    required={true}
                                    autoFocus
                                    value={email || ""}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    error={!!formErrors.email}
                                    helperText={formErrors.email && formErrors.email}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl variant="outlined" fullWidth error={!!formErrors.password}>
                                    <InputLabel htmlFor="outlined-adornment-password"

                                    >
                                        Password
                                        <span className="text-xs text-red"> *</span>
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    onMouseUp={handleMouseUpPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        value={password || ""}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        label="Password"
                                    />
                                </FormControl>
                            </Grid>


                            <Grid item xs={12}>

                                <FormControl variant="outlined" fullWidth error={!!formErrors.confirmPassword}>
                                    <InputLabel htmlFor="outlined-adornment-password"
                                    >
                                        Confirm Password
                                        <span className="text-xs text-red"> *</span>
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    onMouseUp={handleMouseUpPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        value={confirmPassword || ""}
                                        onChange={(e) => {
                                            setConfirmPasword(e.target.value);
                                        }}
                                        label="Confirm Password"
                                    />
                                </FormControl>

                            </Grid>

                        </Grid>
                        <Button
                            // type="submit"
                            onClick={handleSubmit}
                            fullWidth
                            variant="contained"
                            sx={{mt: 2, mb: 1}}
                            className="bg-blue-500 text-lg"

                        >
                            Register
                        </Button>
                        <div className="text-center">
                            <Link
                                href="/login"

                                className="py-2.5 px-5 me-2 mb-2 text-[20px] font-medium text-gray-900 focus:outline-none bg-white rounded-full  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                            >
                                Already have an account? Login
                            </Link>
                        </div>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}
