"use client";
import {useContext} from 'react'
import {AuthContext} from '@/context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';

export default function AddToCart({product}) {
    const {cartItems, addToCart, removeFromCart} = useContext(AuthContext)
    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
    };
    return (
        <>
            {!cartItems || !cartItems.find(item => item.id === product.id) ? (
                    <button className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg"
                            onClick={() => {
                                addToCart(product)
                            }
                            }
                    >
                        Add to cart
                    </button>
                ) : (
                    <div className="flex gap-4">
                        <button
                            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                                addToCart(product)
                            }}
                        >
                            +
                        </button>
                        {cartItems && (
                            <p className='text-gray-600'>{cartItems?.find(item => item.id === product.id).quantity}</p>
                        )}

                        <button
                            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                                const cartItem = cartItems?.find((item) => item.id === product.id);
                                if (cartItem.quantity === 1) {
                                    handleRemoveFromCart(product);
                                } else {
                                    removeFromCart(product);
                                }
                            }}
                        >
                            -
                        </button>
                    </div>
                )
            }
        </>
    )
}