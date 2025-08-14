import {
  CartAside,
  CartContainer,
  Overlay,
  CartItem,
  CartSummary,
} from './styles';
import { useCart } from '../../contexts/CartContext';
import { CheckoutSteps } from '../CheckoutSteps';

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
    checkoutStep,
    goToNextStep,
  } = useCart();

  if (!isCartOpen) return null;

  const handleRemoveAll = (itemId: string) => {
    if (window.confirm('Deseja excluir todos os itens deste produto?')) {
      removeAllFromCart(itemId);
    }
  };

  const handleFinalizePurchase = () => {
    if (cartItems.length === 0) {
      alert('Adicione itens ao carrinho antes de finalizar a compra');
      return;
    }
    goToNextStep(); // Vai para o step 'delivery'
  };

  return (
    <CartContainer>
      <Overlay onClick={toggleCart} />
      <CartAside>
        {checkoutStep === 'cart' ? (
          <>
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
                        <button onClick={() => removeFromCart(item.id)}>
                          -
                        </button>
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
                <button onClick={handleFinalizePurchase}>
                  Finalizar Compra
                </button>
              </CartSummary>
            )}
          </>
        ) : (
          <>
            <button
              onClick={toggleCart}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
            <CheckoutSteps />
          </>
        )}
      </CartAside>
    </CartContainer>
  );
};

export default Cart;
