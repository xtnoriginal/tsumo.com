import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import {
    Card,
    CardHeader,
    Box,
    TextField,
    Avatar,
    InputLabel,
    FormControl,
    OutlinedInput,
    InputAdornment, IconButton, Button
} from '@mui/material';
//
import { BaseOptionChart } from '../../components/charts';
import React from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

// ----------------------------------------------------------------------


export default function ProfileCard() {

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <Card>
            <CardHeader title="Profile"/>
            <Box sx={{ p: 2, pb: 2 }} dir="ltr">
            </Box>

            <Box sx={{ justifyContent: 'center' }} >
                <Avatar
                    sx={{ width: 100, height: 100 }}
                />
            </Box>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >


                <div>
                    <TextField
                        id="outlined-textarea"
                        label="Name"
                        placeholder="John"

                    />
                    <TextField
                        id="outlined-textarea"
                        label="Surname"
                        placeholder="Doe"

                    />
                </div>

                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChangePassword('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <div>
                    <TextField
                        id="outlined-textarea"
                        label="E-mail"
                        placeholder="johndoe@tsumo.com"

                    />

                </div>
                <div>
                    <TextField
                        id="outlined-textarea"
                        label="Contact"
                        placeholder="0772222222"

                    />
                </div>

            </Box>

        </Card>
    );
}
