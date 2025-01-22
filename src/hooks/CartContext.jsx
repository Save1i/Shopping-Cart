import { createContext, useContext, useReducer } from "react";

// Инициализация контекста
const CartContext = createContext();

// Начальное состояние корзины
const initialState = {
  items: [], // Список ID товаров в корзине
};

// Редьюсер для управления состоянием
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

// Провайдер контекста
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

// Хук для использования корзины
export const useCart = () => useContext(CartContext);
