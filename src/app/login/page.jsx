"use client";
import Loading from "@/app/components/common/Loading";
import axios from "@/axios/axiosInstance";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {setCookie} from "nookies";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import * as Yup from "yup";
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import {FormControl, FormHelperText, InputLabel} from "@mui/material";

export default function LogIn() {
    const [username, setUser] = React.useState();
    const [password, setPassword] = React.useState();
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        const updatedErrors = {};

        if (username !== "") {
            updatedErrors.username = "";
        } else {
            updatedErrors.username = "Email is Required";
        }
        if (password !== "") {
            updatedErrors.password = "";
        } else {
            updatedErrors.password = "Password is Required";
        }

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            ...updatedErrors,
        }));
    }, [username, password]);

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Email is Required"),
        password: Yup.string().required("Password is Required"),
    });
    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        try {
            await validationSchema.validate(
                {username, password},
                {abortEarly: false}
            );
            axios
                .post("login/", {
                    email: username,
                    password: password,
                    login_details: navigator.userAgent ? navigator.userAgent : "",
                })
                .then(
                    (response) => {
                        if (response.data?.status) {
                            toast.success("Login Successful");
                            const type = btoa(response.data?.type);
                            if (typeof window !== "undefined") {
                                localStorage.setItem("token", response.data?.token);
                                setCookie(null, "token", response.data?.token, {});
                                setCookie(null, "type", type);
                            }
                            setIsLoading(false);
                            if (response.data?.type === "admin") {
                                router.push("/user/dashboard");
                            } else {
                                router.push("/user/orders");
                            }
                        }
                    },
                    (error) => {
                        setIsLoading(false);
                    }
                );
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = {};
                error.inner.forEach((err) => {
                    errors[err.path] = err.message;
                    toast.warning(errors[err.path]);
                });
                setFormErrors(errors);
            } else {
                toast.error("error");
            }
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Container maxWidth="xs"
                       className="bg-white p-5 rounded-md shadow-lg overflow-auto max-h-full">
                <CssBaseline/>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h2" variant="h5">
                        <p
                            className="font-semibold text-[25px] mt-4">
                            Login
                        </p>
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            type="email"
                            id="username"
                            label="Email"
                            name="username"
                            autoComplete="text"
                            size="medium"
                            autoFocus
                            value={username || ""}
                            onChange={(e) => setUser(e.target.value)}
                            error={!!formErrors.username}
                            helperText={formErrors.username && formErrors.username}
                        />
                        <FormControl variant="outlined" fullWidth margin="normal" error={!!formErrors.password}>
                            <InputLabel htmlFor="outlined-adornment-password"
                            >Password
                                <span className="text-xs text-red"> *</span>
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                className='w-full'
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
                                onChange={(e) => setPassword(e.target.value)}
                                label="Password"
                            />
                            {!!formErrors.password && <FormHelperText
                            >{formErrors.password}</FormHelperText>}
                        </FormControl>

                        {isLoading ? (
                            <div className="text-center">
                                <Loading/>
                            </div>
                        ) : (
                            <>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{my: 2}}
                                    className="bg-blue-500"
                                    disabled={isLoading}
                                >
                                    <p className=" text-[16px]">
                                        Log In
                                    </p>
                                </Button>
                                <hr/>
                                <div className="text-center my-2">
                                    <div className="text-sm">
                                        Not Registered Yet?
                                    </div>
                                    <Link href="/register">
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            className="bg-cyan-600 mb-2"
                                            disabled={isLoading}
                                        >
                                            <p
                                                className=" text-[16px]">
                                                Register
                                            </p>
                                        </Button>
                                    </Link>

                                </div>
                                {/*<div className="text-center mt-2">
                                    <Link href="/reset-password">
                                        <div className="text-md underline text-blue-700 hover:text-indigo-500"
                                             style={{fontFamily: "Noto Serif Bengali"}}>
                                            {"পাসওয়ার্ড মনে নেই?"}
                                        </div>
                                    </Link>
                                </div>*/}
                            </>
                        )}
                    </Box>
                </Box>
            </Container>
        </div>
    );
}
