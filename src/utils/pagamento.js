// Verifica se todos os 16 dígitos do cartão são iguais
export const verificarTentativaGolpe = (numeroCartao) => {
  const numeros = numeroCartao.replace(/\D/g, '');
  if (numeros.length !== 16) return false;
  return /^(.)\1{15}$/.test(numeros);
};

// Formata valores em Real (BRL)
export const formatarMoeda = (valor) => {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};