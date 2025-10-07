import { useCart } from '../../contexts/CartContext';
import { DeliveryForm } from '../DeliveryForm';
import { PaymentForm } from '../PaymentForm';
import { DeliveryInfo } from '../../types';
import { ConfirmationContainer, Button } from './styles';

export const CheckoutSteps = () => {
  const {
    checkoutStep,
    goToNextStep,
    goToPrevStep,
    deliveryInfo,
    setDeliveryInfo,
    setPaymentMethod,
    cartTotal,
    resetCheckout,
  } = useCart();

  const generateOrderNumber = () => {
    return `ORD-${Math.floor(Math.random() * 1000000)}`;
  };

  const handleDeliverySubmit = (values: DeliveryInfo) => {
    setDeliveryInfo(values);
    goToNextStep();
  };

  interface PaymentValues {
    paymentMethod: string;
  }

  const handlePaymentSubmit = (values: PaymentValues) => {
    setPaymentMethod(values.paymentMethod);
    goToNextStep();
  };

  return (
    <>
      {checkoutStep === 'delivery' && (
        <DeliveryForm
          initialValues={
            deliveryInfo || {
              name: '',
              address: '',
              number: '',
              complement: '',
              neighborhood: '',
              city: '',
              state: '',
              cep: '',
              phone: '',
            }
          }
          onSubmit={handleDeliverySubmit}
          onBack={goToPrevStep}
        />
      )}

      {checkoutStep === 'payment' && (
        <PaymentForm
          onSubmit={handlePaymentSubmit}
          onBack={goToPrevStep}
          amount={cartTotal}
        />
      )}

      {checkoutStep === 'confirmation' && (
        <ConfirmationContainer>
          <h2>Pedido Confirmado!</h2>
          <p>Valor pago: R$ {cartTotal.toFixed(2)}</p>
          <p>
            *Nossos entregadores não estão autorizados a realizar cobranças
            extras.
          </p>

          <div className="order-number">
            <p>
              Número do pedido: <strong>{generateOrderNumber()}</strong>
            </p>
          </div>

          <p>Seu pedido está sendo preparado e chegará em breve.</p>
          <p>
            Endereço de entrega: {deliveryInfo?.address}, {deliveryInfo?.number}{' '}
            {deliveryInfo?.complement && `- ${deliveryInfo.complement}`}
          </p>
          <p>Obrigado por escolher La Dolce Vita Trattoria!</p>

          <Button primary onClick={resetCheckout}>
            Concluir
          </Button>
        </ConfirmationContainer>
      )}
    </>
  );
};
