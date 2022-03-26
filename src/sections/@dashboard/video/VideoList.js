import PropTypes from 'prop-types';
// material
import {CardMedia, Grid} from '@mui/material';
import VideoCard from "./VideoCard";
import ShopProductCard from "../products/ProductCard";

// ----------------------------------------------------------------------

VideoList.propTypes = {
    products: PropTypes.array.isRequired
};

export default function VideoList({ products, ...other }) {
    return (
        <Grid container spacing={3} {...other}>
            {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={3}>

                    <VideoCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
}