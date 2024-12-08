import serverFetch from "@/fetch/server";
import React from "react";
import Pagination from "@/app/components/Pagination";

export default async function Dashboard({searchParams}) {
    const currentPage = parseInt(searchParams.page) || 1;
    const data = await serverFetch(['orders', {
        paginate: parseInt(searchParams.paginate) || 10,
        page: currentPage,
    }]);
    let per_page, total, totalPages, orders;
    if (data.data) {
        per_page = data.data.per_page;
        total = data.data.total;
        totalPages = Math.ceil(total / per_page);
        orders = data?.data?.data;
    }
    return (
        <>
            <div className="p-2 md:p-6">
                <div className="p-4 bg-white rounded shadow space-y-2">
                    <div className="sm:flex justify-between items-center ">
                        <p className="font-bold text-base">All Orders Admin Dashboard</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border text-sm  text-left rtl:text-right text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-[#D5ECC2]">
                            <tr className="">
                                <th className="border border-gray-400 px-2 py-3 text-center ">
                                   Customer Name
                                </th>
                                <th className="border border-gray-400 px-2 py-3 text-center ">
                                    Product Name
                                </th>
                                <th className="border border-gray-400 px-2 py-3 text-center ">
                                    Quantity
                                </th>
                                <th className="border border-gray-400 px-2 py-3 text-center">
                                    Price
                                </th>
                                <th className="border border-gray-400 px-2 py-3 text-center">
                                    Total Price
                                </th>
                                <th className="border border-gray-400 px-2 py-3 text-center">
                                    Order Date
                                </th>

                            </tr>
                            </thead>
                            {orders ? (
                                <tbody>
                                {orders.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white text-black hover:bg-gray-50 border-collapse text-xs"
                                    >
                                        <td className="p-2   border   2xl:px-6  whitespace-pre-line text-center ">
                                            {item?.user?.name}
                                        </td>
                                        <td className="p-2   border   2xl:px-6  whitespace-pre-line text-center ">
                                            {item?.product?.name}
                                        </td>
                                        <td className="p-2   border   2xl:px-6  whitespace-pre-line text-center ">
                                            {item.quantity}
                                        </td>
                                        <td className="p-2   border   2xl:px-6  whitespace-pre-line text-center ">
                                            {item?.product?.price}
                                        </td>
                                        <td className="p-2   border   2xl:px-6  whitespace-pre-line text-center ">
                                            {item.total_price}
                                        </td>
                                        <td className="p-2   border   2xl:px-6  whitespace-pre-line text-center ">
                                            {item.order_date}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            ) : (
                                <tbody>
                                <tr>
                                    <td colSpan={8} className="text-center text-xl">No Found Any Order</td>
                                </tr>
                                </tbody>
                            )}
                        </table>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            url={"/user/dashboard"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
