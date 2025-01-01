import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../App.css'
const AuthorModal = ({ onClose, onSave }) => {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, id: uuidv4() });
  };

  return (
    <div className='modalAuthor'>
      <h3>Adicionar Autor</h3>
      <form onSubmit={handleSubmit}>
        <input
          className='inputAutor'
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className='inputAutorEmail'

          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button className='buttonAuthor' type="submit">Salvar</button>
        <button   className='buttonAuthor'  type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default AuthorModal;