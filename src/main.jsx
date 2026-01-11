import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProductsProvider } from './ProductContext.jsx'
import './index.css'
import { HashRouter } from "react-router-dom";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
<ProductsProvider>
 <HashRouter>
  <App />
</HashRouter>
</ProductsProvider>
  </StrictMode>,
)
