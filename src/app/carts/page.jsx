import Carts from "@/components/Carts";

export default function Page() {
    return (
        <>
            <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
                <h1 className="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h1>
                <Carts/>
            </div>

        </>
    )
}