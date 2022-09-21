import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartslice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

export default function Product() {
    // const [products, setproducts] = useState([]);
    const { data: products, status } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
        // const fetchproducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setproducts(data)
        // }
        // fetchproducts()
    }, [])

    const addproduct = (product) => {
        dispatch(add(product))
    }

    if(status == STATUSES.LOADING) {
      return  <h1> Loading </h1>
    }

    if(status == STATUSES.ERROR) {
        return  <h1> SOMENTHING WANT WRONG </h1>
      }

  return (
    <div className='productsWrapper'>{
        products.map(product => (
            <div className='card' key={product.id}>
            <img  src={product.image}/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => {addproduct(product)}} className='btn'> Add to Cart </button>
            </div>
        ))
    }
    </div>
  )
}
