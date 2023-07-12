import { ADD_TO_CART , EMPTY_CART,REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Add to cart reducer called", action);
      return [action.data, ...data];
      case REMOVE_FROM_CART:
        console.log("Remove from Cart reducer called", action);
        
        let isItemRemoved = false; 
        const remainingItem = data.filter((item) => {
          if (item.id === action.data && !isItemRemoved) {
            isItemRemoved = true; 
            return false;
          }
          return true; 
        });
        // console.warn("remaining Item: ", remainingItem);
        return [...remainingItem];
  
      case EMPTY_CART:
        // console.log("Empty Cart reducer called", action);
        data = [];
        return [...data];
    default:
      return data; // Return the current state by default
  }
};

// export default cartData