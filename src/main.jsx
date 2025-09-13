import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { SearchFilterProvider } from './context/SearchFilterContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchFilterProvider>
      <App />
    </SearchFilterProvider>
  </StrictMode>,
)
