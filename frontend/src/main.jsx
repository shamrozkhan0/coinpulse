import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./context/context";
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
<ThemeProvider>
   <BrowserRouter>
     <App />
   </BrowserRouter>
</ThemeProvider>

);
