import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  /* esta variavel so sera recriada na memoria quando algum desses objetos
      sofrer mudancas
  */
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  // Executa somente quando inicia, igual componentDidMount.
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
    /* Executa uma acao assim que o componente deixa de ser montado,
        usar dentro de qualquer useEffect()
    return() => {
      document.removeEventListener()
    }; */
  }, []);

  // Executa quando objeto sofrer auteracao, no caso: tech
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

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
      <strong>Voce tem {techSize} tecnologias</strong>
      <br />
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
