import remove from '../assets/img/remove.svg'
//import cartProduct from '../assets/img/cart-product.svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
//import { deleteProduct } from "../features/products/productsSlice";
import {Box, Select, FormControl, InputLabel, MenuItem} from '@mui/material';



function ProductOnCart({ img, name, minPrice, quantity, id }) {
    const [selectedQuantity, setSelectedQuantity] = useState(1)

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);


    const numbersSelect = [1, 2, 3, 4, 5];

    // const forQuantity = () =>{

    //     for (let i = 1; i < quantity ; i++) {
    //         numbersSelect.push(i)  
    //         console.log(i)  
    //         console.log(quantity) 
    //       } 

    // }
    // useEffect(() => {
    //     forQuantity()

    // }, [])



    // const listItems:any = numbersSelect.map((number, index) =>
    // <option value={number} key={index}>{number}</option>
    // );

    function handleSubmit(e) {
        e.preventDefault();
        setSelectedQuantity(e.target.value);
    }


    // const subtotal: number = selectedQuantity * minPrice


    // const handleDelete = (id: number) => {
    //     //  console.log(id)
    //     dispatch(deleteProduct(id));
    // };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems:'flex-start',
                borderBottom: '1px solid #CED0D3',
            }}
        >
            <Box
            sx={{
                marginRight:'12px'
            }}
            >
            <img src={img} alt={name} />
            </Box>
            
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    width:'100%'
                }}
            >
                <Box>
                    <h4>{name}</h4>
                    <FormControl sx={{display:"flex", flexDirection:"row"}}>
                        <InputLabel>
                        Quantity:
                        </InputLabel>
                        <Select name="quantity" variant="standard" 
                        onChange={handleSubmit}
                        >
                            {numbersSelect.map((number, index) =>
                                <MenuItem value={number} key={index}>{number}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <Box 
                    // onClick={() => { handleDelete(id) }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                        sx={{
                            marginRight:'6px'
                        }}
                        >
                        <img src={remove} alt="delete icon" />
                        </Box>
                        <h6>Remove</h6>
                    </Box>
                </Box>
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    alignItems:'flex-end'
                }}
                >
                    <h3>
                        $ {minPrice}
                    </h3>
                    <h3>
                        Total: $ 
                        {/* {subtotal} */}
                    </h3>
                </Box>
            </Box>


        </Box>
    )
}

export default ProductOnCart