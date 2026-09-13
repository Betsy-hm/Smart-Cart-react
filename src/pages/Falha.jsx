import { Link } from 'react-router-dom';

const Falha = () => {
  return (
    <div className="page-falha">
      <div className="resultado-card">
        <div className="resultado-icon falha">✕</div>
        <h1>Compra recusada</h1>
        <p className="mensagem-golpe">tentativa de golpe</p>
        <Link to="/pagamento" className="btn-voltar">
          Tentar novamente
        </Link>
      </div>
    </div>
  );
};

export default Falha;