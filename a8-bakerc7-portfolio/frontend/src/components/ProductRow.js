import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';


function ProductRow({row}) {
    const {company, product, price} = row;
    const usdPrice = price.toLocaleString('en-US', {style: 'currency', currency: 'USD',
      });
    return (
        <tr>
            <td>{company}</td>
            <td>{product}</td>
            <td>{usdPrice}</td>
            <td><ProductQuantity /></td>
        </tr>
    );
};

export default ProductRow;