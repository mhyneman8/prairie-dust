import { useEffect, useReducer, setState } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, SET_SHOW_MORE } from '../Types';


const CartState = ({children}) => {
    const initialState = {
        showCart: false,
        cartItems: [],
        showMore: null,
    }
    
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (product) => {
        dispatch({type: ADD_TO_CART, payload: product})
    }

    const showHideCart = () => {
        dispatch({type: SHOW_HIDE_CART})
    }

    const removeItem = id => {
        dispatch({type: REMOVE_ITEM, payload: id})
    }

    const setShowMore = (id) => {
        dispatch({type: SET_SHOW_MORE, payload: id})
    }


    useEffect((cartItems) => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [initialState.cartItems])

    // useEffect((showMore) => {
    //     showMore: showMore 
    // }, [initialState.showMore])

    return (
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            showMore: state.showMore,
            addToCart,
            showHideCart,
            removeItem,
            setShowMore
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState;