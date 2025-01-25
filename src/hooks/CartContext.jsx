import { createContext, useContext, useReducer } from "react";

// Инициализация контекста
const CartContext = createContext();

// Начальное состояние корзины
const initialState = {
  items: {}, // Список ID товаров в корзине
};

// Редьюсер для управления состоянием
const cartReducer = (state, action) => {
  const id = action.payload;
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: {
          ...state.items,
          [id]: (state.items[id] || 0) + 1,
        },
      };
    case "REMOVE_FROM_CART":
      const { [id]: _, ...remainingItems } = state.items; // Удаляем товар из корзины
      return { ...state, items: remainingItems };
    case "DELETE_ITEM_FROM_CART":
      if (state.items[id] === 1) {
        const { [id]: _, ...remainingItems } = state.items; // Удаляем товар из корзины
        return { ...state, items: remainingItems };
      } else if (state.items[id] > 1) {
        return {
          ...state,
          items: {
            ...state.items,
            [id]: state.items[id] - 1,
          },
        };
      } else {
        return state;
      }
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
