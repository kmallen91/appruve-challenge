import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Pricing from './Pricing'
import { pricingContext } from './pricingContext';

function App() {
  const [tier, setTier] = useState({})

  useEffect(()=> {
    const tierItem = localStorage.getItem(tier)
    if (tierItem === 'bronze'){
      setTier({'bronze': true})
    } else if( tierItem === 'silver') 
    {setTier({'silver': true})
   } else if (setTier === 'gold') {
     setTier({'gold':true})
    }
  }, [])
  
  

  return (
    <div className="App">
      <pricingContext.Provider value={{tier, setTier}}>
        <Pricing />
      </pricingContext.Provider>
    </div>
  );
}

export default App;
