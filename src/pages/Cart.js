import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../store/cartslice';


function Cart() {
    const product = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const handleremove = (productid) => {
        dispatch(remove(productid))
    }
 
  return (
    <div>{
        product.map(product => (
            <div className='card' key={product.id}>
            <img  src={product.image}/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn' onClick={(productid) => handleremove(product.id) }> Remove </button>
            </div>
        ))
    }

    </div>
  )
}

export default Cart