import { Catalog, PhotoDetail } from './components/photos';
import { Footer, NavBar } from './components/common';

function App() {
  return (
    <div className='photo-shop'>
      <NavBar />
      {/* <Catalog /> */}
      <PhotoDetail photoId={110} />
      <Footer />
    </div>
  );
}

export default App;
