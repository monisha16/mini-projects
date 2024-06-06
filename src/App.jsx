import SideNavigation from './components/SideNavigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FolderCreation from './pages/FolderCreation';

function App() {
  return (
    <BrowserRouter>
      <div className='flex w-full h-full'>
        <SideNavigation />
        <Routes>
          <Route path='/folder-creation' element={<FolderCreation />} />
        </Routes>
      </div>
      {/* <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/color' element={<ColorTherapy />} />
        <Route path='/sound' element={<SoundTherapy />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
