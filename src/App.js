import React from 'react';
import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>
          <Navbar />
          <Form />
        </LanguageProvider>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
