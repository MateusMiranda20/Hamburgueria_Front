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
        SetCartProducts([])

        updateLocal([])
    }

    const deletProduct = (productId) => {
        const newCart = cartProducts.filter((products) => products.id !== productId)

        SetCartProducts(newCart)
        updateLocal(newCart)
    }

    const increaseProduct = (productId) => {
        const newProducts = cartProducts.map(prd => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
        })

        SetCartProducts(newProducts)
        updateLocal(newProducts)
    }

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

        if (cartIndex >= 0 && cartProducts[cartIndex].quantity > 1) {
            // Reduz quantidade se for maior que 1
            const decreasedProducts = cartProducts.map((prd) =>
                prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
            );
            SetCartProducts(decreasedProducts);
            updateLocal(decreasedProducts);
        } else {
            // Remove o produto se a quantidade for 1
            deletProduct(productId);
        }
    };

    const updateLocal = (products) => {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(products))
    }

    useEffect(() => {
        const loadProducts = localStorage.getItem('devburguer:cartInfo')

        if (loadProducts) {
            SetCartProducts(JSON.parse(loadProducts))

        }
    }, [])

    return (
        <CartContext.Provider
            value={{
                cartProducts,
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