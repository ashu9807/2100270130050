import React from 'react';

function SortButtons({ setSortKey }) {
  return (
    <div>
      <button onClick={() => setSortKey('price')}>Sort by Price</button>
      <button onClick={() => setSortKey('rating')}>Sort by Rating</button>
      <button onClick={() => setSortKey('discount')}>Sort by Discount</button>
    </div>
  );
}

export default SortButtons;
