import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
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

// ----------------------------------------------------------------------

export default function Chat() {
    const [openFilter, setOpenFilter] = useState(false);

    const formik = useFormik({
        initialValues: {
            gender: '',
            category: '',
            colors: '',
            priceRange: '',
            rating: ''
        },
        onSubmit: () => {
            setOpenFilter(false);
        }
    });

    const { resetForm, handleSubmit } = formik;

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const handleResetFilter = () => {
        handleSubmit();
        resetForm();
    };

    return (
        <Page title="Dashboard: Products | Tsumo.com">
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Chat
                </Typography>

                <Stack
                    direction="row"
                    flexWrap="wrap-reverse"
                    alignItems="center"
                    justifyContent="flex-end"
                    sx={{ mb: 5 }}
                >
                    <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                        <ProductFilterSidebar
                            formik={formik}
                            isOpenFilter={openFilter}
                            onResetFilter={handleResetFilter}
                            onOpenFilter={handleOpenFilter}
                            onCloseFilter={handleCloseFilter}
                        />
                        <ProductSort />
                    </Stack>
                </Stack>



            </Container>
        </Page>
    );
}
