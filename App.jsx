import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';

function App() {
  const [name, setName] = useState('John Doe');
  return (
    <div className="App">
      <h1>Welcome to React Debugging Sample</h1>
      <Greeting name={name} />
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
