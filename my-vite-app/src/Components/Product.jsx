// 

import React from 'react';

function App() {
  // Step 1: Create an array with 6 items
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  return (
    <div>
      {/* Step 2: Use map to iterate over the array and render each item as a button */}
      {items.map((item, index) => (
        <button key={index} onClick={() => alert(`You clicked on ${item}`)}>
          {`Button ${index + 1}: ${item}`}
        </button>
      ))}
    </div>
  );
}

export default App;
