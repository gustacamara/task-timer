import { Routes, Route } from 'react-router-dom'

import { History } from './pages/History';
import { Home } from './pages/home'
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router () {
  return(
    <Routes>
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/' element={<Home />} />
        <Route path='/History' element={<History />} />
      </Route>
    </Routes>
  );
}