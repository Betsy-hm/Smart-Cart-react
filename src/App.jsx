import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrinho from './pages/Carrinho';
import Pagamento from './pages/Pagamento';
import Sucesso from './pages/Sucesso';
import Falha from './pages/Falha';
import Header from './components/Header';
import Stepper from './components/Stepper';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <Stepper />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Carrinho />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/sucesso" element={<Sucesso />} />
            <Route path="/falha" element={<Falha />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;