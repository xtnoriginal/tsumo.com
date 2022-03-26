import { useFormik } from 'formik';
import { useState } from 'react';
// material
import {
    Avatar,
    Button,
    Card, Checkbox,
    Container, Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableHead, TablePagination,
    TableRow,
    Typography
} from '@mui/material';
// components
import Page from '../components/Page';
import {
    ProductSort,
    ProductList,
    ProductCartWidget,
    ProductFilterSidebar
} from '../sections/@dashboard/products';
//
import PRODUCTS from '../_mocks_/products';
import {VideoList} from "../sections/@dashboard/video";
import products from "../_mocks_/products";
import {filter} from "lodash";
import USERLIST from "../_mocks_/user";
import {Link as RouterLink} from "react-router-dom";
import Iconify from "../components/Iconify";
import Scrollbar from "../components/Scrollbar";
import {UserListHead, UserMoreMenu} from "../sections/@dashboard/user";
import Label from "../components/Label";
import {sentenceCase} from "change-case";
import SearchNotFound from "../components/SearchNotFound";

// ----------------------------------------------------------------------

function createData(name,score, percentage ) {
    return { name, score, percentage};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7 ),
    createData('Gingerbread', 356, 16.0),
];



export default function Grades() {

    return (

        <Page title="Grade| Tsumo.com">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Grades
                    </Typography>

                </Stack>

                <Card>

                    <Scrollbar>

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Title</TableCell>
                                        <TableCell align="right">Score</TableCell>
                                        <TableCell align="right">Percentage</TableCell>
                                    </TableRow>
                                </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                               <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >


                               <TableCell align="left" component="th" scope="row">
                                    {row.name}
                               </TableCell>
                               <TableCell align="right">{row.score}</TableCell>
                              <TableCell align="right">{row.percentage}</TableCell>

                            </TableRow>
                            ))}
                            </TableBody>
                            </Table>
                            </TableContainer>


                    </Scrollbar>

                </Card>
            </Container>
        </Page>
    );
}
