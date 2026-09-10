import { formatarMoeda } from '../utils/pagamento';

const ItemCarrinho = ({ produto }) => {
  const subtotal = produto.preco * produto.quantidade;

  return (
    <div className="item-carrinho">
      <div className="item-info">
        <h3>{produto.nome}</h3>
        <p className="item-preco">
          {formatarMoeda(produto.preco)} × {produto.quantidade}
        </p>
      </div>
      <p className="item-subtotal">{formatarMoeda(subtotal)}</p>
    </div>
  );
};

export default ItemCarrinho;