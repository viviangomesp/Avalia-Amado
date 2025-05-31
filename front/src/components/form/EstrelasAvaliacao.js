import React, { useState } from 'react';
import styles from './EstrelasAvaliacao.module.css';

function EstrelasAvaliacao({ value, onChange }) {
  const [hover, setHover] = useState(null);

  return (
    <div className={styles.estrelas}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            (hover || value) >= star ? styles.estrelaAtiva : styles.estrela
          }
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default EstrelasAvaliacao;