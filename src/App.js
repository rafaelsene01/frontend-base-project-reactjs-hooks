import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['React Js', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }
  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        value={newTech}
        type="text"
        onChange={e => setNewTech(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
