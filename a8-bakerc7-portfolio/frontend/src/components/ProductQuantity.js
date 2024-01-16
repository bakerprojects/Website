import React, { useState } from 'react';

import { FiPlusCircle } from "react-icons/fi"; //<FiPlusCircle />
import { FiMinusCircle } from "react-icons/fi"; //<FiMinusCircle />

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const quantityIncrease = () => setQuantity(quantity + 1);
    const quantityDecrease = () => setQuantity(quantity - 1);
    return (
      <>
       
      <FiPlusCircle onClick={quantityIncrease} />
      <FiMinusCircle onClick={quantityDecrease} />
      <p>Updated Quantity: {quantity}</p>
      
      </>
    );
  }
  
  export default ProductQuantity;