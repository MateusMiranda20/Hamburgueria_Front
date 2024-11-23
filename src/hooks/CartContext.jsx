import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartProducts, SetCartProducts] = useState([])

    const putProductCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

        let newProduct = []

        if (cartIndex >= 0) {
            newProduct = cartProducts

            newProduct[cartIndex].quantity =
            newProduct[cartIndex].quantity + 1

            SetCartProducts(newProduct)
        }
        else {
            product.quantity = 1
            newProduct = [...cartProducts, product];

            SetCartProducts(newProduct)
        }
        updateLocal(newProduct)
    }

    const clearCart = () => {

    }

    const deletProduct = (product) => {
        const newCart = cartProducts.filter((products) => products.id !== product.id)

        SetCartProducts(newCart)
        updateLocal(decreaseProduct)
    }

    const increaseProduct = (productId) => {
        const newProducts = cartProducts.map(prd => {
            return prd.id === productId ? {...prd, quantity: prd.quantity + 1} : prd
        } )

        SetCartProducts(newProducts)
        updateLocal(decreaseProduct)
    }

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

        if (cartProducts[cartIndex]. quantity > 1) {
            const decreaseProducts = cartProducts.map((prd) => {
                return prd.id === productId ? {...prd, quantity: prd.quantity - 1}
                : prd
            })

            SetCartProducts(decreaseProducts)
            updateLocal(decreaseProduct)
        } else {
            deletProduct(productId)
        }
    }

    const updateLocal = (products) => {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(products))
    }

    useEffect(() => {
        const loadProducts = localStorage.getItem('devburguer:cartInfo')

        if (loadProducts ) {
            SetCartProducts(JSON.parse(loadProducts))
        } else {
            
        }
    }, [])

    return (
        <CartContext.Provider
            value={{
                putProductCart,
                clearCart,
                deletProduct,
                increaseProduct,
                decreaseProduct
                }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {

    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useUser must be a valid context')
    }

    return context
}