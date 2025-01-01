
import React from 'react';
import { AppProvider } from './contexts/AppContext';
import BooksPage from './pages/BooksPage';
import AuthorsPage from './pages/AuthorsPage';
import GlobalStyles from './styles/globalStyles';
import "./App.css"

const App = () => {
  return (
    <AppProvider>
      <GlobalStyles />
 
      <div className='contentPage' style={{ height: "100vh"}}>
        <div className='contentMenu' style={{width:800}}>
        <BooksPage />
        <AuthorsPage />
        </div>
        </div>
         </AppProvider>
  );
};

export default App;