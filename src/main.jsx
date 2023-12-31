import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FavoriteProvider } from './contect/favoriteContect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FavoriteProvider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </FavoriteProvider>
  //  </React.StrictMode>
)
