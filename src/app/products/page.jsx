import serverFetch from "@/fetch/server";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@public/image.png";
import AddToCart from "@/components/AddToCart";

export default async function Products() {
    const data = await serverFetch(['products']);
    const products = data?.data.data;
    return (
        <>
            <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Products</h2>
                {products?.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products?.map((product, index) => (
                            <div key={index} className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
                                <div className="w-full overflow-hidden">
                                    <Link href={`/product/${product.id}`}>
                                        <div className='image-padding'>
                                            <Image width={96000}
                                                   height={96}
                                                   src={placeholder}
                                                   alt={product?.name}
                                                   className="hover:scale-110 transition-all"/>


                                        </div>
                                    </Link>
                                </div>

                                <div className="p-6">
                                    <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                                        <h3 className="text-lg font-bold text-gray-800">{product.price}</h3>
                                        <p className="text-lg text-blue-600 font-bold">{product.description}</p>
                                    </div>
                                    <AddToCart product={product}/>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}