import { ADD_TO_CART,EMPTY_CART,REMOVE_FROM_CART } from "./constant"

export const addToCart = (data) =>{
    // console.warn('addToCart is called',data)
    return{
        type: ADD_TO_CART, 
        data
    }
}

export const removeFromCart = (data) =>{
    // console.warn('removeFromCArt is called',data)
    return{
        type: REMOVE_FROM_CART, 
        data
    }
}

export const emptyCart = () =>{
    // console.warn('Empty cart')
    return{
        type: EMPTY_CART, 
    }
}
