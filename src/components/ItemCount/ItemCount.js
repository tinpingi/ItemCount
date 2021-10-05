import React, { useState } from 'react';



const ItemCount = ()=> {
  const [counter, setCounter] = useState(0);
  
  const handleCounterUp = () => {
		setCounter(counter + 1);
	};


  return(
    <div className='CounterSection'>
				<h3>Contador: {counter}</h3>
				
				<div className='btn-section'>
					<button onClick={handleCounterUp}>+</button>
					<button onClick={() => setCounter(counter - 1)}>-</button>
				</div>
			</div>
  );
};

export default ItemCount;