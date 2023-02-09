//import Button from '../../components/Button'
import { useDispatch, useSelector } from "react-redux";
//import { calculateTotal } from '../../features/products/productsSlice';
//import Box from '@mui/material/Box';
import { Box, Button, Stack } from '@mui/material';
//import Button from '@mui/material'
import { useEffect, useState } from "react";


function Summary() {

    // const [totalValue, setTotalValue] = useState<number>(0)
    // const dispatch = useDispatch();
    // const products = useSelector((state: any) => state.products);

   // const total: any = dispatch(calculateTotal(1))
  //  console.log(total)


// const calculateTotal = () => {
//     const subtotals:number[] = []
//     console.log(products)
//     const total = products.forEach((el:any) => {
//      const subtotal:number = el.minPrice * el.quantity
//      subtotals.push(subtotal)
//      console.log(subtotals)
//   setTotalValue(subtotals.reduce((a,b)=>a+b,0))
//     });
//     return total
//   }

//   useEffect(() => {
   
// calculateTotal()
  
//   }, [products])
    
    return (
        <Box
            sx={{
                width: '20%'
            }}
        >
            <h2>
                Order Summary
            </h2>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #E6E8E9'
                }}
            >
                <h4>
                    Number of items
                </h4>
                <h4>
                    {/* {products.length} */}
                </h4>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                }}
            >
                <h2>
                    Total:
                </h2>
                <h2>
                    {/* $ {totalValue} */}
                </h2>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Button 
                sx={{
                    backgroundColor: '#3A4451',
                    color:'#ffffff',
                    margin:'6px 0px',
                    padding:'12px 24px',
                    borderRadius:'8px'
                }}
                >
                    Proceed to Checkout
                </Button>
                <Button 
                sx={{
                    backgroundColor: '#ffffff',
                    color:'#3A4451',
                    border:'2px solid #091625',
                 margin:'6px 0px',
                 padding:'12px 24px',
                 borderRadius:'8px'
                
                }}
                >
                    Continue Shopping
                </Button>
            </Box>
        </Box>
    )
}

export default Summary