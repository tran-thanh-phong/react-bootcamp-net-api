import React from 'react';
import { useParams } from 'react-router-dom';

function CryptoDetail() {
  const { cryptoSymbol, id } = useParams();
  return (
    <div className="text-white">
      <h4>Crypto Detail</h4>
      <p>Symbol: {cryptoSymbol}</p>
      <p>Id: {id}</p>
    </div>
  )
}

export default CryptoDetail