import React from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="Calc">

      <CalculatorDisplay />

      <div className="calc-subcontent">

      <ActionButton buttonStyle="action" text="clear"/>

      <NumberButton buttonStyle="operators" text="/"/>

      </div>

      <div className="calc-subcontent">

      <NumberButton buttonStyle="number" text="7"/>
      <NumberButton buttonStyle="number" text="8"/>
      <NumberButton buttonStyle="number" text="9"/>
      <NumberButton buttonStyle="operators" text="X"/>

      </div>

      <div className="calc-subcontent"> 

      <NumberButton buttonStyle="number" text="4"/>
      <NumberButton buttonStyle="number" text="5"/>
      <NumberButton buttonStyle="number" text="6"/>
      <NumberButton buttonStyle="operators" text="-"/>

      </div>


      <div className="calc-subcontent"> 

      <NumberButton buttonStyle="number" text="1"/>
      <NumberButton buttonStyle="number" text="2"/>
      <NumberButton buttonStyle="number" text="3"/>
      <NumberButton buttonStyle="operators" text="+"/>

      </div>

      <div className="calc-subcontent"> 
      
      <ActionButton buttonStyle="action" text="0"/>

      <NumberButton buttonStyle="operators" text="="/>

      </div>

    </div> //main div
  );
};

export default App;
