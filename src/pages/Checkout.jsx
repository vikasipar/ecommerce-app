import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const token = useSelector(state => state.auth);
  const navigate = useNavigate();
  
  return (
    <div>
      {!token ? navigate('/auth') :
      <div>Checkout</div>}
    </div>
  );
}

export default Checkout;