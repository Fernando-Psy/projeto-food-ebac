import React, { useState } from 'react';
import DeliveryForm from '../DeliveryForm';
import PaymentForm from '../PaymentForm';
import OrderConfirmation from '../OrderConfirmation';

interface DeliveryData {
  name: string;
  address: string;
  city: string;
  cep: string;
  number: string;
  complement: string;
}

interface PaymentData {
  cardName: string;
  cardNumber: string;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
}

interface CheckoutFlowProps {
  cartTotal: number;
  onClose: () => void;
}

type CheckoutStep = 'delivery' | 'payment' | 'confirmation';

const CheckoutFlow: React.FC<CheckoutFlowProps> = ({ cartTotal, onClose }) => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('delivery');
  const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [orderId, setOrderId] = useState<string>('');

  const handleDeliverySubmit = (data: DeliveryData) => {
    setDeliveryData(data);
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (data: PaymentData) => {
    setPaymentData(data);
    // Gerar um ID do pedido (normalmente viria do backend)
    const generatedOrderId = `ORDER_${Date.now()}`;
    setOrderId(generatedOrderId);
    setCurrentStep('confirmation');
  };

  const handleBackToCart = () => {
    onClose();
  };

  const handleBackToDelivery = () => {
    setCurrentStep('delivery');
  };

  const handleFinishOrder = () => {
    onClose();
    // Aqui você pode limpar o carrinho ou redirecionar para outra página
  };

  if (currentStep === 'delivery') {
    return (
      <DeliveryForm
        onSubmit={handleDeliverySubmit}
        onBack={handleBackToCart}
      />
    );
  }

  if (currentStep === 'payment') {
    return (
      <PaymentForm
        totalAmount={cartTotal}
        onSubmit={handlePaymentSubmit}
        onBack={handleBackToDelivery}
      />
    );
  }

  if (currentStep === 'confirmation') {
    return (
      <OrderConfirmation
        orderId={orderId}
        onFinish={handleFinishOrder}
      />
    );
  }

  return null;
};

export default CheckoutFlow;