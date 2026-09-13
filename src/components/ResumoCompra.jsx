import { formatarMoeda } from '../utils/pagamento';

const ResumoCompra = ({ produtos }) => {
  const total = produtos.reduce(
    (acc, produto) => acc + produto.preco * produto.quantidade,
    0
  );

  return (
    <div className="resumo-compra">
      <p className="resumo-label">TOTAL DA COMPRA</p>
      <p className="resumo-total">{formatarMoeda(total)}</p>
    </div>
  );
};

export default ResumoCompra;