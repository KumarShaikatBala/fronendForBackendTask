import serverFetch from "@/fetch/server";
import AddToCart from "@/components/AddToCart";
import Image from "next/image";
import placeholder from "@public/image.png";
export default async function Product({ params }){
    const data = await serverFetch([`products/${params.product}`]);
    const product = data?.data;
    return (
        <>
            <div className="font-sans">
                <div className="grid items-start grid-cols-1 md:grid-cols-2 p-4 gap-12 max-w-6xl mx-auto">

                    <div className="max-lg:max-w-2xl">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-800">{product?.name}</h2>
                        </div>


                        <div className="mt-8">
                            <p className="text-gray-800 text-4xl font-bold">{product.price}</p>
                          {/*  <p className="text-gray-500 text-sm mt-2"><strike>$42</strike> <span className="text-sm ml-1">Tax included</span></p>*/}
                        </div>


                        <div className="mt-8 space-y-4 max-w-xs">
                            <Image width={96000}
                                   height={96}
                                   src={placeholder}
                                   alt={product?.name}
                                   className="w-[300px] h-[300px]"/>
                            <AddToCart product={product}/>


{/*                            <button type="button" className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md">Buy now</button>
                            <button type="button" className="w-full px-4 py-2.5 border border-orange-500 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md">Add to cart</button>*/}
                        </div>

                        <div className="mt-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Product Description</h3>
                                <div className="text-sm text-gray-500 mt-4">
                                    <p> {product?.description }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}