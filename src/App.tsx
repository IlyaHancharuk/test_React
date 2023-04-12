import React from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import OnOff from './Components/OnOff/OnOff';
import Counter from './Components/Counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <Accordion titleValue={'Menu 1'} />
      <Accordion titleValue={'Munu 2'} />
      <OnOff isOn={true} />
      <OnOff isOn={false} /> */}

      <Counter />

    </div>
  );
}

export default App;
