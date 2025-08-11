import { useCart } from '../../contexts/CartContext';
import { DeliveryForm } from '../DeliveryForm';
import { PaymentForm } from '../PaymentForm';
import { DeliveryInfo } from '../../types';
import { StepsContainer, Step, ConfirmationContainer, Button } from './styles';

export const CheckoutSteps = () => {
  const {
    checkoutStep,
    goToNextStep,
    goToPrevStep,
    deliveryInfo,
    setDeliveryInfo,
    paymentMethod,
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
      <StepsContainer>
        <Step active={checkoutStep === 'cart'}>Carrinho</Step>
        <Step active={checkoutStep === 'delivery'}>Entrega</Step>
        <Step active={checkoutStep === 'payment'}>Pagamento</Step>
        <Step active={checkoutStep === 'confirmation'}>Confirmação</Step>
      </StepsContainer>

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
        <PaymentForm onSubmit={handlePaymentSubmit} onBack={goToPrevStep} />
      )}

      {checkoutStep === 'confirmation' && (
        <ConfirmationContainer>
          <h2>Pedido Confirmado!</h2>
          <p>Obrigado por escolher La Dolce Vita Trattoria!</p>

          <div className="order-number">{generateOrderNumber()}</div>

          <p>Seu pedido está sendo preparado e chegará em breve.</p>
          <p>
            Endereço de entrega: {deliveryInfo?.address}, {deliveryInfo?.number}{' '}
            {deliveryInfo?.complement && `- ${deliveryInfo.complement}`}
          </p>
          <p>
            Forma de pagamento:{' '}
            {paymentMethod === 'credit' && 'Cartão de Crédito'}
            {paymentMethod === 'debit' && 'Cartão de Débito'}
            {paymentMethod === 'cash' && 'Dinheiro'}
            {paymentMethod === 'pix' && 'PIX'}
          </p>
          <p>Total: R$ {cartTotal.toFixed(2)}</p>

          <Button primary onClick={resetCheckout}>
            Fazer Novo Pedido
          </Button>
        </ConfirmationContainer>
      )}
    </>
  );
};
