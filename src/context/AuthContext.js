"use client";
import {createContext, useState, useContext, useLayoutEffect, useEffect} from 'react'
import axios from "@/axios/axiosInstance";
import {destroyCookie, setCookie, parseCookies} from 'nookies';
import {toast} from "react-toastify";

/*import {useRouter} from "next/navigation";*/
export const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}
export const AuthProvider = ({children}) => {
    /*const router = useRouter()*/
    const [user, setUser] = useState();
    const [statuses, setStatuses] = useState();
    const [role, setRoles] = useState();
    const [permissions, setPermissions] = useState();
    const [isLoading, setLoading] = useState(true);
    const [token, setToken] = useState(typeof window !== 'undefined' ? localStorage.getItem('token') : null);
    const [cartItems, setCartItems] = useState(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartItems')) : []);

    const addToCart = (item) => {
        if (!cartItems) {
            setCartItems([{...item, quantity: 1}]);
        }
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? {...cartItem, quantity: cartItem.quantity + 1}
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }
    };

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? {...cartItem, quantity: cartItem.quantity - 1}
                        : cartItem
                )
            );
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        const data = localStorage.getItem('cartItems');
        if (data) {
                setCartItems(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]); // Include cartItems as a dependency here
    useLayoutEffect(() => {
        if (token) {
            fetchUser();
            const cookies = parseCookies()
            const authCookies = cookies.token || '';
            if (!authCookies) {
                setCookie(null, 'token', token)
            }
        } else {
            ['token', 'type'].forEach((cookieName) => {
                destroyCookie(null, cookieName);
                destroyCookie(undefined, cookieName);
            });
            setLoading(false);
        }
    }, [token]);
    const fetchUser = async () => {
        try {
            const response = await axios.get('profile');
            if (response) {
                setRoles(response.data.data.role)
                const type = btoa(response.data.data.role);
                setCookie(null, "type", type);
                setUser(response.data.data)
                setPermissions(response.data.permissions)
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            if (error.response.status === 401) {
                toast.error(error.response.data.message);
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('token')
                } else {
                    console.log('No Local Storage')
                }
                destroyCookie(null, 'token');
            }
            setLoading(false);
        }
    };

    const LogoutHandler = async () => {
        try {
            await fetch('/api/logout', {
                method: 'post',
                headers: {'Content-Type': 'application/json'}
            });
        } catch (error) {
            toast.error(error.response?.data?.error)
            window.location.href = '/';
            window.location.reload();
        }
    }
    const logout = async () => {
        try {
            const res = await axios.post('logout');
            toast.success('Logout success')
            setUser(null)
            await LogoutHandler()
                ['token', 'type'].forEach((cookieName) => {
                destroyCookie(null, cookieName);
                destroyCookie(undefined, cookieName);
            });
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token')
            } else {
                console.log('No Local Storage')
                window.location.href = '/';
                window.location.reload();
            }
            // await router.push('/login')
            window.location.href = '/login';
            window.location.reload();
        } catch (error) {
            console.error('Logout failed:', error);
            window.location.href = '/';
            window.location.reload();
        }
    }

    return <AuthContext.Provider value={{
        user, permissions, role, logout, isLoading, token, fetchUser,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal
    }}>
        {children}
    </AuthContext.Provider>
}