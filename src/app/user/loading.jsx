import React from "react";
import Loading from "@/app/components/common/Loading";

export default function loading() {

    return (
        <div className="flex justify-center items-center min-h-[100vh] flex-col">
            {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">
            </div> */}
            <Loading/>
            <h1 className="p-4">Please Wait...</h1>
        </div>
    );
}