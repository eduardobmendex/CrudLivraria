
import React from 'react';

const DataTable = ({ data, onDelete, onView }) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
            <td>
              <button className='buttonTable' onClick={() => onView(item)}>Visualizar</button>
              <button className='buttonTable' onClick={() => onDelete(item)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;