import React, { useState } from 'react';
import styles from './EstrelasAvaliacao.module.css';

// Componente para exibir estrelas de avaliação
function EstrelasAvaliacao({ value, onChange }) {
  const [hover, setHover] = useState(null); // Estado para armazenar a estrela

  return (
    <div className={styles.estrelas}>
      {[1, 2, 3, 4, 5].map((star) => ( // Mapeia as estrelas de 1 a 5
        <span
          key={star}
          className={
            (hover || value) >= star ? styles.estrelaAtiva : styles.estrela // Define a classe da estrela com base no hover ou valor
          }
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)} // Define a estrela em hover
          onMouseLeave={() => setHover(null)} // Limpa o hover ao sair do mouse
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default EstrelasAvaliacao;