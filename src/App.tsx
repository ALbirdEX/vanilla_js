import React from 'react';

import './App.css';

function App() {

  const name = ["Alex", "Igor", " Dima", "Tema"]
  const users = [{name: "Alex1"}, {name: "Igor1"}, {name: " Dima1"}, {name: "Tema1"}]

  const elementLi1 = name.map((n,index) => <li key={index}>{n}</li>)
  const elementLi2 = users.map(u => <li>{u.name}</li>)

  return (
      <div className="App">
        <ul>
          HI!
          {elementLi1}
          {elementLi2}
        </ul>
      </div>
  );
}

export default App;