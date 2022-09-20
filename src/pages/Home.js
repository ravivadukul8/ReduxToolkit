import React from 'react'
import Product from '../components/Product'
function Home() {
  return (
    <div> 
    <h2> Welcome to the Redux Toolkit Store </h2>
    <section>
        <h3> Products </h3>
        <Product/>
    </section>
    </div>
  )
}

export default Home