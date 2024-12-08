import serverFetch from "@/fetch/server";
import Image from "next/image";
import placeholder from '@public/image.png'
import Link from "next/link";
import AddToCart from "@/components/AddToCart";

export default async function Hero() {
    const productsData = await serverFetch(['products']);
    const products = productsData?.data.data;
    return (
        <>
            <div className="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12">
                <div className="container mx-auto flex flex-col justify-center items-center text-center">
                    <h2 className="text-white sm:text-4xl text-3xl font-bold mb-4">Task For Laravel Web Developer</h2>
                    <p className="text-white text-base text-center mb-8">Task Fronend Part
                        Developed By Kumar Shaikat Bala
                        <br/>
                        Full Stack Developer
                        <br/>
                        Have Experties on Php Laravel , React Next js ,Vue Nuxt ,Node js Express ,Python Django
                        <br/>
                        Mobile : 01617777010
                        <br/>
                        Email :kumarshaikatbala@gmail.com


                    </p>

                    <Link href='/products'
                          className="bg-white text-sm text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100">
                        Get started
                    </Link>
                </div>
            </div>

            {products?.length > 0 && (
            <div className="p-1 flex flex-wrap items-center justify-center">
                {products?.map((product, index) => (
                    <div key={index}
                         className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
                        <svg
                            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
                            viewBox="0 0 375 283"
                            fill="none"
                            style={{opacity: "0.1"}}
                        >
                            <rect
                                x="159.52"
                                y={175}
                                width={152}
                                height={152}
                                rx={8}
                                transform="rotate(-45 159.52 175)"
                                fill="white"
                            />
                            <rect
                                y="107.48"
                                width={152}
                                height={152}
                                rx={8}
                                transform="rotate(-45 0 107.48)"
                                fill="white"
                            />
                        </svg>
                        <div
                            className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div
                                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{
                                    background: "radial-gradient(black, transparent 60%)",
                                    transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                    opacity: "0.2"
                                }}
                            ></div>

                            <Link href={`/product/${product.id}`}>
                                <Image width={96000}
                                       height={96}
                                       src={placeholder}
                                       alt={product?.name}
                                       className="w-[300px] h-[300px]"/>
                            </Link>

                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-between">
                                <Link href={`/product/${product.id}`}>
                                    <span className="block font-semibold text-xl">{product?.name}</span>
                                </Link>
                                <span
                                    className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
          {product?.price}
        </span>

                                <AddToCart product={product}/>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            )}


        </>

    );
}
