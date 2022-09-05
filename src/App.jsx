import { Catalog } from './components/photos';
import { Footer, NavBar } from './components/common';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
