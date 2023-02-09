import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
//import cartProduct from '../../assets/img/cartProduct.svg'


// interface productsOnCartInterface {
//   id: number,
//   img: string,
//   name: string,
//   quantity: number,
//   featuresOne: string,
//   featuresTwo: string,
//   featuresThree: string,
//   featuresOneOption: string,
//   featuresTwoOption: string,
//   featuresThreeOption: string,
//   minPrice: number,
//   maxPrice: number,
//   minimun: number,
// }

// const products: Array<productsOnCartInterface> = [
//   {
//     id: 1,
//     img: cartProduct,
//     name: "My Christmas Pack",
//     quantity: 0,
//     featuresOne: "CardBoard Box",
//     featuresTwo: "Unisex Short Sleeve T-Shirt",
//     featuresThree: "Bassic Bottle",
//     featuresOneOption: "(container)",
//     featuresTwoOption: "(Green, Small)",
//     featuresThreeOption: "(Blue)",
//     minPrice: 71.20,
//     maxPrice: 80,
//     minimun: 50
//   },
//   {
//     id: 2,
//     img: cartProduct,
//     name: "Basic T-Shirt",
//     quantity: 0,
//     featuresOne: "CardBoard Box",
//     featuresTwo: "Unisex Short Sleeve T-Shirt",
//     featuresThree: "Bassic Bottle",
//     featuresOneOption: "(container)",
//     featuresTwoOption: "(Green, Small)",
//     featuresThreeOption: "(Blue)",
//     minPrice: 13.50,
//     maxPrice: 80,
//     minimun: 10
//   },
//   {
//     id: 3,
//     img: cartProduct,
//     name: "Woman Bottle",
//     quantity: 0,
//     featuresOne: "CardBoard Box",
//     featuresTwo: "Unisex Short Sleeve T-Shirt",
//     featuresThree: "Bassic Bottle",
//     featuresOneOption: "(container)",
//     featuresTwoOption: "(Green, Small)",
//     featuresThreeOption: "(Blue)",
//     minPrice: 36.50,
//     maxPrice: 80,
//     minimun: 20
//   }
// ]

// const productsSlice = createSlice({
//   name: "products",
//   initialState: products,
//   reducers: {

//     deleteProduct: (state, action) => {
//       const foundProduct = state.find((el) => el.id === action.payload);
//       if (foundProduct) {
//         state.splice(state.indexOf(foundProduct), 1);
//       }   
//     },
//     calculateTotal: (state:any, action) => {
//       const subtotals:number[] = []
//       const total:any = state.forEach((el:any) => {
//        const subtotal:number = el.minPrice * el.quantity
//        subtotals.push(subtotal)
//        console.log(action)
//       });
//       return total
//     }
//   },
// });

// export const { deleteProduct, calculateTotal } = productsSlice.actions;
// export default productsSlice.reducer;

const initialState = {
  items: [],
  status: null,
  error: null

}

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id=null, {rejectWithValue}) => {
    try {
      const response = await axios.get('http://localhost:8080/products')
      return response?.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
   
   
  }
)

const productsSlice = createSlice({
name: "products",
initialState,
reducers: {},
extraReducers: {
  [productsFetch.pending]: (state,action)=>{
    state.status = "pending"
  },
  [productsFetch.fulfilled]: (state,action)=>{
    state.status = "success"
    state.items = action.payload
  },
  [productsFetch.rejected]: (state,action)=>{
    state.status = "rejected"
    state.error = action.payload
  }

}
})

export default productsSlice.reducer