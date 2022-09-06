import { Catalog, PhotoDetail } from './components/photos';
import { Footer, NavBar } from './components/common';
import { Photo } from './services/model';

function App() {
  return (
    <div className='photo-shop'>
      <NavBar />
      {/* <Catalog /> */}
      <PhotoDetail
        photo={
          new Photo({
            id: '110',
            author: 'Kenneth Thewissen',
            width: 5616,
            height: 3744,
            url: 'https://unsplash.com/photos/D76DklsG-5U',
            download_url: 'https://picsum.photos/id/110/5616/3744',
          })
        }
      />
      <Footer />
    </div>
  );
}

export default App;
