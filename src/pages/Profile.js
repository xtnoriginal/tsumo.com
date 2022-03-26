// material
import {Box, Grid, Container, Typography, Avatar, TextField} from '@mui/material';
// components
import Page from '../components/Page';
import React from "react";
import {
    AppTasks,
    AppNewUsers,
    AppBugReports,
    AppItemOrders,
    AppNewsUpdate,
    AppWeeklySales,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppCurrentSubject,
    AppConversionRates
} from '../sections/@dashboard/app';
import account from "../_mocks_/account";
import {ProfileCard} from "../sections/profile";

// ----------------------------------------------------------------------

export default function Profile() {



    return (
        <Page title="Dashboard | Tsumo.com">
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Hi, Welcome back</Typography>
                </Box>


                <Grid container spacing={3}>


                    <ProfileCard/>


                </Grid>
            </Container>
        </Page>
    );
}
