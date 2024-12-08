"use client";
import axios from "@/axios/axiosInstance";
import { useState, useCallback } from "react";

export default function Pay({ amount }) {
    const [loading, setLoading] = useState(false);

    const payment = useCallback(async () => {
        setLoading(true);
        const data = {
            amount: amount,
            description: "Payment for the product",
        };
        try {
            const response = await axios.post("payment", data);
            if (response) {
                setLoading(false);
                window.open(response.data.approvalUrl, "_blank");
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, [amount]);

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-lg">Total Amount: {amount}</p>
            {loading && <p className="text-blue-600">Processing...</p>}
            {!loading && (
                <button
                    onClick={payment}
                    className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg"
                >
                    Pay
                </button>
            )}
        </div>
    );
}