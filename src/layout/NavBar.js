import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function NavBar() {
  return (
    <Box
    sx={{
      backgroundColor:"#E6E8E9",
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '15px 15px 15px 92px'

    }}
    >
      <Link href="/" underline="none" color="#535C67" margin="12px">All Products</Link>
      <Link href="/packaging" underline="none" color="#535C67" margin="12px">Packaging</Link>
      <Link href="/drinkware" underline="none" color="#535C67" margin="12px">Drinkware</Link>
      <Link href="/apparel" underline="none" color="#535C67" margin="12px">Apparel</Link>
      <Link href="/notebooks" underline="none" color="#535C67" margin="12px">Notebooks</Link>
      <Link href="/backpacks" underline="none" color="#535C67" margin="12px">Backpacks</Link>
    </Box>
  )
}

export default NavBar