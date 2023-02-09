import ProductsOnSaleContainer from "./ProductsOnSaleContainer"
import ProductsOnCartContainer from "./ProductsOnCartContainer"
import Summary from './Summary';
import { useEffect } from "react";
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals } from "../../features/products/cartSlice";

function Cart() {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])


  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <Box sx={{
      margin: '20px 92px'
    }}>
      <h2 style={{ textAlign: 'center' }}>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <Box sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column',
          
        }}>
          <p>Your cart is empty</p>
          <Link to='/' style={{
            textDecoration: 'none',
            color: 'gray',
            color: 'gray',
            display: 'center',
            marginTop:'1rem'
          }}>
        Start shopping
          </Link>
        </Box>
      ) : (
        <Box>
          <Box sx={{
            margin: '2rem 0 1rem 0',
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: '3fr 1fr 1fr 1fr',
            columnGap: '8.5rem',

          }}>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </Box>
          <Box>
            {cart.cartItems?.map(cartItem => (
              <Box key={cartItem.id} sx={{
                display: 'grid',
                alignItems: 'center',
                gridTemplateColumns: '3fr 1fr 1fr 1fr',
                columnGap: '8.5rem',
                borderTop: '1px solid rgb(187,187,187)',
                padding: '1rem 0'
              }}>
                <Box sx={{
                  display: 'flex'
                }}>
                  <img src={cartItem.img} alt={cartItem.name} style={{
                    width: '100px',
                    maxWidth: '100%',
                    marginRight: '1rem'
                  }} />
                  <Box sx={{
                    paddingLeft: '0.5rem'
                  }}>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.featuresOne}</p>
                    <button style={{
                      border: 'none',
                      outline: 'none',
                      cursor: 'pointer',
                      marginTop: '0.7rem',
                      background: 'none',
                      color: 'gray'
                    }}
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >Remove</button>
                  </Box>
                </Box>
                <Box>${cartItem.minPrice}</Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  width: '130px',
                  maxWidth: '100%',
                  border: '0.5px solid rgb(177, 177, 177)',
                  borderRadius: '5px',

                }}>
                  <button style={{
                    border: 'none',
                    outline: 'none',
                    background: 'none',
                    padding: '0.7rem 1.5rem',
                    cursor: 'pointer'
                  }}
                    onClick={() => handleDecreaseCart(cartItem)}
                  >-</button>
                  <Box sx={{
                    padding: '0.7rem 0'
                  }}>{cartItem.cartQuantity}</Box>
                  <button style={{
                    border: 'none',
                    outline: 'none',
                    background: 'none',
                    padding: '0.7rem 1.5rem',
                    cursor: 'pointer'
                  }}
                    onClick={() => handleIncreaseCart(cartItem)}
                  >+</button>
                </Box>
                <Box sx={{
                  paddingRight: '0.5rem',
                  justifySelf: 'right',
                  fontWeight: '600'
                }}>${cartItem.minPrice * cartItem.cartQuantity}</Box>
              </Box>
            ))}
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            borderTop: '1px solid rgb(187,187,187)',
            paddingTop: '2rem',

          }}>
            <button style={{
              width: '130px',
              maxWidth: '100%',
              heigh: '40px',
              borderRadius: '5px',
              letterSpacing: '1.5px',
              border: '0.5px solid rgb(177,177,177)',
              color: 'gray',
              background: 'none',
              outline: 'none',
              cursor: 'pointer',
              padding: '8px 5px'
            }}
              onClick={() => handleClearCart()}
            >Clear Cart</button>
            <Box sx={{
              width: '270px',
              maxWidth: '100%'
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',

              }}>
                <span>Total</span>
                <span>${cart.cartTotalAmount}</span>
              </Box>
              <button style={{
                width: '100%',
                marginTop: '2rem',
                heigh: '40px',
                borderRadius: '5px',
                letterSpacing: '1.5px',
                border: 'none',
                outline: 'none',
                color: 'gray',
                background: '#E6E8E9',
                outline: 'none',
                cursor: 'pointer',
                padding: '8px 5px'
              }}>Check Out</button>
              <Box>
                <Link to='/' style={{
                  textDecoration: 'none',
                  color: 'gray',
                  display: 'center'
                }}>
                  <Box sx={{
                    marginTop: '1rem'
                  }}>
                    Continue shopping
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

      )
      }
    </Box>

  )
}

export default Cart

{/* <Box
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
</Box> */}