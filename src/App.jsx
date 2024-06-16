import SideNavigation from './components/SideNavigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FolderCreation from './pages/FolderCreation';
import Carousel from './pages/Caroulse';

function App() {
  return (
    <BrowserRouter>
      <div className='flex w-full h-full'>
        <SideNavigation />
        <Routes>
          <Route path='/' element={<FolderCreation />} />
          <Route path='/folder-creation' element={<FolderCreation />} />
          <Route path='/carousel' element={<Carousel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
