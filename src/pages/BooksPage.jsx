import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import DataTable from '../components/DataTable';
import BookModal from '../components/BookModal';
import DeleteAlert from '../components/DeleteAlert';
import ViewModal from '../components/ViewModal';
import { v4 as uuidv4 } from 'uuid';  
import { Flex, Text, Button } from "@radix-ui/themes";

const BooksPage = () => {
  const { books, saveBooks, authors } = useAppContext();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isViewOpen, setViewOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const generateId = () => uuidv4(); 

  const handleAddBook = (book) => {
    book.id = generateId();
    saveBooks([...books, book]);
    setModalOpen(false);
  };

  const handleDeleteBook = (id) => {
    saveBooks(books.filter((book) => book.id !== id));
    setAlertOpen(false);
  };

  return (
    <div>
      <h2 style={{margin:0}}>Livros</h2>
      <Button color="gray" variant="classic" highContrast  onClick={() => setModalOpen(true)}>Adicionar Livro</Button>
      <br />
      <br />
      <DataTable
        data={books}
        onDelete={(book) => {
          setSelectedBook(book);
          setAlertOpen(true);
        }}
        onView={(book) => {
          setSelectedBook(book);
          setViewOpen(true);
        }}
      />
      {isModalOpen && <BookModal onClose={() => setModalOpen(false)} onSave={handleAddBook} authors={authors} />}
      {isAlertOpen && (
        <DeleteAlert
          onConfirm={() => handleDeleteBook(selectedBook.id)}
          onCancel={() => setAlertOpen(false)}
        />
      )}
      {isViewOpen && <ViewModal data={selectedBook} onClose={() => setViewOpen(false)} />}
    </div>
  );
};

export default BooksPage;
