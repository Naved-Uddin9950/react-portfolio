import './App.css';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from './contexts/themeContext';

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider value={{theme, setTheme}}>
      <div className='dark:bg-gray-800'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
