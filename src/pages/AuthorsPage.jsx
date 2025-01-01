import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import DataTable from '../components/DataTable';
import AuthorModal from '../components/AuthorModal';
import DeleteAlert from '../components/DeleteAlert';
import ViewModal from '../components/ViewModal'; 
import { Flex, Text, Button } from "@radix-ui/themes";

const AuthorsPage = () => {
  const { authors, saveAuthors } = useAppContext();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isViewOpen, setViewOpen] = useState(false);  
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAddAuthor = (author) => {
    const newId = (authors.length + 1).toString();
    saveAuthors([...authors, { ...author, id: newId }]);
    setModalOpen(false);
  };

  const handleDeleteAuthor = (id) => {
    const updatedAuthors = authors.filter((author) => author.id !== id);
    saveAuthors(updatedAuthors);
    setAlertOpen(false);
  };

  return (
    <div>
      <h2>Autores</h2>
      <Button color="gray" variant="classic" highContrast onClick={() => setModalOpen(true)}>
        Adicionar Autor
      </Button>
      <br /> <br />
      <DataTable
        data={authors}
        onDelete={(author) => {
          setSelectedAuthor(author);
          setAlertOpen(true);
        }}
        onView={(author) => {   
          setSelectedAuthor(author);
          setViewOpen(true);
        }}
      />
      {isModalOpen && (
        <AuthorModal onClose={() => setModalOpen(false)} onSave={handleAddAuthor} />
      )}
      {isAlertOpen && (
        <DeleteAlert
          onConfirm={() => handleDeleteAuthor(selectedAuthor.id)}
          onCancel={() => setAlertOpen(false)}
        />
      )}
      {isViewOpen && (   
        <ViewModal data={selectedAuthor} onClose={() => setViewOpen(false)} />
      )}
    </div>
  );
};

export default AuthorsPage;
