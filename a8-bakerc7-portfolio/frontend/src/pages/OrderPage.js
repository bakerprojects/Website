import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js'; 
import products from '../data/products.js'

function OrderPage() {
    return (
        <>

            <h2>Ordering</h2>

            <article>
                <p>
                    Welcome to our ordering page. Here you can place an order from our list of products which you will find below.
                </p>

                <form action="/submitOrder" method="post">
                   
                    <fieldset>
                        <legend>Available Products</legend>
                        
                        <p>Select one product:</p>
                        
                        <table>
                            <caption>Product Information</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                            {products.map((product, index) => (
                            <ProductRow key={index} row={product} /> ))}
                            </tbody>
                            
                      
                        </table>
                        </fieldset>
                        
                        </form>
                        </article>
            

        </>
    );
}
export default OrderPage;