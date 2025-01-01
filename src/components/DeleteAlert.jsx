  import React from 'react';

  const DeleteAlert = ({ onConfirm, onCancel }) => {
    return (
      <div className='deletModal'>
        <p>Tem certeza de que deseja excluir?</p>
        <div className='buttons'> 
        <button className='buttonDeletModal' onClick={onConfirm}>Sim</button>
        <button  className='buttonDeletModal' onClick={onCancel}>Não</button>
        </div>   </div>
    );
  };

  export default DeleteAlert;