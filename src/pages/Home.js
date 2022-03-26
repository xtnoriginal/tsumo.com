import React from "react";
import HomeNavbar from "../layouts/home/HomeNavbar";
import DashboardNavbar from "../layouts/dashboard/DashboardNavbar";
import {Box, Button, Container, Grid, Link, Typography} from "@mui/material";
import {MotionContainer, varBounceIn} from "../components/animate";
import {motion} from "framer-motion";
import {Link as RouterLink} from "react-router-dom";
import {styled} from "@mui/material/styles";
import Page from "../components/Page";

import HomeCard from '../sections/home/HomeCard';


const RootStyle = styled(Page)(({ theme }) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
}));


export default function Home (){
    return(
        <Page title="Dashboard: Blog | Tsumo.com">
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Hi, Welcome back</Typography>
                </Box>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={3}>
                        <Link to='/course' color="inherit" underline="none" component={RouterLink}>
                            <HomeCard name='Courses' icon ='ant-design:laptop-outlined'/>
                        </Link>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to='/fees' color="inherit" underline="none" component={RouterLink}>
                            <HomeCard name='Fees' icon ='ant-design:dollar-outlined' />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to='/profile'  color="inherit" underline="none" component={RouterLink}>
                            <HomeCard name='Profile' icon ='ant-design:idcard-outlined'/>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to='/profile'  color="inherit" underline="none" component={RouterLink}>
                            <HomeCard name='Academic Record' icon ='ant-design:profile-outlined'/>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to='/profile'  color="inherit" underline="none" component={RouterLink}>
                            <HomeCard name='Exam Time-Table' icon ='ant-design:hourglass-outlined'/>
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Link to='/clubs'  color="inherit" underline="none" component={RouterLink}>
                            <HomeCard name='Clubs' icon ='ant-design:team-outlined'/>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to='/clubs'  color="inherit" underline="none" component={RouterLink}>
                            <HomeCard name='Sports' icon ='ant-design:dribbble-outlined'/>
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Link to='/help'  color="inherit" underline="none" component={RouterLink}>
                            <HomeCard name='Help' icon ='ant-design:question-circle-outlined'/>
                        </Link>
                    </Grid>


                </Grid>
            </Container>
        </Page>
    );

}