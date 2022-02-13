import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import Layout from "../components/Layout";
import db from "../utils/db";
import NextLink from "next/link";
import Product from "../models/Product";

const Home = (props) => {
  const { products } = props;
  return (
    //Layout wraps all children below
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {/* Data is coming from data.js */}
          {products.map((product) => {
            return (
              <Grid item md={4} key={product.name}>
                <Card>
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={product.image}
                        title={product.name}
                      ></CardMedia>
                      <CardContent>
                        <Typography>{product.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>${product.price}</Typography>
                    <Button size="small" color="primary">
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
};
export default Home;
export async function getServerSideProps() {
  // Prerenders the get request from db
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      // products: products.map(db.convertDocToObj)
      products: products.map((product) => {
        return db.convertDocToObj(product);
      }),
    },
  };
}
