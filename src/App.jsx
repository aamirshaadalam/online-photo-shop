import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { Brand, Footer, NavBar, NavRightContent } from './components';

function App() {
  return (
    <div className='photo-shop'>
      <NavBar rightContent={<NavRightContent />} leftContent={<Brand />} />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer
        position='top-right'
        theme='colored'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
