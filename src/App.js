import './App.css';
import Category from './components/Categories/Category';
import Header from './components/Header';

function App() {
  return (
    <main className="my-container mx-auto border bg-white p-4">
      <Header />
      <Category />
    </main>
  );
}

export default App;
