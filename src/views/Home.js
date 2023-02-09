import Box from '@mui/material/Box';
import { useGetAllProductsQuery } from '../features/products/productsApi';


function Home() {
 const {data, error, isLoading}= useGetAllProductsQuery()


 return (
    <Box
      sx={{
        margin: '96px'
      }}
    >
      <h1>Home</h1>
    </Box>

  )
}

export default Home