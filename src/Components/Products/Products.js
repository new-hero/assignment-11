import React, { useEffect, useState } from 'react';
// import UseProducts from '../../Hooks/UseProducts';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://protected-garden-39140.herokuapp.com/inventory')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[products])
    return (
        <div >
            <h2 className='mt-5'>Inventory</h2>
        <div className='productContainer'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Products;