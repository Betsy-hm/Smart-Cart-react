import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verificarTentativaGolpe } from '../utils/pagamento';

export const usePagamento = () => {
  const [isProcessando, setIsProcessando] = useState(false);
  const navigate = useNavigate();

  const processarCompra = async (dadosCartao) => {
    setIsProcessando(true);

    // RF08: Simula operação assíncrona de 2 segundos
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const numeroLimpo = dadosCartao.cartao.replace(/\D/g, '');
    const isGolpe = verificarTentativaGolpe(numeroLimpo);

    setIsProcessando(false);

    // RF09: Navegação condicional
    if (isGolpe) {
      navigate('/falha');
    } else {
      navigate('/sucesso');
    }
  };

  return { isProcessando, processarCompra };
};