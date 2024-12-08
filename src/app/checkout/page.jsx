"use client";
import {useContext, useState} from "react";
import {AuthContext} from "@/context/AuthContext";
import Image from "next/image";
import placeholder from "@public/image.png";
import customFetch from "@/fetch/api";
export default function CheckOut() {
    const {cartItems, addToCart, removeFromCart, clearCart, getCartTotal} = useContext(AuthContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [total, setTotal] = useState(getCartTotal());
    const handleSubmit = (e) => {
        e.preventDefault();
        let products = [];
        const raw = JSON.stringify({
            "name": name,
            "email": email,
            "phone": phone,
            "address": address,
            "city": city,
            "state": state,
            "zip": zip,
            "total": total,
            "products": cartItems.map((item) => {
                return {
                    "product_id": item.id,
                    "quantity": item.quantity
                }
            })
        });
        customFetch('checkout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: raw,
        }).then((response) => {
            if (response) {
                console.log(response);
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div className="font-[sans-serif] bg-white">
                <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
                    <div
                        className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
                        <div className="relative h-full">
                            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div key={item} className="flex items-start gap-4">
                                            <div
                                                className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                                                {item?.cover_image ?
                                                    <Image src={item?.cover_image} width={99999999}
                                                           height={999999999999}
                                                           alt={item?.name} className="w-full h-full object-contain"/> :
                                                    <Image src={placeholder} width={99999999} height={999999999999}
                                                           alt={item?.name} className="w-full h-full object-contain"/>}
                                            </div>
                                            <div className="w-full">
                                                <h3 className="text-base text-white">{item.name}</h3>
                                                <ul className="text-xs text-gray-300 space-y-2 mt-2">
                                                    {/* <li className="flex flex-wrap gap-4">
                                                Size <span className="ml-auto">37</span>
                                            </li>*/}
                                                    <li className="flex flex-wrap gap-4">
                                                        Quantity <span className="ml-auto">{item.quantity}</span>
                                                    </li>
                                                    <li className="flex flex-wrap gap-4">
                                                        Total Price <span className="ml-auto">${item.price}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
                                <h4 className="flex flex-wrap gap-4 text-base text-white">
                                    Total
                                    {
                                        cartItems.length > 0 ? (
                                            <div>
                                                <li className="flex flex-wrap gap-4 text-sm font-bold"><span
                                                    className="ml-auto">${getCartTotal()}</span></li>
                                            </div>
                                        ) : (
                                            <h1 className="text-lg font-bold">Your cart is empty</h1>
                                        )
                                    }
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
                        <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
                        <form className="mt-8"
                              onSubmit={handleSubmit}


                        >
                            <div>
                                <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Phone No."
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Address Line"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="City"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="State"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Zip Code"
                                            value={zip}
                                            onChange={(e) => setZip(e.target.value)}
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 max-md:flex-col mt-8">
                                    <button
                                        type="button"
                                        className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        Complete Purchase
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}