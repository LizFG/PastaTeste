import React, { useState } from "react";

function MeuComponente() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Valor do contador: {contador}</h1>
      <button onClick={aumentarContador}>Aumentar</button>
    </div>
  );
}

export default MeuComponente;
