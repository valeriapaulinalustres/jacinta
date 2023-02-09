import ProductOnSale from '../../components/ProductOnSale'
import productOnSale from '../../assets/img/productOnSale.svg'
import Box from '@mui/material/Box';

function ProductsOnSaleList() {
  
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
  //     img: productOnSale,
  //     name: "Unisex Short Sleeve T-Shirt",
  //     quantity: 0,
  //     featuresOne: "CardBoard Box",
  //     featuresTwo: "Unisex Short Sleeve T-Shirt",
  //     featuresThree: "Bassic Bottle",
  //     featuresOneOption: "(container)",
  //     featuresTwoOption: "(Green, Small)",
  //     featuresThreeOption: "(Blue)",
  //     minPrice: 10,
  //     maxPrice: 24,
  //     minimun: 24
  //   },
  //   {
  //     id: 2,
  //     img: productOnSale,
  //     name: "Unisex Short Sleeve T-Shirt",
  //     quantity: 0,
  //     featuresOne: "CardBoard Box",
  //     featuresTwo: "Unisex Short Sleeve T-Shirt",
  //     featuresThree: "Bassic Bottle",
  //     featuresOneOption: "(container)",
  //     featuresTwoOption: "(Green, Small)",
  //     featuresThreeOption: "(Blue)",
  //     minPrice: 10,
  //     maxPrice: 24,
  //     minimun: 24
  //   },
  //   {
  //     id: 3,
  //     img: productOnSale,
  //     name: "Unisex Short Sleeve T-Shirt",
  //     quantity: 0,
  //     featuresOne: "CardBoard Box",
  //     featuresTwo: "Unisex Short Sleeve T-Shirt",
  //     featuresThree: "Bassic Bottle",
  //     featuresOneOption: "(container)",
  //     featuresTwoOption: "(Green, Small)",
  //     featuresThreeOption: "(Blue)",
  //     minPrice: 10,
  //     maxPrice: 24,
  //     minimun: 24
  //   },
  //   {
  //     id: 4,
  //     img: productOnSale,
  //     name: "Unisex Short Sleeve T-Shirt",
  //     quantity: 0,
  //     featuresOne: "CardBoard Box",
  //     featuresTwo: "Unisex Short Sleeve T-Shirt",
  //     featuresThree: "Bassic Bottle",
  //     featuresOneOption: "(container)",
  //     featuresTwoOption: "(Green, Small)",
  //     featuresThreeOption: "(Blue)",
  //     minPrice: 10,
  //     maxPrice: 24,
  //     minimun: 24
  //   }
  // ]
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between'
    }}
    >
    {/* {products.map((item, index) => (
        <ProductOnSale 
        key={index} 
        name={item.name} 
        minPrice={item.minPrice} 
        maxPrice={item.maxPrice}
        img={item.img} 
        minimun={item.minimun} 
        />
    ))} */}
</Box>
  )
}

export default ProductsOnSaleList

