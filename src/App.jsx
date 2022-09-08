import { Footer, NavBar, NavRightContent } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='photo-shop'>
      <NavBar rightContent={<NavRightContent />} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
