import React, { useState } from 'react';

import { useCart } from '../../contexts/CartContext';
import { CheckoutFlow } from '../Checkout/CheckoutFlow';
import {
  CartAside,
  CartContainer,
  Overlay,
  CartItem,
  CartSummary,
} from '../Cart/styles';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    removeAllFromCart,
    addToCart,
    isCartOpen,
    toggleCart,
    cartTotal,
    cartQuantity,
  } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);

  if (!isCartOpen) return null;

  const handleRemoveAll = (itemId: string) => {
    if (window.confirm('Deseja excluir todos os itens deste produto?')) {
      removeAllFromCart(itemId);
    }
  };

  const handleFinalizarCompra = () => {
    if (cartItems.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
    toggleCart(); // Fecha o carrinho também
  };

  // Se o checkout estiver aberto, renderizar apenas o fluxo de checkout
  if (showCheckout) {
    return (
      <CheckoutFlow
        cartTotal={cartTotal}
        cartItems={cartItems}
        onClose={handleCloseCheckout}
      />
    );
  }

  return (
    <CartContainer>
      <Overlay onClick={toggleCart} />
      <CartAside>
        <h2>Carrinho ({cartQuantity})</h2>

        <ul>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>R$ {item.preco.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                    <button
                      className="trash-btn"
                      onClick={() => handleRemoveAll(item.id)}
                      title="Remover todos"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </CartItem>
            ))
          )}
        </ul>

        {cartItems.length > 0 && (
          <CartSummary>
            <p>Total: R$ {cartTotal.toFixed(2)}</p>
            <button onClick={handleFinalizarCompra}>
              Finalizar Compra
            </button>
          </CartSummary>
        )}
      </CartAside>
    </CartContainer>
  );
};

export default Cart;