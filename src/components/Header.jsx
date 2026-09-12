import logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="SmartCart" className="header-logo" />

      <p className="header-descricao">
        Aplicação React para simulação de checkout e pagamento.
      </p>
    </header>
  );
};

export default Header;