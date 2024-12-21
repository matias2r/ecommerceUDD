export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existInProduct = state.cart.find(product => product._id === action.payload._id)
            
            if(existInProduct) {
                return {
                    ...state,
                    cart: state.cart.map(product => 
                        product._id === action.payload._id 
                        ? { ...product, quantity: product.quantity + 1} 
                        : product)
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
            }

        }

        case 'REMOVE_FROM_CART': 
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload)
            }

        case 'INCREASE_QUANTITY':
            return {
                ...state, 
                cart: state.cart.map(product => product._id === action.payload ? { ...product, quantity: product.quantity + 1} : product)
            }

        case 'DECREASE_QUANTITY':
            return {
                ...state, 
                cart: state.cart.map(product => product._id === action.payload ? { ...product, quantity: product.quantity - 1} : product)
            }
        
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }
    }
}