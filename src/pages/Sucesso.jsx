import { Link } from 'react-router-dom';

const Sucesso = () => {
  return (
    <div className="page-sucesso">
      <div className="resultado-card">
        <div className="resultado-icon sucesso">✓</div>
        <h1>Compra aprovada!</h1>
        <p>Seu pagamento foi processado com sucesso.</p>
        <p>Obrigado por comprar com a gente.</p>
        <Link to="/" className="btn-voltar">
          Voltar ao carrinho
        </Link>
      </div>
    </div>
  );
};

export default Sucesso;