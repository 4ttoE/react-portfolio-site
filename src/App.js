import './App.css';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

// Headerコンポーネントをimportする
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
