import ProductsOnSaleContainer from "./ProductsOnSaleContainer"
import ProductsOnCartContainer from "./ProductsOnCartContainer"
import Summary from './Summary'
import Box from '@mui/material/Box';

function Cart() {

  return (
    <Box
    sx={{
      margin:'20px 92px'
    }}
    >
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
       

      }}
      >
        <ProductsOnCartContainer />
        <Summary />
      </Box>
      <ProductsOnSaleContainer />
    </Box>

  )
}

export default Cart