import express from 'express';
import cors from 'cors';
import {products} from './products.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send("welcome")
})

app.get('/products', (req,res)=>{
    res.send(products)
})

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})