
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from '../contexts/AppContext';

const BookModal = ({ onClose, onSave }) => {
  const { authors } = useAppContext();
  const [form, setForm] = useState({ name: '', author_id: '', pages: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.author_id) {
      setError('Selecione um autor antes de salvar o livro.');
      return;
    }
    onSave({ ...form, id: uuidv4() });
  };

  return (
    <div className='modalLivro'>
      <h3>Adicionar Livro</h3>
      <form onSubmit={handleSubmit}>
        <input
                  className='inputLivro'
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <select
        className='selectLivro'
          value={form.author_id}
          onChange={(e) => setForm({ ...form, author_id: e.target.value })}
          required
        >
          <option value="">Selecione um autor</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <input
                  className='inputLivro'
          type="number"
          placeholder="Páginas"
          value={form.pages}
          onChange={(e) => setForm({ ...form, pages: e.target.value })}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className='buttonLivro' type="submit">Salvar</button>
        <button className='buttonLivro' type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default BookModal;