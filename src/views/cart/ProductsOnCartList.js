import ProductOnCart from '../../components/ProductOnCart'
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';

function ProductsOnCartList() {

  // const dispatch = useDispatch();
  // const products = useSelector((state:any) => state.products);
 
  return (
    <Box
    sx={{
      marginRight:'15px'
    }}
    >
      <h2>
           Your Products
        </h2>
        {/* {products.map((item:any, index:any) => (
        <ProductOnCart 
        key={index} 
        id={item.id}
        name={item.name} 
        minPrice={item.minPrice} 
        maxPrice={item.maxPrice}
        img={item.img} 
        minimun={item.minimun} 
        quantity={item.quantity}
        /> */}
    {/* ))} */}
    </Box>
  )
}

export default ProductsOnCartList