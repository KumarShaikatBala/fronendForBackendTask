import Link from "next/link";
import {useMemo, useCallback} from "react";
export default function Pagination({currentPage, totalPages, url}) {
    const maxVisiblePages = 10; // You can change this number
    const leftBound = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const rightBound = Math.min(totalPages, leftBound + maxVisiblePages - 1);
    const generatePageNumbers = useMemo(() => {
        return Array.from({length: rightBound - leftBound + 1}, (_, index) => leftBound + index);
    }, [leftBound, rightBound]);
    const generateHref = useCallback((page) => `${url}?page=${page}&paginate=10`, [url]);
    return (
        <div className="flex mt-4 justify-center">
            <div className="flex justify-center">
                {currentPage > 1 && (
                    <Link href={generateHref(currentPage - 1)}>
                        <p className="px-2 py-1 mx-1 border rounded border-gray-300">
                            পূর্ববর্তী
                        </p>
                    </Link>
                )}
                {leftBound > 1 && <p className="px-2 py-1 mx-1">.....</p>}
                {totalPages > 1 && generatePageNumbers.map((page) => (
                    <Link key={page} href={generateHref(page)}>
                        <p
                            className={`px-2 py-1 mx-1 border rounded ${
                                currentPage === page ? "bg-blue-500 text-white" : "border-gray-300"
                            }`}
                        >
                            {page}
                        </p>
                    </Link>
                ))}
                {rightBound < totalPages && <p className="px-2 py-1 mx-1">.....</p>}
                {currentPage < totalPages && (
                    <Link href={generateHref(currentPage + 1)}>
                        <p className="px-2 py-1 mx-1 border rounded border-gray-300">
                            পরবর্তী
                        </p>
                    </Link>
                )}
            </div>
        </div>
    );
}