# SmartCart

Aplicação web desenvolvida em React para simular o fluxo de checkout e pagamento de um e-commerce.

O projeto permite visualizar produtos no carrinho, calcular subtotais e o valor total da compra, preencher e validar dados fictícios de pagamento e simular o processamento da transação, direcionando o usuário para uma página de sucesso ou falha conforme a regra de negócio definida.

## Objetivo

O SmartCart foi desenvolvido como projeto avaliativo com o objetivo de aplicar, de forma integrada, conceitos fundamentais do desenvolvimento Front-End com React.

Entre os principais conceitos trabalhados estão:

- Componentização com React.
- Props e renderização de listas.
- Hooks e gerenciamento de estado.
- Custom Hooks.
- Formulários com React Hook Form.
- Validação de dados com Zod.
- Operações assíncronas.
- React Router.
- Regras de negócio.
- Modularização do código.
- Acessibilidade.
- Responsividade com abordagem mobile-first.
- Versionamento com Git e GitHub.
- Organização de tarefas com Trello.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- React Router DOM
- React Hook Form
- Zod
- `@hookform/resolvers`
- HTML5
- CSS3
- Git
- GitHub
- Trello
- Chrome DevTools

## Funcionalidades

### Carrinho

O carrinho possui quatro produtos fictícios, contendo:

- `id`
- nome
- preço unitário
- quantidade

Os produtos são renderizados dinamicamente utilizando `map()` e uma `key` estável.

A aplicação calcula automaticamente o subtotal de cada produto e o valor total da compra.

Os valores monetários são formatados em Real brasileiro (`BRL`).

### Pagamento

A página de pagamento utiliza React Hook Form integrado ao Zod para controlar e validar o formulário.

São solicitados os seguintes dados fictícios:

- Nome do titular.
- Número do cartão.
- Validade no formato `MM/AA`.
- CVV.

As validações verificam:

- Nome do titular com no mínimo 3 caracteres.
- Número do cartão com 16 dígitos.
- Validade no formato `MM/AA`.
- CVV com 3 dígitos.

Os campos também possuem recursos de acessibilidade, como associação entre rótulos e inputs, `aria-invalid`, `aria-describedby` e mensagens de erro com `role="alert"`.

### Regra de negócio

A aplicação possui uma regra para identificar uma tentativa de fraude.

Quando os 16 dígitos do cartão informado são iguais, por exemplo:

`1111111111111111`

a compra é recusada e o usuário é direcionado para a página de falha, onde é exibida a mensagem:

> tentativa de golpe

Para cartões válidos que não atendem a essa condição, o fluxo é direcionado para a página de sucesso.

### Processamento assíncrono

O processamento da compra é controlado pelo custom hook `usePagamento`.

A aplicação simula uma operação assíncrona de aproximadamente 2 segundos.

Durante esse período:

- A mensagem `Processando compra...` é exibida.
- Os campos ficam desabilitados.
- O botão de pagamento fica desabilitado.
- O texto do botão muda para `Aguarde...`.

Após o processamento, a aplicação utiliza navegação programática para direcionar o usuário para a página correspondente ao resultado.

## Rotas

A navegação da aplicação é realizada com React Router DOM.

| Rota | Página |
| --- | --- |
| `/` | Carrinho |
| `/pagamento` | Pagamento |
| `/sucesso` | Compra aprovada |
| `/falha` | Compra recusada |

O indicador visual de progresso representa o fluxo:

`Carrinho → Pagamento → Resultado`

As páginas de sucesso e falha são tratadas como resultados alternativos da etapa de pagamento.

## Estrutura do projeto

```text
Smart-Cart-react/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   └── logo.png
│   │   └── styles/
│   │       └── index.css
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Stepper.jsx
│   │   ├── ItemCarrinho.jsx
│   │   └── ResumoCompra.jsx
│   │
│   ├── data/
│   │   └── produtos.js
│   │
│   ├── hooks/
│   │   └── usePagamento.js
│   │
│   ├── pages/
│   │   ├── Carrinho.jsx
│   │   ├── Pagamento.jsx
│   │   ├── Sucesso.jsx
│   │   └── Falha.jsx
│   │
│   ├── utils/
│   │   └── pagamento.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Organização e modularização

A aplicação foi dividida em responsabilidades específicas.

### `components`

Contém componentes reutilizáveis da interface:

- `Header`
- `Stepper`
- `ItemCarrinho`
- `ResumoCompra`

### `pages`

Contém as páginas principais da aplicação:

- `Carrinho`
- `Pagamento`
- `Sucesso`
- `Falha`

### `data`

Contém os dados fictícios utilizados pelo carrinho.

### `hooks`

Contém o custom hook `usePagamento`, responsável pelo estado e processamento da compra.

### `utils`

Contém funções auxiliares relacionadas à regra de negócio e à formatação dos valores monetários.

### `assets`

Contém a identidade visual e os estilos globais da aplicação.

## Responsividade

A interface foi desenvolvida utilizando abordagem mobile-first.

Os estilos básicos são direcionados inicialmente para telas menores e, por meio de media queries com `min-width`, a interface é adaptada para tablets e desktops.

Entre os principais comportamentos responsivos estão:

- Header adaptável.
- Stepper responsivo.
- Carrinho em uma coluna em telas menores.
- Resumo da compra reposicionado no mobile.
- Formulário de pagamento adaptável.
- Campos de validade e CVV reorganizados em telas menores.
- Layout em múltiplas colunas em telas maiores.

## Acessibilidade

Foram implementadas melhorias de acessibilidade, incluindo:

- Uso de `label` associado aos campos através de `htmlFor`.
- Uso de `aria-invalid`.
- Uso de `aria-describedby`.
- Mensagens de erro com `role="alert"`.
- Feedback de processamento com `aria-live` e `role="status"`.
- Foco visual nos campos do formulário.
- Foco visível nos elementos interativos.
- Indicação visual para campos inválidos.
- Uso de `inputMode` adequado para campos numéricos.
- Atributos `autocomplete` apropriados para dados de cartão.

## Técnicas e uso do Debugger

Durante o desenvolvimento do SmartCart, foram utilizadas ferramentas de depuração do navegador para investigar e validar comportamentos importantes da aplicação.

- Verificação do estado `isProcessando` do custom hook `usePagamento` durante a simulação assíncrona de pagamento.
- Análise do número do cartão recebido pela função `verificarTentativaGolpe`, após a remoção de caracteres não numéricos.
- Verificação dos erros de validação gerados pelo React Hook Form em conjunto com o Zod.
- Testes do fluxo de navegação após o processamento do pagamento, validando os redirecionamentos para `/sucesso` e `/falha`.
- Uso do modo responsivo do Chrome DevTools para verificar o comportamento da interface em diferentes tamanhos de tela.
- Verificação dos estados de foco, campos inválidos e botão desabilitado durante o processamento.

Essas verificações auxiliaram na identificação de problemas e na validação da regra de negócio, do formulário, da navegação e da responsividade da aplicação.

## Versionamento

O desenvolvimento foi versionado utilizando Git e GitHub.

O fluxo de trabalho utiliza:

- `main` — versão estável/final.
- `develop` — integração do desenvolvimento.
- `feature/*` — desenvolvimento de funcionalidades e melhorias específicas.

Entre as branches utilizadas durante o desenvolvimento estão:

- `feature/dependencias`
- `feature/stepper`
- `feature/acessibilidade`
- `feature/componentes-layout`
- `feature/mobile-first`
- `feature/limpeza`

Foram utilizados commits descritivos para registrar a evolução do projeto e merges explícitos para integrar as funcionalidades na branch `develop`.

Ao final da revisão, a versão concluída é integrada à branch `main`.

## Organização do projeto com Trello

O desenvolvimento foi organizado utilizando um quadro Kanban no Trello.

O quadro contém tarefas relacionadas a:

- Planejamento e setup.
- Git e branches.
- Dados do carrinho.
- Componentes.
- Rotas.
- Formulário de pagamento.
- Validação.
- Regra de negócio.
- Processamento assíncrono.
- Responsividade.
- Acessibilidade.
- Debugger.
- Documentação e entrega final.

**Quadro do projeto:**

https://trello.com/b/Dm8Ql2wY

## Como executar o projeto

### Pré-requisitos

É necessário ter instalado:

- Node.js
- npm
- Git

### 1. Clonar o repositório

```bash
git clone https://github.com/Betsy-hm/Smart-Cart-react.git
```

### 2. Entrar na pasta

```bash
cd Smart-Cart-react
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar em modo de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

Exemplo:

```text
http://localhost:5173/
```

### 5. Gerar a versão de produção

```bash
npm run build
```

## Testes realizados

Antes da entrega foram verificados os principais fluxos da aplicação.

### Compra aprovada

Foi utilizado um cartão fictício válido com 16 dígitos diferentes.

Resultado esperado:

`/sucesso`

### Tentativa de golpe

Foi utilizado um cartão com os 16 dígitos iguais.

Exemplo:

```text
1111111111111111
```

Resultado esperado:

`/falha`

Mensagem esperada:

```text
tentativa de golpe
```

### Validação do formulário

Também foram testados:

- Formulário vazio.
- Nome do titular inválido.
- Número de cartão inválido.
- Validade inválida.
- CVV inválido.

### Processamento

Foi confirmado que durante aproximadamente 2 segundos:

- A aplicação apresenta feedback visual.
- O botão permanece desabilitado.
- Os campos permanecem desabilitados.

### Responsividade

A interface foi verificada em diferentes larguras utilizando o modo responsivo do Chrome DevTools.

### Build de produção

O projeto foi compilado utilizando:

```bash
npm run build
```

O build foi concluído com sucesso.

## Decisões de desenvolvimento

Algumas decisões adotadas no projeto:

- Separação entre páginas, componentes, dados, hooks e utilitários.
- Uso de um custom hook para isolar a lógica de processamento do pagamento.
- Uso de React Hook Form e Zod para separar validação e interface.
- Centralização da regra de detecção de tentativa de golpe em uma função utilitária.
- Uso de React Router para controlar as diferentes etapas da aplicação.
- Uso de um indicador de progresso com `Carrinho`, `Pagamento` e `Resultado`.
- Uso de abordagem mobile-first para responsividade.
- Inclusão de recursos de acessibilidade no formulário.
- Uso de GitFlow simplificado com `main`, `develop` e branches `feature/*`.

## Melhorias futuras

Como possíveis evoluções do projeto:

- Integração com uma API real de produtos.
- Persistência do carrinho utilizando `localStorage` ou backend.
- Possibilidade de alterar quantidades e remover produtos.
- Máscara automática para número do cartão e validade.
- Testes automatizados unitários e de integração.
- Integração com uma API real de pagamentos em ambiente seguro.
- Melhorias adicionais de acessibilidade.
- Otimização dos assets da aplicação.


## Autora

**Betsy H. Manriquez**

Projeto desenvolvido como atividade avaliativa de desenvolvimento Front-End com React.