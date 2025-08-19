import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import './App.css';
import BodyHome from './components/Body/Home/BodyHome';
import BodyServices from './components/Body/Services/BodyServices';
import About from './components/Body/About/BodyAbout';

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<BodyHome />} />
      <Route path='/services' element={<BodyServices />} />
      <Route path='/about' element={<About />} />
    </Route>
  ))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
