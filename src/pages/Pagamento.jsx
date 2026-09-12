import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { usePagamento } from '../hooks/usePagamento';
import { produtos } from '../data/produtos';
import { formatarMoeda } from '../utils/pagamento';

const schema = z.object({
  titular: z.string().min(3, 'Nome do titular é obrigatório'),
  cartao: z.string().refine(
    (valor) => /^\d{16}$/.test(valor.replace(/[\s-]/g, '')),
    { message: 'Cartão deve ter 16 dígitos' }
  ),
  validade: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Formato inválido (MM/AA)'),
  cvv: z.string().regex(/^\d{3}$/, 'CVV deve ter 3 dígitos'),
});

const Pagamento = () => {
  const { isProcessando, processarCompra } = usePagamento();

  const total = produtos.reduce(
    (acumulador, produto) =>
      acumulador + produto.preco * produto.quantidade,
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (dados) => {
    processarCompra(dados);
  };

  return (
    <div className="page-pagamento">
      <div className="page-header">
        <h1>Pagamento</h1>
        <p className="page-subtitle">
          Preencha os dados do cartão
        </p>
      </div>

      <div className="pagamento-content">
        <div className="pagamento-total">
          <p className="total-label">TOTAL DA COMPRA</p>
          <p className="total-valor">{formatarMoeda(total)}</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pagamento-form"
        >
          <div className="form-group">
            <label htmlFor="titular">Nome do titular</label>
            <input
              id="titular"
              type="text"
              placeholder="Como está impresso no cartão"
              {...register('titular')}
              disabled={isProcessando}
              aria-invalid={errors.titular ? 'true' : 'false'}
              aria-describedby={
                errors.titular ? 'erro-titular' : undefined
              }
            />

            {errors.titular && (
              <span
                id="erro-titular"
                className="error-message"
                role="alert"
              >
                {errors.titular.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="cartao">Número do cartão</label>
            <input
              id="cartao"
              type="text"
              placeholder="0000 0000 0000 0000"
              {...register('cartao')}
              disabled={isProcessando}
              aria-invalid={errors.cartao ? 'true' : 'false'}
              aria-describedby={
                errors.cartao ? 'erro-cartao' : undefined
              }
            />

            {errors.cartao && (
              <span
                id="erro-cartao"
                className="error-message"
                role="alert"
              >
                {errors.cartao.message}
              </span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="validade">Validade (MM/AA)</label>
              <input
                id="validade"
                type="text"
                placeholder="MM/AA"
                {...register('validade')}
                disabled={isProcessando}
                aria-invalid={errors.validade ? 'true' : 'false'}
                aria-describedby={
                  errors.validade ? 'erro-validade' : undefined
                }
              />

              {errors.validade && (
                <span
                  id="erro-validade"
                  className="error-message"
                  role="alert"
                >
                  {errors.validade.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                type="text"
                placeholder="123"
                {...register('cvv')}
                disabled={isProcessando}
                aria-invalid={errors.cvv ? 'true' : 'false'}
                aria-describedby={
                  errors.cvv ? 'erro-cvv' : undefined
                }
              />

              {errors.cvv && (
                <span
                  id="erro-cvv"
                  className="error-message"
                  role="alert"
                >
                  {errors.cvv.message}
                </span>
              )}
            </div>
          </div>

          {isProcessando && (
            <p className="loading-message" aria-live="polite">
              Processando compra...
            </p>
          )}

          <button
            type="submit"
            className="btn-pagar"
            disabled={isProcessando}
          >
            {isProcessando ? 'Aguarde...' : 'Pagar agora'}
          </button>

          <Link to="/" className="btn-voltar">
            Voltar ao carrinho
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Pagamento;