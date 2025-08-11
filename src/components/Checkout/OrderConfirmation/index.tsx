import React from 'react';
import { ConfirmationContainer, ConfirmationContent, Button } from '../../Cart/styles';

interface OrderConfirmationProps {
  orderId: string;
  onFinish: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orderId, onFinish }) => {
  return (
    <ConfirmationContainer>
      <ConfirmationContent>
        <h2>Pedido realizado - {orderId}</h2>

        <p>
          Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
        </p>

        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
        </p>

        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>

        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
        </p>

        <Button onClick={onFinish}>
          Concluir
        </Button>
      </ConfirmationContent>
    </ConfirmationContainer>
  );
};

export default OrderConfirmation;