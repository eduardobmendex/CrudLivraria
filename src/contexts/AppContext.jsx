
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || []);
  const [authors, setAuthors] = useState(JSON.parse(localStorage.getItem('authors')) || []);

  const saveBooks = (newBooks) => {
    setBooks(newBooks);
    localStorage.setItem('books', JSON.stringify(newBooks));
  };

  const saveAuthors = (newAuthors) => {
    setAuthors(newAuthors);
    localStorage.setItem('authors', JSON.stringify(newAuthors));

     const updatedBooks = books.filter((book) =>
      newAuthors.some((author) => author.id === book.author_id)
    );
    saveBooks(updatedBooks);
  };

  return (
    <AppContext.Provider value={{ books, authors, saveBooks, saveAuthors }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);