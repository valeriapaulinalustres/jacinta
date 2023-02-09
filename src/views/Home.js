import Box from '@mui/material/Box';
import { productsApi, useGetAllProductsQuery } from '../features/products/productsApi';
//import { useSelector } from 'react-redux'; este es para cuando se usa solamente axios y no rtk
import { useDispatch } from 'react-redux';
import {addToCart} from '../features/products/cartSlice'

function Home() {
 // const {items, status} = useSelector(state=>state.products) este es para cuando se usa solamente axios y no rtk
 const {data, error, isLoading}= useGetAllProductsQuery()
const dispatch = useDispatch()

 const handleAddToCart = product => {
dispatch(addToCart(product))
 }

 return (
    <Box
      sx={{
        margin: '96px',
      }}
    >
      {isLoading? (
      <p>Loading...</p>
      ) : error ? (
<p>An error occurred</p>
      ) : (
        <>
        <h1>Products</h1>
        <Box sx={{
           display: 'flex',
           flexDirection: 'row',
           justifyContent: 'space-between',
   flexWrap: 'wrap',
   marginTop: '2rem',
        }}
        
        >
          {data.map(product => <Box 
          key={product.id}
          sx={{
           width: '250px',
           maxWidth: '100%',
           height: '320px',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'space-between',
margin:'1rem auto',
padding: '1rem',
borderRadius: '15px',
boxShadow: '-5px -5px 10px rgba(255, 255, 255, 0.5), 2px 2px 5px rgba(94, 104, 121, 0.3) ',
          }}
          >
            <h3>{product.name}</h3>
            <img 
            src={product.img} 
            alt={product.name} 
            style={{
              width: '220px',
              marginTop: '1rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '1rem'
            }}>

            </img>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <h3>{product.featuresOne}</h3>
            <h5>${product.minPrice}</h5>
            </Box>
            
            <button style={{
width: '100%',
height: '48px',
borderRadius: '5px',
marginTop: '2rem',
fontWeight: '400',
border:'none',
outline:'none',
cursor: 'pointer',
letterSpacing: '1.5px'
            }}
            onClick={()=>handleAddToCart(product)}
            >
              Add to cart
              </button>
             </Box>)}
        </Box>
        </>
      )
    }


    </Box>

  )
}

export default Home