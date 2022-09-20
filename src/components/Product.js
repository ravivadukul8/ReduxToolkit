import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartslice';

export default function Product() {
    const [products, setproducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchproducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setproducts(data)
        }
        fetchproducts()
    }, [])

    const addproduct = (product) => {
        dispatch(add(product))
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
