import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Carrinho from './pages/Carrinho';
import Pagamento from './pages/Pagamento';
import Sucesso from './pages/Sucesso';
import Falha from './pages/Falha';
import logo from './assets/img/logo.png';
const Header = () => (
  <header className="header">
    <img src={logo} alt="SmartCart" className="header-logo" />
    <p className="header-descricao">
      Aplicação React para simulação de checkout e pagamento.
    </p>
  </header>
);

const Stepper = () => {
  const location = useLocation();
  const path = location.pathname;

  const steps = [
  { path: '/', label: 'Carrinho', icon: '1' },
  { path: '/pagamento', label: 'Pagamento', icon: '2' },
  { path: '/resultado', label: 'Resultado', icon: '3' }
];

  const currentIndex =
  path === '/sucesso' || path === '/falha'
    ? 2
    : steps.findIndex((s) => s.path === path);

  return (
    <div className="stepper">
      <div className="stepper-container">
        {steps.map((step, index) => {
          let className = 'stepper-item';
          if (index < currentIndex) className += ' concluido';
          if (index === currentIndex) className += ' ativo';

          return (
            <div key={step.path} className={className}>
              <div className="stepper-icon">{step.icon}</div>
              <span className="stepper-label">{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

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