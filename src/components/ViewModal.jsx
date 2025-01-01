
import React from 'react';

const ViewModal = ({ data, onClose }) => {
  return (
    <div>
      <h3>Detalhes</h3>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <button className='buttonTable' onClick={onClose}>Fechar</button>
    </div>
  );
};
export default ViewModal;