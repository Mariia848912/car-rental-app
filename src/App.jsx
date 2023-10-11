import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
import { SharedLayout } from "./components/SharedLayout";
import { ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
const HomePage = lazy(() => import('./pages/Home/Home'));
const CatalogPage = lazy(() => import('./pages/Catalog/Catalog'));
const FavoritesPage = lazy(() => import('./pages/Favorites/Favorites'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFound'));


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
