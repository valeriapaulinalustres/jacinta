import Box from '@mui/material/Box';
import ProductsOnCartList from "./ProductsOnCartList"

function ProductsOnCartContainer() {
  return (
    <Box
    sx={{
      width:'80%'
    }}
    >
      <ProductsOnCartList />
    </Box>
  )
}

export default ProductsOnCartContainer