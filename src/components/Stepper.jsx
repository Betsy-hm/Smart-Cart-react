import { useLocation } from 'react-router-dom';

const Stepper = () => {
  const location = useLocation();
  const path = location.pathname;

  const steps = [
    { path: '/', label: 'Carrinho', icon: '1' },
    { path: '/pagamento', label: 'Pagamento', icon: '2' },
    { path: '/resultado', label: 'Resultado', icon: '3' },
  ];

  const currentIndex =
    path === '/sucesso' || path === '/falha'
      ? 2
      : steps.findIndex((step) => step.path === path);

  return (
    <div className="stepper">
      <div className="stepper-container">
        {steps.map((step, index) => {
          let className = 'stepper-item';

          if (index < currentIndex) {
            className += ' concluido';
          }

          if (index === currentIndex) {
            className += ' ativo';
          }

          return (
            <div key={step.path} className={className}>
              <div className="stepper-icon">{step.icon}</div>
              <span className="stepper-label">{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;