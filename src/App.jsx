import { Footer, NavBar } from './components/common';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='photo-shop'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
