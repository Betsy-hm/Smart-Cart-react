import { Link } from 'react-router-dom';
import { produtos } from '../data/produtos';
import ItemCarrinho from '../components/ItemCarrinho';
import ResumoCompra from '../components/ResumoCompra';

const Carrinho = () => {
  return (
    <div className="page-carrinho">
      <div className="page-header">
        <h1>Seu carrinho</h1>
        <p className="page-subtitle">Confira os itens antes de finalizar</p>
      </div>

      <div className="carrinho-content">
        <div className="carrinho-lista">
          {produtos.map((produto) => (
            <ItemCarrinho key={produto.id} produto={produto} />
          ))}
        </div>

        <div className="carrinho-resumo">
          <ResumoCompra produtos={produtos} />
          <Link to="/pagamento" className="btn-finalizar">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;