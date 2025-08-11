import React, { createContext, useState, useContext, ReactNode } from 'react';
import { DeliveryInfo } from '../types';

type CartItem = {
  id: string;
  nome: string;
  foto: string;
  preco: number;
  quantidade: number;
};

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation';

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantidade'>) => void;
  removeFromCart: (id: string) => void;
  removeAllFromCart: (id: string) => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  cartTotal: number;
  cartQuantity: number;
  checkoutStep: CheckoutStep;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  resetCheckout: () => void;
  deliveryInfo: DeliveryInfo | null;
  setDeliveryInfo: (info: DeliveryInfo) => void;
  paymentMethod: string | null;
  setPaymentMethod: (method: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('cart');
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const addToCart = (item: Omit<CartItem, 'quantidade'>) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantidade: cartItem.quantidade + 1 }
            : cartItem,
        );
      }

      return [...prevItems, { ...item, quantidade: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);

      if (existingItem && existingItem.quantidade > 1) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item,
        );
      }

      return prevItems.filter((item) => item.id !== id);
    });
  };

  const removeAllFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0,
  );

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantidade,
    0,
  );

  const goToNextStep = () => {
    if (checkoutStep === 'cart') setCheckoutStep('delivery');
    else if (checkoutStep === 'delivery') setCheckoutStep('payment');
    else if (checkoutStep === 'payment') setCheckoutStep('confirmation');
  };

  const goToPrevStep = () => {
    if (checkoutStep === 'delivery') setCheckoutStep('cart');
    else if (checkoutStep === 'payment') setCheckoutStep('delivery');
    else if (checkoutStep === 'confirmation') setCheckoutStep('payment');
  };

  const resetCheckout = () => {
    setCheckoutStep('cart');
    setDeliveryInfo(null);
    setPaymentMethod(null);
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        isCartOpen,
        toggleCart,
        cartTotal,
        cartQuantity,
        checkoutStep,
        goToNextStep,
        goToPrevStep,
        resetCheckout,
        deliveryInfo,
        setDeliveryInfo,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
